"""Crop and resize illustrations for the game.

Usage:
  python3 prep-art.py portrait <key> <source-image> [--face-y 0.42]
  python3 prep-art.py scene <name> <source-image> [--no-trim]

Portraits: trims the paper margin around the drawn panel, finds the face
(OpenCV Haar cascade, if installed) and crops a 4:5 frame around it,
saved as art/portraits/<key>.webp (480x600).
Scenes: trims the margin and crops to 16:9 (1280x720), or 9:16 for names
ending in -mobile (630x1120), saved as art/scenes/<name>.webp.
"""
import sys, os
import numpy as np
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'art')


def panel_box(img):
    """Bounding box inside the inked panel frame, dropping the plain paper border.

    The frame is a thin dark line with light paper on its outer side, so each edge
    is the outermost line that is mostly dark and has mostly light pixels just outside it.
    """
    g = np.asarray(img.convert('L')).astype(int)
    h, w = g.shape
    dark, light = g < 95, g > 165

    def edge(dark_frac, light_frac, n, forward):
        rng = range(8, n // 2) if forward else range(n - 9, n // 2, -1)
        for r in rng:
            out = light_frac[r - 8:r - 3] if forward else light_frac[r + 4:r + 9]
            if dark_frac[r] > 0.45 and len(out) and out.mean() > 0.6:
                return r
        return None

    rd, rl = dark.mean(axis=1), light.mean(axis=1)
    cd, cl = dark.mean(axis=0), light.mean(axis=0)
    top, bot = edge(rd, rl, h, True), edge(rd, rl, h, False)
    lef, rig = edge(cd, cl, w, True), edge(cd, cl, w, False)
    pad = 5  # step inside the inked line
    return (lef + pad if lef is not None else 0, top + pad if top is not None else 0,
            rig - pad if rig is not None else w, bot - pad if bot is not None else h)


def find_face(img):
    """Largest plausible face: near the horizontal centre, in the upper two-thirds, not tiny."""
    try:
        import cv2
    except ImportError:
        return None
    g = np.asarray(img.convert('L'))
    H, W = g.shape
    found = []
    for name in ('haarcascade_frontalface_default.xml', 'haarcascade_frontalface_alt2.xml', 'haarcascade_frontalface_alt.xml'):
        cc = cv2.CascadeClassifier(os.path.join(cv2.data.haarcascades, name))
        for n in (5, 3):
            r = cc.detectMultiScale(g, scaleFactor=1.06, minNeighbors=n, minSize=(W // 6, W // 6))
            found += [tuple(int(v) for v in f) for f in (r if len(r) else [])]
    ok = [f for f in found
          if 0.28 * W < f[0] + f[2] / 2 < 0.72 * W and 0.12 * H < f[1] + f[3] / 2 < 0.68 * H and f[2] > W * 0.2]
    if not ok:
        return None
    return max(ok, key=lambda f: f[2])


def crop_ratio(img, ratio, cx, cy, height):
    """Crop a ratio (w/h) box of the given height centred on (cx, cy), clamped to the image."""
    W, H = img.size
    height = min(height, H, W / ratio)
    width = height * ratio
    x0 = min(max(cx - width / 2, 0), W - width)
    y0 = min(max(cy - height / 2, 0), H - height)
    return img.crop((round(x0), round(y0), round(x0 + width), round(y0 + height)))


def save(img, folder, name, quality):
    """Save as WebP, removing any older copy of the same image in another format."""
    for ext in ('jpg', 'jpeg', 'png', 'webp'):
        old = os.path.join(ROOT, folder, f'{name}.{ext}')
        if os.path.exists(old):
            os.remove(old)
    dest = os.path.join(ROOT, folder, name + '.webp')
    img.save(dest, 'WEBP', quality=quality, method=6)
    return dest


def portrait(key, src, face_y=0.42):
    img = Image.open(src).convert('RGB')
    img = img.crop(panel_box(img))
    W, H = img.size
    face = find_face(img)
    if face:
        x, y, w, h = face
        height = h * 3.3                      # head and shoulders
        cx = x + w / 2
        cy = y + h / 2 + (0.5 - face_y) * height  # place the face slightly above centre
        how = 'face found'
    else:
        # illustrations centre the sitter: assume a face about a third of the panel wide
        h = W * 0.34
        height = h * 3.3
        cx, cy = W / 2, H * 0.40 + (0.5 - face_y) * height
        how = 'no face found: centred crop'
    out = crop_ratio(img, 0.8, cx, cy, height).resize((480, 600), Image.LANCZOS)
    dest = save(out, 'portraits', key, 74)
    print(f'{key}: {how} -> {dest}')


def scene(name, src, trim=True):
    img = Image.open(src).convert('RGB')
    if trim:
        img = img.crop(panel_box(img))
    W, H = img.size
    mobile = name.endswith('-mobile')
    ratio, size = (9 / 16, (630, 1120)) if mobile else (16 / 9, (1280, 720))
    out = crop_ratio(img, ratio, W / 2, H / 2, H).resize(size, Image.LANCZOS)
    dest = save(out, 'scenes', name, 70)
    print(f'{name}: scene -> {dest}')


if __name__ == '__main__':
    kind, key, src = sys.argv[1:4]
    fy = float(sys.argv[sys.argv.index('--face-y') + 1]) if '--face-y' in sys.argv else 0.42
    portrait(key, src, fy) if kind == 'portrait' else scene(key, src, '--no-trim' not in sys.argv)
