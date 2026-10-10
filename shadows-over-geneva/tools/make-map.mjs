// Builds ../js/mapdata.js from the historical-basemaps "world_1930" layer
// (https://github.com/aourednik/historical-basemaps, GPL-3.0).
// Usage: npm install && node make-map.mjs   (downloads the GeoJSON if missing)
import fs from 'node:fs';
import { geoNaturalEarth1, geoPath, geoArea } from 'd3-geo';
import * as topoServer from 'topojson-server';
import * as topoSimplify from 'topojson-simplify';
import * as topoClient from 'topojson-client';
import pc from 'polygon-clipping';

// d3-geo is spherical: a polygon wound the "wrong" way covers the rest of the
// globe. Flip any polygon whose area exceeds a hemisphere.
function fixWinding(geom) {
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  const fixed = polys.map(poly => geoArea({ type: 'Polygon', coordinates: poly }) > 2 * Math.PI
    ? poly.map(r => r.slice().reverse()) : poly);
  return { type: 'MultiPolygon', coordinates: fixed };
}

const SRC = 'world_1930.geojson';
if (!fs.existsSync(SRC)) {
  const url = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_1930.geojson';
  const res = await fetch(url);
  fs.writeFileSync(SRC, Buffer.from(await res.arrayBuffer()));
}
const world = JSON.parse(fs.readFileSync(SRC, 'utf8'));

// --- name fixes and power blocs -------------------------------------------
const RENAME = {
  'White Russia': 'USSR', 'Republic of Turkey': 'Turkey', 'Chinese Warlords': 'China',
  'Empire of Japan': 'Japan', 'Ethiopia': 'Abyssinia', 'United Kingdom of Great Britain and Ireland': 'United Kingdom',
  'Libya (IT)': 'Libya', 'Mesopotamia (GB)': 'Iraq', 'Mandatory Palestine (GB)': 'Palestine', 'Syria (France)': 'Syria',
  'Madagascar (France)': 'Madagascar', 'Zaire (Belgium)': 'Belgian Congo', 'Rattanakosin Kingdom': 'Siam',
  'Danzig': 'Free City of Danzig'
};
const BLOC = name => {
  if (['Germany', 'East Prussia'].includes(name)) return 'de';
  if (['Italy', 'Libya', 'Eritrea', 'Italian Somaliland', 'Dodecanese Islands'].includes(name)) return 'it';
  if (name === 'Japan') return 'jp';
  if (name === 'USSR') return 'su';
  if (name === 'United States') return 'us';
  if (name === 'France') return 'fr';
  if (name === 'United Kingdom') return 'uk';
  return 'nt';
};

const feats = [];
for (const f of world.features) {
  let name = f.properties.NAME;
  if (!name || name === 'null') continue;               // unnamed islets
  name = RENAME[name] || name;
  if (name === 'Turkey' && f.properties.SUBJECTO !== 'Republic of Turkey') name = 'Turkey';
  feats.push({ type: 'Feature', properties: { name }, geometry: f.geometry });
}
// Drop Antarctica-sized junk & keep everything else
// Split the Irish Free State out of the UK polygon.
const NI = [[[-8.18, 54.47], [-7.6, 54.13], [-7.0, 54.4], [-6.27, 54.1], [-5.3, 54.2], [-5.3, 55.45], [-6.2, 55.45], [-7.3, 55.32], [-7.55, 55.05], [-7.25, 54.8], [-7.9, 54.7], [-8.18, 54.47]]];
const IRL_BOX = [[[-11, 51.2], [-5.3, 51.2], [-5.3, 55.6], [-11, 55.6], [-11, 51.2]]];
{
  const uk = feats.find(f => f.properties.name === 'United Kingdom');
  const ukGeom = uk.geometry.type === 'Polygon' ? [uk.geometry.coordinates] : uk.geometry.coordinates;
  const island = pc.intersection(ukGeom, IRL_BOX);
  const free = pc.difference(island, NI);
  uk.geometry = { type: 'MultiPolygon', coordinates: pc.difference(ukGeom, free) };
  feats.push({ type: 'Feature', properties: { name: 'Irish Free State' }, geometry: { type: 'MultiPolygon', coordinates: free } });
}

// --- overlay regions (rough outlines, clipped to their 1930 host state) -----
const geomOf = name => {
  const out = [];
  for (const f of feats.filter(f => f.properties.name === name)) {
    if (f.geometry.type === 'Polygon') out.push(f.geometry.coordinates); else out.push(...f.geometry.coordinates);
  }
  return out;
};
const ring = pts => [[...pts, pts[0]]];
const BOHEMIA_MORAVIA = ring([[12, 48.4], [16.95, 48.5], [17.2, 48.85], [17.6, 48.85], [18.1, 49.1], [18.6, 49.45], [18.9, 49.55], [18.9, 51.2], [12, 51.2]]);
const CZECH_CORE = ring([[13.0, 49.1], [14.3, 48.85], [15.5, 49.0], [16.4, 48.95], [17.3, 49.15], [17.9, 49.4], [17.9, 49.9], [17.0, 50.0], [16.2, 50.25], [15.5, 50.5], [14.7, 50.55], [14.0, 50.45], [13.3, 50.15], [12.95, 49.6]]);
const cz = geomOf('Czechoslovakia');
const de = geomOf('Germany');
const REGIONS = {
  rhineland: pc.intersection(de, ring([[5.8, 47.5], [8.4, 47.5], [8.6, 48.6], [9.1, 49.5], [9.0, 50.0], [8.4, 50.5], [7.8, 51.0], [7.6, 51.5], [7.1, 52.0], [6.0, 52.3], [5.8, 50.0]])),
  saar: pc.intersection(de, ring([[6.35, 49.1], [7.45, 49.1], [7.45, 49.65], [6.35, 49.65]])),
  ruhr: pc.intersection(de, ring([[6.6, 51.2], [7.9, 51.2], [7.9, 51.7], [6.6, 51.7]])),
  sudetenland: pc.difference(pc.intersection(cz, BOHEMIA_MORAVIA), CZECH_CORE),
  bohemia: pc.intersection(cz, CZECH_CORE),
  memel: pc.intersection(geomOf('Lithuania'), ring([[20.9, 55.28], [22.3, 55.28], [22.3, 56.0], [20.9, 56.0]]))
};

// --- simplify --------------------------------------------------------------
const all = {
  type: 'FeatureCollection',
  features: [
    ...feats,
    ...Object.entries(REGIONS).map(([k, c]) => ({ type: 'Feature', properties: { region: k }, geometry: { type: 'MultiPolygon', coordinates: c } }))
  ]
};
let topo = topoServer.topology({ all }, 1e5);
topo = topoSimplify.presimplify(topo);
topo = topoSimplify.simplify(topo, 0.0006);
const simp = topoClient.feature(topo, topo.objects.all);
for (const f of simp.features) if (f.geometry) f.geometry = fixWinding(f.geometry);

// --- project ---------------------------------------------------------------
const W = 2000, H = 1000;
const fitTarget = { type: 'MultiPoint', coordinates: [[-170, 72], [180, 72], [-170, -50], [180, -50], [0, 75]] };
const proj = geoNaturalEarth1().fitExtent([[0, 0], [W, H]], fitTarget);
const path = geoPath(proj).digits(1);

const countries = [];
const regions = {};
const seen = {};
for (const f of simp.features) {
  const d = path(f);
  if (!d) continue;
  if (f.properties.region) { regions[f.properties.region] = d; continue; }
  const name = f.properties.name;
  if (/Antarctica/i.test(name)) continue;
  const slug = name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
  seen[slug] = (seen[slug] || 0) + 1;
  countries.push({ id: seen[slug] > 1 ? `${slug}-${seen[slug]}` : slug, key: slug, name, bloc: BLOC(name), d });
}
const [tx, ty] = proj.translate();
const out = `// Generated by tools/make-map.mjs — do not edit by hand.
// Borders c.1930 derived from historical-basemaps by A. Ourednik (GPL-3.0):
// https://github.com/aourednik/historical-basemaps
window.MAPDATA = ${JSON.stringify({ w: W, h: H, k: proj.scale(), tx, ty, countries, regions })};
`;
fs.writeFileSync('../js/mapdata.js', out);
console.log('countries', countries.length, 'bytes', out.length);
