// ITALY campaign — the player shapes the foreign policy of Liberal Italy, then Mussolini.
window.SCENARIOS = window.SCENARIOS || {};
window.SCENARIOS.italy = [
{
  id: 'paris', lv: 'both', date: 'April 1919', title: 'The Mutilated Victory',
  ldr: 'orlando', speaker: 'wilson',
  said: 'Fiume belongs to the Yugoslavs. I will appeal to the Italian people over your head if I must.',
  brief: 'Italy joined the war in 1915 after the secret Treaty of London promised it Trentino, South Tyrol, Istria and Dalmatia. Now, in Paris, President Wilson refuses to give Italy Dalmatia or the port of Fiume, which Italy also wants. Wilson appeals directly to the Italian public. Prime Minister Vittorio Orlando is humiliated.',
  ask: 'What does Orlando do?',
  opts: [
    { t: 'Accept Wilson’s line quietly to stay on good terms with America.', x: 'Italian public opinion was furious. Accepting quietly would have destroyed Orlando at home.' },
    { t: 'Walk out of the Peace Conference in protest.' },
    { t: 'Send the army to seize Dalmatia.', x: 'Italy was exhausted by war and could not defy all the Allies.' },
    { t: 'Trade Italy’s claim to Fiume for a share of Germany’s colonies.', a: true, x: 'No such deal was offered. Italy received no German colonies at all.' }
  ],
  ans: 1,
  out: 'Orlando walked out in April 1919 and returned in May, having gained nothing. Italy received Trentino, South Tyrol, Istria and Trieste, but not Fiume or Dalmatia, and no colonies. Orlando resigned in June. The poet D’Annunzio called it a “mutilated victory”, a phrase nationalists and Fascists used for years.',
  head: 'ORLANDO WALKS OUT — “A MUTILATED VICTORY”',
  fx: { tens: 4, mark: [{ id: 'versailles', kind: 'fail', label: 'Paris 1919' }] },
  focus: [12, 45, 6],
  exam: 'Italy, a victor, was still bitter about the peace settlement. That bitterness helped Mussolini rise to power.',
  hist: 'R. J. B. Bosworth stresses continuity: Italy’s ambitions as the “least of the great powers” existed before Fascism.'
},
{
  id: 'fiume', lv: 'a', date: 'November 1920', title: 'The Poet and the Port',
  ldr: 'giolitti', speaker: 'dannunzio',
  said: 'Fiume or death! I hold this city for Italy, whether Rome wants it or not.',
  brief: 'Prime Minister Giovanni Giolitti, an elderly Liberal, needs a settlement with Yugoslavia. Since September 1919 the nationalist poet Gabriele D’Annunzio and about 2,000 legionaries have held Fiume, defying both the Allies and the Italian government. His black-shirted followers, balcony speeches and salutes inspire Mussolini.',
  ask: 'What does Giolitti do?',
  opts: [
    { t: 'Annex Fiume and make D’Annunzio its governor.', x: 'That would have meant war with Yugoslavia and a break with the Allies.' },
    { t: 'Sign the Treaty of Rapallo with Yugoslavia, making Fiume a Free State, then send the navy to evict D’Annunzio.' },
    { t: 'Give Fiume to Yugoslavia.', x: 'No Italian government could survive giving up the city.' },
    { t: 'Ask the League of Nations to govern Fiume.', a: true, x: 'The two countries settled it directly at Rapallo, without the League.' }
  ],
  ans: 1,
  out: 'The Treaty of Rapallo (November 1920) made Fiume a Free State, while Italy gained Zara and all of Istria. At Christmas 1920 Italian warships shelled D’Annunzio out, the “Bloody Christmas”. Nationalists never forgave the Liberals, and Mussolini copied D’Annunzio’s style.',
  head: '“BLOODY CHRISTMAS” — NAVY SHELLS FIUME',
  fx: { tens: 2, mark: [{ id: 'fiume', kind: 'crisis', label: 'Fiume 1920' }] },
  focus: [14.5, 45.3, 9],
  exam: 'Helps explain why many Italians saw the Liberal state as weak, and why they turned to Fascism.',
  hist: 'Historians often call D’Annunzio’s Fiume a “dress rehearsal” for Fascism.'
},
{
  id: 'corfuI', lv: 'both', date: 'August 1923', title: 'Corfu',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'An Italian general murdered! Greece will pay, in apologies and in lire.',
  brief: 'General Enrico Tellini, an Italian officer marking the Greek–Albanian border, is murdered on Greek territory with his staff. Benito Mussolini, Prime Minister since October 1922, wants to show the world that Fascist Italy will not be pushed around. Nobody knows who carried out the killing.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Ask the League to investigate, and wait for its report.', x: 'Mussolini despised the League’s slow procedures. He wanted a dramatic show of strength.' },
    { t: 'Demand 50 million lire and an apology, then bombard and occupy Corfu when Greece cannot meet the terms.' },
    { t: 'Declare war on Greece.', x: 'Full war was unnecessary and risky. Seizing an island was quicker and safer.' },
    { t: 'Accept a League-held deposit until the killers are found.', a: true, x: 'The Council floated this idea, but Mussolini refused and threatened to quit the League.' }
  ],
  ans: 1,
  out: 'Italian ships shelled Corfu, killing about 15 civilians, many of them refugees, and marines occupied the island. When the League tried to intervene, Mussolini threatened to leave. The Conference of Ambassadors made Greece apologise and pay Italy 50 million lire. Italy left Corfu, and Mussolini was a hero at home.',
  head: 'ITALIAN GUNS ON CORFU — GREECE PAYS',
  fx: { tens: 6, auth: -12, mark: [{ id: 'corfu', kind: 'war', label: 'Corfu 1923' }] },
  focus: [20, 40, 8],
  exam: 'Corfu shows Mussolini’s aggressive style early on, and the League’s weakness against great powers.',
  hist: 'Denis Mack Smith saw Mussolini’s diplomacy as propaganda for a domestic audience. Corfu was the first great example.'
},
{
  id: 'pactrome', lv: 'both', date: 'January 1924', title: 'Fiume Becomes Italian',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'What the Liberals lost with treaties, Fascism wins with treaties, and a little pressure.',
  brief: 'Mussolini, still careful at this stage, wants Fiume without a war. The Free State of Fiume is in chaos, and Fascist squads have taken it over. Yugoslavia wants stability and good relations with its powerful neighbour.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Seize Fiume by force.', x: 'Unnecessary. Yugoslavia was willing to deal, and Mussolini still cared about respectability.' },
    { t: 'Sign the Pact of Rome with Yugoslavia: Italy annexes Fiume, Yugoslavia gets the suburb of Sušak, and the two sign a friendship treaty.' },
    { t: 'Leave Fiume as a Free State under League protection.', x: 'Fascists had made Fiume a symbol of national honour. Leaving it alone was impossible.' },
    { t: 'Trade Fiume for a free hand in Albania.', a: true, x: 'Albania came later, through the Treaties of Tirana in 1926–27.' }
  ],
  ans: 1,
  out: 'The Pact of Rome (January 1924) gave Fiume to Italy. It was a diplomatic triumph won without war. Mussolini was still behaving, at times, like a conventional statesman.',
  head: 'FIUME IS ITALIAN AT LAST',
  fx: { tens: -2, mark: [{ id: 'fiume', kind: 'deal', label: 'Fiume annexed 1924' }] },
  focus: [14.5, 45.3, 9],
  exam: 'In the 1920s Mussolini mixed aggression (Corfu) with conventional diplomacy (Fiume, Locarno).',
  hist: 'Renzo De Felice argued that Mussolini’s 1920s foreign policy was largely realistic and traditional. Others, such as MacGregor Knox, see consistent expansionist aims underneath.'
},
{
  id: 'locarnoI', lv: 'both', date: 'October 1925', title: 'Speedboat to Locarno',
  ldr: 'mussolini', speaker: 'chamberlainA',
  said: 'Italy would add great weight as a guarantor, Signor Mussolini.',
  brief: 'Germany, France and Belgium are negotiating a guarantee of their shared borders at Locarno. Britain will be a guarantor. Italy is invited to be the second. Mussolini also wants a guarantee of Italy’s own border with Austria, at the Brenner Pass.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Refuse to attend: Locarno is a French project.', x: 'Being treated as an equal of Britain was too valuable for Mussolini’s prestige to miss.' },
    { t: 'Sign as a guarantor of the Rhine frontier, alongside Britain.' },
    { t: 'Sign only if the Brenner frontier is also guaranteed.', a: true, x: 'Mussolini wanted this but did not get it. He signed anyway.' },
    { t: 'Propose an alliance with Germany instead.', x: 'Unthinkable in 1925. Germany was weak, and Italy feared a German union with Austria.' }
  ],
  ans: 1,
  out: 'Mussolini arrived dramatically by speedboat across Lake Maggiore and signed the Locarno Treaties as a guarantor, alongside Britain. Italy was treated as a great power. The Brenner frontier, however, was left out.',
  head: 'DUCE ARRIVES BY SPEEDBOAT, SIGNS LOCARNO',
  fx: { tens: -6, auth: 4, mark: [{ id: 'locarno', kind: 'deal', label: 'Locarno 1925' }] },
  focus: [9, 46, 7],
  exam: 'Evidence that Mussolini co-operated with Britain and France in the 1920s.',
  hist: 'Mussolini relished prestige diplomacy. Locarno gave him the stage without real obligations.'
},
{
  id: 'tirana', lv: 'a', date: 'November 1926', title: 'The Albanian Protectorate',
  ldr: 'mussolini', speaker: 'zog',
  said: 'Albania needs friends with money. Rome has money.',
  brief: 'Albania, across the Adriatic, is poor and unstable. Mussolini sees a chance to control the entrance to the Adriatic. Albania’s ruler, Ahmed Zogu (later King Zog), needs loans and protection, and Yugoslavia is also interested.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Invade Albania now.', x: 'Too risky in 1926. Mussolini preferred to dominate Albania through money and treaties, and invaded only in 1939.' },
    { t: 'Sign the Treaties of Tirana: friendship, a defence pact and Italian loans, which make Albania a client state.' },
    { t: 'Divide Albania with Yugoslavia.', x: 'Italy wanted to keep Yugoslavia out of Albania, not share it.' },
    { t: 'Leave Albania alone.', x: 'Albania mattered strategically. Control of the Strait of Otranto was a long-standing Italian goal.' }
  ],
  ans: 1,
  out: 'The Treaties of Tirana (1926 and 1927) made Albania an Italian protectorate in all but name. Italian loans, advisers and officers followed. Yugoslavia was alarmed and moved closer to France.',
  head: 'ROME TIGHTENS GRIP ON ALBANIA',
  fx: { tens: 3, mark: [{ id: 'tirana', kind: 'deal', label: 'Treaties of Tirana' }] },
  focus: [19.8, 41.3, 8],
  exam: 'Shows Mussolini building influence in the Balkans through the 1920s.',
  hist: 'An example of informal empire: control without annexation, until 1939.'
},
{
  id: 'fourpower', lv: 'a', date: 'March 1933', title: 'The Four-Power Pact',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'Let the four great European powers decide Europe’s future, not fifty nations squabbling in Geneva.',
  brief: 'Hitler has just come to power. Mussolini fears German ambitions in Austria but also sees a chance to play the role of Europe’s arbiter. He distrusts the League, where small states have a vote.',
  ask: 'What does Mussolini propose?',
  opts: [
    { t: 'A Four-Power Pact of Britain, France, Germany and Italy to settle Europe’s problems, including treaty revision.' },
    { t: 'An immediate alliance with Hitler.', x: 'In 1933 Mussolini saw Hitler as a junior imitator and a threat to Austria.' },
    { t: 'Strengthen the League’s Council with new members.', x: 'Mussolini wanted great-power rule, not a stronger League.' },
    { t: 'A Balkan alliance against Germany.', x: 'Italy’s rivalry with Yugoslavia made that unrealistic.' }
  ],
  ans: 0,
  out: 'The Four-Power Pact was signed in July 1933 in a watered-down form, after France and Poland objected. It was never ratified and achieved nothing, but it showed Mussolini’s wish to manage Europe as one of four equals.',
  head: 'FOUR-POWER PACT SIGNED — AND FORGOTTEN',
  fx: { tens: 1, auth: -2, mark: [{ id: 'rome', kind: 'deal', label: 'Four-Power Pact 1933' }] },
  focus: [10, 47, 5],
  exam: 'Shows Mussolini’s contempt for the League and his wish to be Europe’s arbiter.',
  hist: 'De Felice saw Mussolini as seeking a “decisive weight” between Britain/France and Germany. The Four-Power Pact fits that view.'
},
{
  id: 'brenner', lv: 'both', date: 'July 1934', title: 'Troops on the Brenner',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'That man is a dangerous fool. Austria stays independent!',
  brief: 'Austrian Nazis murder Chancellor Dollfuss, Mussolini’s friend and ally, in a failed coup. Dollfuss’s wife and children are staying with Mussolini at the time. If Germany absorbs Austria, the German army will stand on Italy’s northern frontier.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Do nothing. Hitler is a fellow Fascist.', x: 'In 1934 Mussolini saw Hitler as a threat. He was not yet an ally.' },
    { t: 'Send four divisions to the Brenner Pass as a warning to Hitler.' },
    { t: 'Invade Austria and install a pro-Italian government.', x: 'Mussolini wanted Austria independent, not occupied.' },
    { t: 'Ask the League to send observers.', a: true, x: 'Mussolini relied on force, and it worked. The League was not involved.' }
  ],
  ans: 1,
  out: 'Italian troops moved to the Brenner. Hitler disowned the coup and backed down. For a moment, Mussolini looked like the one leader willing to stand up to Hitler.',
  head: 'MUSSOLINI FACES DOWN HITLER OVER AUSTRIA',
  fx: { tens: 4, mark: [{ id: 'brenner', kind: 'crisis', label: 'Brenner 1934' }] },
  focus: [12, 47, 8],
  exam: 'Compare this with 1938, when Mussolini accepted Anschluss. Abyssinia is the reason for the change.',
  hist: 'The Brenner crisis shows Italy as a possible ally for Britain and France, an opportunity the Abyssinian war destroyed.'
},
{
  id: 'stresa', lv: 'both', date: 'April 1935', title: 'The Stresa Front',
  ldr: 'mussolini', speaker: 'macdonald',
  said: 'We three stand together against any breach of treaties, in Europe.',
  brief: 'Hitler has announced conscription. Mussolini’s troops are already gathering in Eritrea for an attack on Abyssinia, and he wants to know whether Britain and France will object. The leaders of Britain, France and Italy meet at Stresa on Lake Maggiore.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Form the Stresa Front with Britain and France, condemning German rearmament, and stay silent about Abyssinia.' },
    { t: 'Side with Germany against Britain and France.', x: 'In April 1935 Mussolini still feared Hitler more than he liked him.' },
    { t: 'Demand a written promise of a free hand in Abyssinia.', a: true, x: 'He never got it in writing. He relied on the British and French silence, and on the words “in Europe” in the final statement.' },
    { t: 'Promise to abandon his plans for Abyssinia.', x: 'Mussolini was committed to the war. Troops and supplies were already being shipped.' }
  ],
  ans: 0,
  out: 'The Stresa Front condemned German rearmament and promised to uphold Locarno and Austrian independence. The final statement spoke of peace “in Europe”. Britain and France said nothing about Abyssinia, and Mussolini took their silence as consent. Two months later Britain signed a naval agreement with Germany.',
  head: 'STRESA: THREE POWERS UNITE AGAINST BERLIN',
  fx: { tens: -2, mark: [{ id: 'stresa', kind: 'deal', label: 'Stresa 1935' }] },
  focus: [8.5, 46, 8],
  exam: 'Explains why Britain and France were reluctant to punish Italy later: they wanted the Stresa Front to survive.',
  hist: 'The Stresa Front lasted barely two months in practice. The Anglo-German Naval Agreement (June 1935) and Abyssinia (October) destroyed it.'
},
{
  id: 'invadeAbyssinia', lv: 'both', date: 'October 1935', title: 'A Place in the Sun',
  ldr: 'mussolini', speaker: 'selassie',
  said: 'Abyssinia is a member of the League. We will defend ourselves with spears if we must.',
  brief: 'After Wal-Wal and Stresa, Mussolini believes Britain and France will not stop him. He wants revenge for Adowa, where Abyssinia defeated Italy in 1896, as well as an empire, glory and a distraction from the Depression. Abyssinia is a League member with a poorly equipped army.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Accept League arbitration over Wal-Wal and wait.', x: 'Mussolini had spent months shipping an army to Africa. Arbitration was only a delay.' },
    { t: 'Invade Abyssinia from Eritrea and Italian Somaliland.' },
    { t: 'Offer to buy Abyssinian territory.', x: 'Mussolini wanted conquest and glory, not a property deal.' },
    { t: 'Wait for Britain’s formal approval.', a: true, x: 'Britain never formally approved, and Mussolini never asked.' }
  ],
  ans: 1,
  out: 'On 3 October 1935 Italian forces invaded without a declaration of war. The League named Italy the aggressor within days and imposed limited sanctions in November. Italy used aircraft, and later poison gas, against Abyssinian troops and civilians.',
  head: 'ITALY INVADES ABYSSINIA',
  fx: { tens: 12, auth: -8, mark: [{ id: 'addis', kind: 'war', label: 'Invasion 1935' }] },
  focus: [40, 11, 5],
  exam: 'Explain Mussolini’s motives: prestige, empire, revenge for Adowa and domestic propaganda, plus the belief that Britain and France would not act.',
  hist: 'MacGregor Knox sees Abyssinia as part of a long-planned drive for a Mediterranean and African empire. Mack Smith stresses improvisation and propaganda.'
},
{
  id: 'defy', lv: 'both', date: 'December 1935', title: 'The Day of Faith',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'Fifty-two nations against us! Let them try. Italy will give its gold.',
  brief: 'League sanctions ban arms sales, loans and imports from Italy, but oil still flows and the Suez Canal stays open. The war is going slowly. The Hoare–Laval Plan briefly offers Italy two-thirds of Abyssinia, then collapses amid public outrage.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Withdraw from Abyssinia to get sanctions lifted.', x: 'Retreat would have destroyed Mussolini’s prestige. Sanctions actually rallied Italians behind him.' },
    { t: 'Defy sanctions: rally the nation with the “Day of Faith”, push on to Addis Ababa and proclaim an empire.' },
    { t: 'Leave the League immediately.', x: 'Italy stayed in the League until December 1937.' },
    { t: 'Seize the Suez Canal.', a: true, x: 'That would have meant war with Britain. Mussolini needed the canal open, and Britain kept it open.' }
  ],
  ans: 1,
  out: 'On the “Day of Faith” (18 December 1935), Italian women, led by Queen Elena, gave their wedding rings for the war effort. Marshal Badoglio’s army, using mustard gas, took Addis Ababa on 5 May 1936. Victor Emmanuel III was proclaimed Emperor of Ethiopia. In July 1936 the League lifted sanctions.',
  head: 'ADDIS ABABA FALLS — “ITALY HAS ITS EMPIRE”',
  fx: { tens: 10, auth: -14, own: { abyssinia: 'it' }, mark: [{ id: 'addis', kind: 'fail', label: 'Addis Ababa 1936' }] },
  focus: [40, 9, 5],
  exam: 'The League’s failure over Abyssinia pushed Italy towards Germany and ended collective security.',
  hist: 'This was the peak of Mussolini’s popularity at home. Both De Felice and Bosworth see 1936 as the high point of consent for the regime.'
},
{
  id: 'spainI', lv: 'both', date: 'July 1936', title: 'Volunteers for Franco',
  ldr: 'mussolini', speaker: 'franco',
  said: 'A Latin, Catholic, anti-Bolshevik Spain — your Mediterranean flank, Duce.',
  brief: 'Civil war breaks out in Spain. Mussolini sees a chance to stop a left-wing Spain, gain naval bases and win more prestige. General Franco asks Italy and Germany for help, while Britain and France propose non-intervention.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Stay out, as Britain and France ask.', x: 'Italy signed the Non-Intervention Agreement but ignored it completely.' },
    { t: 'Send planes and weapons, and eventually tens of thousands of “volunteers”, to fight for Franco.' },
    { t: 'Back the Spanish Republic.', x: 'The Republic was left-wing and backed by the USSR, Fascism’s enemy.' },
    { t: 'Ask the League to mediate.', a: true, x: 'Mussolini had just defied the League over Abyssinia. Spain was handled through the Non-Intervention Committee in London, outside Geneva.' }
  ],
  ans: 1,
  out: 'Italy sent aircraft, tanks and about 70,000–80,000 men over the course of the war. They were humiliated at Guadalajara in March 1937. The war drained Italy’s resources but drew Mussolini closer to Hitler.',
  head: 'ITALIAN “VOLUNTEERS” POUR INTO SPAIN',
  fx: { tens: 8, mark: [{ id: 'guernica', kind: 'war', label: 'Spanish Civil War' }] },
  focus: [0, 41, 5],
  exam: 'Spain completed Italy’s shift towards Germany after Abyssinia.',
  hist: 'Historians debate whether Spain was a strategic gain or a costly blunder for Italy. Its weapons stocks were badly depleted by 1939.'
},
{
  id: 'axis', lv: 'both', date: 'October 1936', title: 'The Axis',
  ldr: 'mussolini', speaker: 'ciano',
  said: 'Berlin welcomes us like brothers, Duce. London only lectures.',
  brief: 'Germany backed Italy over Abyssinia, and the two dictatorships are fighting side by side in Spain. Mussolini’s son-in-law and new Foreign Minister, Galeazzo Ciano, visits Berlin. Britain and France are still angry about Abyssinia.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Rebuild the Stresa Front with Britain and France.', x: 'The Abyssinian sanctions had poisoned relations. Mussolini felt betrayed by the democracies.' },
    { t: 'Reach an agreement with Germany, and announce a Rome–Berlin “Axis” around which Europe will turn.' },
    { t: 'Sign a full military alliance with Germany.', x: 'That came only in May 1939, with the Pact of Steel.' },
    { t: 'Seek an alliance with the USSR.', a: true, x: 'Anti-communism was central to Fascism, and Italy and the USSR were on opposite sides in Spain.' }
  ],
  ans: 1,
  out: 'After the October 1936 agreements, Mussolini declared in a speech in Milan on 1 November that Europe would now revolve around a Rome–Berlin “axis”. Italy had changed sides in all but name.',
  head: 'MUSSOLINI PROCLAIMS THE “ROME–BERLIN AXIS”',
  fx: { tens: 10, auth: -4, mark: [{ id: 'berlin', kind: 'deal', label: 'Rome–Berlin Axis 1936' }] },
  focus: [12, 47, 5],
  exam: 'A key step in the formation of the alliance that fought the Second World War.',
  hist: 'Bosworth argues that Mussolini drifted into dependence on Hitler, while Knox sees a shared “common destiny” of expansion.'
},
{
  id: 'leaveleagueI', lv: 'both', date: 'December 1937', title: 'Farewell to Geneva',
  ldr: 'mussolini', speaker: 'mussolini',
  said: 'The League? A tottering temple. We leave it to its ruins.',
  brief: 'Mussolini wants to show his loyalty to his new partners. Germany and Japan have left the League and signed the Anti-Comintern Pact against communism. Italy is still a member, though it has ignored the League over Spain.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Stay in the League to keep a foot in both camps.', x: 'Mussolini had nothing to gain at Geneva after the sanctions.' },
    { t: 'Join the Anti-Comintern Pact and leave the League.' },
    { t: 'Ask the League to recognise Italy’s empire, then stay.', x: 'The League never formally recognised the conquest, although some members did individually.' },
    { t: 'Leave the League and also declare war on Britain.', a: true, x: 'Italy was exhausted by Abyssinia and Spain. War was years away.' }
  ],
  ans: 1,
  out: 'Italy joined the Anti-Comintern Pact on 6 November 1937 and left the League on 11 December 1937. Three great powers with permanent Council seats, Japan, Germany and Italy, had now walked out.',
  head: 'ITALY QUITS THE LEAGUE',
  fx: { tens: 8, auth: -10, mark: [{ id: 'geneva', kind: 'fail', label: 'Italy leaves 1937' }] },
  focus: [10, 46, 5],
  exam: 'Show how the League’s membership collapsed in the 1930s: Japan (1933), Germany (1933), Italy (1937).',
  hist: 'The Anti-Comintern Pact linked Rome, Berlin and Tokyo ideologically, although it was not yet a military alliance.'
},
{
  id: 'anschlussI', lv: 'both', date: 'March 1938', title: 'Austria Again',
  ldr: 'mussolini', speaker: 'hitler',
  said: 'Tell Mussolini I will never forget him for this. Never, never, never!',
  saidReal: true,
  brief: 'German troops are about to enter Austria. In 1934 Mussolini sent troops to the Brenner to stop Hitler. Now Italy is tied to Germany by the Axis, its army is worn out by Spain and Abyssinia, and Hitler sends a messenger asking for Mussolini’s blessing.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Accept the Anschluss and do nothing.' },
    { t: 'Move troops to the Brenner, as in 1934.', x: 'Italy was now committed to the Axis and could not challenge Germany alone.' },
    { t: 'Appeal to Britain and France for joint action.', x: 'The Stresa Front was dead. Mussolini had no wish to revive it.' },
    { t: 'Demand that the Brenner border and South Tyrol be guaranteed by treaty first.', a: true, x: 'Hitler gave verbal assurances, but Mussolini did not delay the Anschluss to get a treaty.' }
  ],
  ans: 0,
  out: 'Mussolini accepted the Anschluss. Hitler was so relieved he told his envoy: “Tell Mussolini I will never forget him for this.” Germany now shared a border with Italy at the Brenner.',
  head: 'DUCE SILENT AS AUSTRIA VANISHES',
  fx: { tens: 10, own: { austria: 'de' }, mark: [{ id: 'vienna', kind: 'war', label: 'Anschluss 1938' }] },
  focus: [13, 47.5, 7],
  exam: 'Compare 1934 with 1938 to show how Abyssinia changed Italian policy.',
  hist: 'Many historians see this as the moment Italy became the junior partner of the Axis.'
},
{
  id: 'munichI', lv: 'both', date: 'September 1938', title: 'The Peacemaker of Munich',
  ldr: 'mussolini', speaker: 'nchamberlain',
  said: 'Signor Mussolini, only you can persuade Herr Hitler to talk.',
  brief: 'Italy is not ready for a general war. Europe is on the edge of one over the Sudetenland, and Chamberlain appeals to Mussolini to persuade Hitler to accept a conference.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Stand back and let Hitler decide.', x: 'Mussolini wanted the glory of saving the peace, and Italy needed to avoid war.' },
    { t: 'Persuade Hitler to hold a four-power conference, and present a compromise plan at Munich.' },
    { t: 'Promise to fight alongside Germany immediately.', x: 'Italy was unready. Mussolini preferred a diplomatic triumph.' },
    { t: 'Back Czechoslovakia to win back British friendship.', a: true, x: 'Mussolini had no interest in defending Czechoslovakia.' }
  ],
  ans: 1,
  out: 'Mussolini helped arrange the Munich Conference and presented an “Italian” plan, which had in fact been drafted in the German Foreign Office. The Sudetenland went to Germany, and Mussolini returned to Rome hailed as the saviour of peace.',
  head: 'MUSSOLINI: “SAVIOUR OF PEACE”',
  fx: { tens: 6, own: { sudetenland: 'de' }, mark: [{ id: 'munich', kind: 'deal', label: 'Munich 1938' }] },
  focus: [12, 49, 6],
  exam: 'Mussolini’s role at Munich shows his liking for prestige diplomacy, and Italy’s dependence on Germany.',
  hist: 'The “Italian” plan was really German. That detail sums up the balance of power in the Axis by 1938.'
},
{
  id: 'albania', lv: 'both', date: 'April 1939', title: 'Good Friday in Albania',
  ldr: 'mussolini', speaker: 'ciano',
  said: 'Hitler takes Prague without telling us. Very well, Italy takes Albania.',
  brief: 'On 15 March 1939 Hitler occupies Prague without warning Mussolini, who is humiliated. Albania is already an Italian client state under King Zog. Mussolini wants a quick prize of his own.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Invade Albania and depose King Zog.' },
    { t: 'Protest to Berlin and draw closer to Britain and France.', x: 'Mussolini complained privately, but he did not change sides.' },
    { t: 'Do nothing and keep Albania as a client.', x: 'Mussolini needed a visible success to match Hitler.' },
    { t: 'Attack Yugoslavia.', a: true, x: 'Plans were discussed, but Albania was the easier target. Yugoslavia was not invaded until 1941.' }
  ],
  ans: 0,
  out: 'Italy invaded Albania on 7 April 1939, Good Friday. King Zog fled, and Victor Emmanuel III became King of Albania. Britain and France responded by guaranteeing Greece and Romania.',
  head: 'ITALY SEIZES ALBANIA — ZOG FLEES',
  fx: { tens: 10, auth: -4, own: { albania: 'it' }, mark: [{ id: 'tirana', kind: 'war', label: 'Albania 1939' }] },
  focus: [20, 41, 7],
  exam: 'A copycat aggression after Prague. It led to new Anglo-French guarantees.',
  hist: 'Ciano’s diary shows how much the invasion was a reaction to Hitler’s Prague coup.'
},
{
  id: 'steel', lv: 'both', date: 'May 1939', title: 'The Pact of Steel',
  ldr: 'mussolini', speaker: 'ribbentrop',
  said: 'An alliance of steel, Count Ciano. We fight together, whatever comes.',
  brief: 'Germany proposes a full military alliance. Mussolini is told Hitler does not plan war for several years. Italy’s generals, though, warn that the armed forces will not be ready for a major war before 1942–43.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Refuse, and stay free to choose sides.', x: 'Mussolini had committed himself to the Axis and wanted to look like Hitler’s equal.' },
    { t: 'Sign the Pact of Steel, a full military alliance with Germany.' },
    { t: 'Sign only a defensive alliance.', a: true, x: 'The Pact of Steel was not limited to defence. Italy promised to support Germany in any war.' },
    { t: 'Ally with Britain and France instead.', x: 'After Abyssinia, Spain and the Axis, that was no longer realistic in 1939.' }
  ],
  ans: 1,
  out: 'The Pact of Steel was signed on 22 May 1939. It bound Italy to help Germany in any war, even one Germany started. Mussolini sent a memo saying Italy needed three years of peace, but he had tied Italy to Hitler’s timetable.',
  head: 'ROME AND BERLIN FORGE PACT OF STEEL',
  fx: { tens: 10, mark: [{ id: 'berlin', kind: 'deal', label: 'Pact of Steel 1939' }] },
  focus: [12, 48, 5],
  exam: 'A key step in the alliance system of 1939.',
  hist: 'Knox calls this the moment Italy’s fate was bound to Germany’s.'
},
{
  id: 'nonbellig', lv: 'both', date: 'September 1939', title: 'Non-Belligerence',
  ldr: 'mussolini', speaker: 'hitler',
  said: 'Duce, I ask only your political support. The Poles are mine to deal with.',
  brief: 'Germany invades Poland on 1 September 1939. Britain and France declare war. The Pact of Steel commits Italy to fight, but its army, air force and economy are not ready. Mussolini sends Hitler a huge list of supplies Italy would need, so large that it cannot be met.',
  ask: 'What does Mussolini do?',
  opts: [
    { t: 'Declare “non-belligerence”: support Germany politically, but stay out of the fighting for now.' },
    { t: 'Declare war on Britain and France immediately.', x: 'Italy was not ready. Mussolini waited until June 1940, when France was collapsing.' },
    { t: 'Join Britain and France against Hitler.', x: 'Mussolini was bound to the Axis and admired German power.' },
    { t: 'Send Italian divisions to Poland.', a: true, x: 'No Italian troops fought in Poland.' }
  ],
  ans: 0,
  out: 'Italy declared itself “non-belligerent”. Mussolini was embarrassed to sit out the war, and on 10 June 1940, as France fell, he declared war on Britain and France. It would end in disaster for Italy and for him.',
  head: 'ITALY STAYS OUT — FOR NOW',
  fx: { tens: 25, auth: -8, mark: [{ id: 'warsaw', kind: 'war', label: 'War 1939' }] },
  focus: [15, 48, 4],
  exam: 'Ties up the key question “Why had international peace collapsed by 1939?” from Italy’s side.',
  hist: 'The supply list Italy sent Germany, famously called the “molybdenum list”, was so huge that Italy could justify staying out.'
}
];
