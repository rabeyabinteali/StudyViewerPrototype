// Add one entry here for every specimen you add to the index page.
const CATALOG = {
  "animal-cell": {
    title: "Animal Cell",
    file: "models/animal-cell.glb",
    desc: "A generalized animal cell showing the nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus suspended in cytoplasm within the plasma membrane."
  },
  "mitochondria": {
    title: "Mitochondria",
    file: "models/mitochondria.glb",
    desc: "The double-membraned organelle responsible for cellular respiration. Note the folded inner membrane (cristae) that increases surface area for ATP production."
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("m");
const entry = CATALOG[key];

const mv = document.getElementById("mv");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const crumbEl = document.getElementById("crumb");

if (!entry) {
  titleEl.textContent = "Specimen not found";
  descEl.textContent = "Go back to the index and pick a specimen.";
} else {
  titleEl.textContent = entry.title;
  descEl.textContent = entry.desc;
  crumbEl.textContent = entry.title;
  mv.setAttribute("src", entry.file);
  mv.setAttribute("alt", entry.title);

  mv.addEventListener("error", () => {
    descEl.textContent = `Could not load ${entry.file}. Make sure the file exists in /models and the name matches exactly (case-sensitive).`;
  });
}
