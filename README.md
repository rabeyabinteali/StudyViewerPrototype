# Specimen Index — 3D biology models for study

A tiny static site for viewing 3D biology models (cells, organelles, etc.) on any phone or laptop, hosted free on GitHub Pages. No build step, no server — just HTML/CSS/JS and `.glb` model files.

## 1. Add your models

Drop your files here, using these exact names:

```
models/animal-cell.glb
models/mitochondria.glb
```

(The folder currently has a placeholder `.gitkeep` file — delete it once your real `.glb` files are in place.)

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial specimen site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 3. Turn on GitHub Pages

In your repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"** → Branch: `main`, folder `/ (root)` → Save.

Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## 4. Try it on your phone

Open that URL on your phone's browser. Tap a specimen, then drag to rotate and pinch to zoom. On supported phones (most recent iPhones and Android), there's an AR button that lets a student place the model in the room in front of them.

## Labeling organelles (hotspots)

Each specimen already has placeholder labels for common organelles, written at a class 9–10 level, in `assets/viewer.js`. Right now they all sit at position `0 0 0` (the model's center) — you need to move each one onto the actual part using **Placement Mode**:

1. Open a specimen on the live site (or run it locally — see below).
2. Tap the **📍 pin button** in the top-right corner to turn on Placement Mode.
3. Tap directly on the part of the model you want to label (e.g., the nucleus). A box appears below the model showing a `position` and `normal` value.
4. Copy those two values into the matching hotspot entry in `assets/viewer.js`. For example, for the nucleus:
   ```js
   {
     id: "nucleus",
     position: "0.12 0.34 -0.05",   // ← paste what Placement Mode gave you
     normal: "0.00 1.00 0.00",      // ← paste what Placement Mode gave you
     title: "Nucleus",
     text: "The largest organelle..."
   }
   ```
5. Save, refresh, tap the pin button again to turn Placement Mode off, and check the label now sits on the right spot.
6. Repeat for each organelle. Push your changes to GitHub when done.

To edit the *text* of a label (e.g., swap in your exact textbook wording instead of the placeholder description), just change the `title` and `text` strings for that hotspot — no coordinate changes needed.

### Running locally to calibrate faster

Since `model-viewer` needs to fetch `.glb` files over HTTP (not directly from disk), open a quick local server from the project folder instead of double-clicking `index.html`:

```bash
# Python 3
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Adding more specimens later

1. Put the new `.glb` in `/models`.
2. Add one entry to the `CATALOG` object in `assets/viewer.js`:
   ```js
   "golgi-apparatus": {
     title: "Golgi Apparatus",
     file: "models/golgi-apparatus.glb",
     desc: "One sentence describing what students should notice."
   }
   ```
3. Add one matching `<a class="plate">` block to `index.html`.

## Notes on model files

- Keep each `.glb` under ~15–20 MB so it loads quickly on mobile data. If a model is large, compress it first with [gltf-transform](https://gltf-transform.dev/) or [gltfpack](https://github.com/zeux/meshoptimizer/tree/master/gltf) — this can shrink files 5–10x with minimal visual loss.
- GitHub has a 100 MB hard file size limit and will warn above 50 MB — compress well before that point.
- If a model looks black or unlit, it's usually missing/incorrect materials — re-export from Blender with "PBR Metallic-Roughness" materials enabled.

## What's next (not built yet, easy to add later)

- Tappable hotspot labels on the model itself (model-viewer supports this natively via `<button slot="hotspot-...">`).
- A search/filter bar once the catalog grows past a dozen or so specimens.
- A "quiz mode" that hides labels and asks students to identify parts.
