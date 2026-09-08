// Add one entry here for every specimen you add to the index page.
// Each hotspot needs a "position" (x y z) and "normal" (nx ny nz) string —
// use Placement Mode (the pin button) on the live site to find these by
// clicking directly on the part of the model you want to label.
const CATALOG = {
  "animal-cell": {
    title: "Animal Cell",
    file: "models/animal-cell.glb",
    desc: "A typical animal cell (as seen under an electron microscope) showing the nucleus, cytoplasmic organelles, and plasma membrane. Tap a pin to read about that part.",
    hotspots: [
      {
        id: "membrane",
        position: "-3.132 -0.046 -0.826",
        normal: "-0.412 0.909 -0.063",
        title: "Plasma Membrane (Plasmalemma)",
        text: "A flexible, double-layered membrane enclosing the cell's protoplasm. Being selectively permeable, it controls the movement of water and minerals in and out of the cell (by osmosis) and separates the cell from its neighbours. Its foldings are called microvilli."
      },
      {
        id: "er",
        position: "-1.368 0.086 0.211",
        normal: "-0.543 0.762 0.352",
        title: "Endoplasmic Reticulum",
        text: "A network of membranes running through the cytoplasm. The rough type is studded with ribosomes and is where proteins are made; the smooth type lacks ribosomes. Membrane-bound vesicles from the ER shuttle proteins and other cell products, and it also plays a role in forming mitochondria and vacuoles."
      },
      {
        id: "golgi",
        position: "1.137 0.010 1.987",
        normal: "-0.637 0.044 -0.770",
        title: "Golgi Body",
        text: "A stack of membrane-bound sacs (cisternae) and vesicles, found mainly in animal cells (though plant cells have it too). Enzymes on its membrane carry out hydrolysis, and it takes part in secreting hormones and other substances, in various metabolic activities, and sometimes in storing protein."
      },
      {
        id: "mitochondria",
        position: "0 -0.035 3.136",
        normal: "0.145 -0.765 0.628",
        title: "Mitochondrion",
        text: "Enclosed by a double membrane made of phospholipid and protein. The inner membrane folds inward as cristae, studded with oxysomes that carry respiratory enzymes; the space inside is the matrix. Mitochondria carry out most stages of cellular respiration and release the energy an organism uses, which is why they're called the cell's power house."
      },
      {
        id: "lysosome",
        position: "1.983 -0.156 -0.203",
        normal: "-0.118 -0.366 -0.923",
        title: "Lysosome",
        text: "A cytoplasmic organelle wrapped in a lipid membrane, containing enzymes that protect the cell by destroying germs. The membrane keeps these enzymes away from the cell's own organelles — but if it breaks down (e.g. from oxygen deficiency), nearby organelles get digested and the cell itself may be destroyed."
      },
      {
        id: "nucleus",
        position: "-1.315 0.218 -0.621",
        normal: "-0.958 0.278 -0.068",
        title: "Nucleus",
        text: "A membrane-bound organelle carrying the cell's chromosomes. Enclosed by a double-layered nuclear membrane with pores (nucleopores) that control transport between the nucleoplasm and cytoplasm. Inside are the nucleoplasm (a jelly-like fluid), the nucleolus (stores nucleic acid, synthesizes protein), and the chromatin reticulum — tangled thread-like DNA-protein material that condenses into chromosomes during cell division."
      },
      {
        id: "centrosome",
        position: "-1.165 0.141 2.600",
        normal: "-0.047 -0.919 0.392",
        title: "Centrosome",
        text: "Made up of two centrioles surrounded by a thick fluid called the centrosphere. Found in most animal cells (rare in lower plants). During cell division the centrioles produce astral rays and help build the spindle apparatus, and they also help form flagella."
      },
      {
        id: "ribosome",
        position: "1.07 0.079 0.150",
        normal: "0.507 0.862 0.004",
        title: "Ribosome",
        text: "Present in every living cell, with no membrane around it. Ribosomes link amino acids into polypeptide chains during protein synthesis and also supply enzymes. Mitochondria and plastids carry their own ribosomes too, which make proteins using the organelle's own DNA — evidence that these organelles once lived independently before becoming part of the cell."
      },
      {
        id: "cytoskeleton",
        position: "-1.770 -0.067 2.695",
        normal: "-0.019 0.994 -0.109",
        title: "Cytoskeleton",
        text: "A network of protein fibres just beneath the plasma membrane that gives the cell its shape and holds the organelles in place. Built from proteins such as actin, myosin, and tubulin, forming microtubules, microfilaments, and intermediate filaments."
      }
    ]
  },
  "mitochondria": {
    title: "Mitochondria",
    file: "models/mitochondria.glb",
    desc: "A single mitochondrion, the organelle responsible for cellular respiration. Tap a pin to read about each part.",
    hotspots: [
      {
        id: "outer-membrane",
        position: "19.678 3.977 -5.267",
        normal: "0.049 0.142 -0.989",
        title: "Outer Membrane",
        text: "The smooth outer layer of the double membrane surrounding the mitochondrion, made of phospholipid and protein."
      },
      {
        id: "inner-membrane",
        position: "-1.022 2.955 2.700",
        normal: "0.483 0.680 -0.551",
        title: "Inner Membrane",
        text: "Folds inward into finger-like projections called cristae, which increase the surface area available for respiratory enzymes."
      },
      {
        id: "cristae",
        position: "14.699 1.866 -3.313",
        normal: "-0.811 0.485 0.327",
        title: "Cristae",
        text: "The finger-like infoldings of the inner membrane, studded with small round bodies called oxysomes."
      },
      {
        id: "oxysome",
        position: "11.165 2.069 3.732",
        normal: "-0.486 0.688 -0.539",
        title: "Oxysome",
        text: "Tiny round bodies studding the cristae that contain the enzymes used in respiration."
      },
      {
        id: "matrix",
        position: "0 0 0",
        normal: "0 1 0",
        title: "Matrix",
        text: "The space enclosed by the inner membrane. Most of the reactions of the Krebs cycle and the electron transport system — the stages that release the most energy during respiration — take place here. The matrix also contains the mitochondrion's own DNA and ribosomes."
      }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("m");
const entry = CATALOG[key];

const mv = document.getElementById("mv");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const panel = document.getElementById("hotspot-panel");
const panelTitle = document.getElementById("hotspot-panel-title");
const panelText = document.getElementById("hotspot-panel-text");
const panelClose = document.getElementById("hotspot-panel-close");
const placeBtn = document.getElementById("place-mode-btn");
const placeReadout = document.getElementById("place-readout");

let placing = false;

function renderHotspots() {
  document.querySelectorAll("[data-hotspot-generated]").forEach(el => el.remove());

  entry.hotspots.forEach(h => {
    const btn = document.createElement("button");
    btn.slot = `hotspot-${h.id}`;
    btn.className = "hotspot-dot";
    btn.dataset.hotspotGenerated = "true";
    btn.setAttribute("data-position", h.position);
    btn.setAttribute("data-normal", h.normal);
    btn.title = h.title;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPanel(h);
    });
    mv.appendChild(btn);
  });
}

function openPanel(h) {
  panelTitle.textContent = h.title;
  panelText.textContent = h.text;
  panel.classList.add("open");
}

panelClose.addEventListener("click", () => panel.classList.remove("open"));

placeBtn?.addEventListener("click", () => {
  placing = !placing;
  placeBtn.classList.toggle("active", placing);
  placeReadout.style.display = placing ? "block" : "none";
  if (placing) {
    mv.removeAttribute("auto-rotate"); // hold the model still so clicks are precise
    placeReadout.textContent = "Placement mode ON — rotate/zoom to line up the part, then click it directly.";
  } else {
    mv.setAttribute("auto-rotate", "");
    placeReadout.textContent = "";
  }
});

mv.addEventListener("click", (event) => {
  if (!placing) return;
  const rect = mv.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const hit = mv.positionAndNormalFromPoint(x, y);
  if (!hit) {
    placeReadout.textContent = "No surface hit there — click directly on the model.";
    return;
  }
  const pos = `${hit.position.x.toFixed(3)} ${hit.position.y.toFixed(3)} ${hit.position.z.toFixed(3)}`;
  const norm = `${hit.normal.x.toFixed(3)} ${hit.normal.y.toFixed(3)} ${hit.normal.z.toFixed(3)}`;
  placeReadout.innerHTML =
    `position: <code>${pos}</code><br>normal: <code>${norm}</code>` +
    `<br><span class="hint">Red pin below shows exactly where this is — rotate to check it before copying.</span>`;

  // Drop/update a visible preview marker at the exact clicked point so you
  // can confirm placement by eye before trusting the printed numbers.
  let marker = document.getElementById("calibration-marker");
  if (!marker) {
    marker = document.createElement("button");
    marker.id = "calibration-marker";
    marker.slot = "hotspot-calibration-preview";
    marker.className = "hotspot-dot calibration-marker";
    marker.title = "Last clicked point";
    mv.appendChild(marker);
  }
  marker.setAttribute("data-position", pos);
  marker.setAttribute("data-normal", norm);
});

if (!entry) {
  titleEl.textContent = "Specimen not found";
  descEl.textContent = "Go back to the index and pick a specimen.";
  if (placeBtn) placeBtn.style.display = "none";
} else {
  titleEl.textContent = entry.title;
  descEl.textContent = entry.desc;
  mv.setAttribute("src", entry.file);
  mv.setAttribute("alt", entry.title);

  mv.addEventListener("load", renderHotspots);
  mv.addEventListener("error", () => {
    descEl.textContent = `Could not load ${entry.file}. Make sure the file exists in /models and the name matches exactly (case-sensitive).`;
  });
}