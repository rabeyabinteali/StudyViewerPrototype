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
