// Add one entry here for every specimen you add to the index page.
// Each hotspot needs a "position" (x y z) and "normal" (nx ny nz) string —
// use Placement Mode (the pin button) on the live site to find these by
// clicking directly on the part of the model you want to label.
// Give every specimen and every hotspot both an "en" and a "bn" block.
const CATALOG = {
  "animal-cell": {
    file: "models/animal-cell.glb",
    en: {
      title: "Animal Cell",
      desc: "A typical animal cell (as seen under an electron microscope) showing the nucleus, cytoplasmic organelles, and plasma membrane. Tap a pin to read about that part."
    },
    bn: {
      title: "প্রাণী কোষ",
      desc: "একটি সাধারণ প্রাণীকোষ (ইলেকট্রন মাইক্রোস্কোপে দেখা যায় এমন), যাতে নিউক্লিয়াস, সাইটোপ্লাজমীয় অঙ্গাণু এবং প্লাজমা মেমব্রেন দেখা যাচ্ছে। কোনো অংশ সম্পর্কে জানতে একটি পিনে ট্যাপ করুন।"
    },
    hotspots: [
      {
        id: "membrane",
        position: "-3.132 -0.046 -0.826",
        normal: "-0.412 0.909 -0.063",
        en: {
          title: "Plasma Membrane (Plasmalemma)",
          text: "A flexible, double-layered membrane enclosing the cell's protoplasm. Being selectively permeable, it controls the movement of water and minerals in and out of the cell (by osmosis) and separates the cell from its neighbours. Its foldings are called microvilli."
        },
        bn: {
          title: "প্লাজমা মেমব্রেন (প্লাজমালেমা)",
          text: "কোষের প্রোটোপ্লাজমকে ঘিরে থাকা একটি নমনীয়, দ্বিস্তরবিশিষ্ট পর্দা। বাছাই-প্রবেশ্য হওয়ায় এটি অসমোসিসের মাধ্যমে পানি ও খনিজ পদার্থের চলাচল নিয়ন্ত্রণ করে এবং কোষকে পার্শ্ববর্তী কোষ থেকে পৃথক রাখে। এর ভাঁজগুলোকে বলা হয় মাইক্রোভিলাই।"
        }
      },
      {
        id: "er",
        position: "-1.368 0.086 0.211",
        normal: "-0.543 0.762 0.352",
        en: {
          title: "Endoplasmic Reticulum",
          text: "A network of membranes running through the cytoplasm. The rough type is studded with ribosomes and is where proteins are made; the smooth type lacks ribosomes. Membrane-bound vesicles from the ER shuttle proteins and other cell products, and it also plays a role in forming mitochondria and vacuoles."
        },
        bn: {
          title: "এন্ডোপ্লাজমিক রেটিকুলাম",
          text: "সাইটোপ্লাজম জুড়ে বিস্তৃত পর্দার একটি জালিকা। রাফ এন্ডোপ্লাজমিক রেটিকুলামে রাইবোজোম যুক্ত থাকে এবং এখানে প্রোটিন তৈরি হয়; স্মুথ এন্ডোপ্লাজমিক রেটিকুলামে রাইবোজোম থাকে না। এন্ডোপ্লাজমিক রেটিকুলাম থেকে সৃষ্ট ভেসিকল কোষের তৈরি প্রোটিন ও অন্যান্য উপাদান পরিবহন করে, এবং এটি মাইটোকন্ড্রিয়া ও ভ্যাকুওল গঠনেও ভূমিকা রাখে।"
        }
      },
      {
        id: "golgi",
        position: "1.137 0.010 1.987",
        normal: "-0.637 0.044 -0.770",
        en: {
          title: "Golgi Body",
          text: "A stack of membrane-bound sacs (cisternae) and vesicles, found mainly in animal cells (though plant cells have it too). Enzymes on its membrane carry out hydrolysis, and it takes part in secreting hormones and other substances, in various metabolic activities, and sometimes in storing protein."
        },
        bn: {
          title: "গলজি বডি",
          text: "পর্দাবেষ্টিত থলি (সিস্টার্নি) ও ভেসিকলের স্তূপ দিয়ে গঠিত, যা মূলত প্রাণীকোষে পাওয়া যায় (তবে উদ্ভিদকোষেও থাকে)। এর পর্দায় এনজাইমের হাইড্রোলাইসিস ঘটে, এবং এটি হরমোন ও অন্যান্য পদার্থ ক্ষরণে, বিভিন্ন বিপাকীয় কাজে এবং কখনো কখনো প্রোটিন সঞ্চয়ে ভূমিকা রাখে।"
        }
      },
      {
        id: "mitochondria",
        position: "0 -0.035 3.136",
        normal: "0.145 -0.765 0.628",
        en: {
          title: "Mitochondrion",
          text: "Enclosed by a double membrane made of phospholipid and protein. The inner membrane folds inward as cristae, studded with oxysomes that carry respiratory enzymes; the space inside is the matrix. Mitochondria carry out most stages of cellular respiration and release the energy an organism uses, which is why they're called the cell's power house."
        },
        bn: {
          title: "মাইটোকন্ড্রিয়া",
          text: "ফসফোলিপিড ও প্রোটিন দিয়ে গঠিত একটি দ্বিস্তর পর্দা দ্বারা আবৃত। অন্তঃপর্দা ভাঁজ হয়ে ক্রিস্টি তৈরি করে, যাতে অক্সিজোম নামক গঠন শ্বসনের এনজাইম বহন করে; ভেতরের স্থানটিকে বলা হয় ম্যাট্রিক্স। মাইটোকন্ড্রিয়া কোষীয় শ্বসনের বেশিরভাগ ধাপ সম্পন্ন করে এবং জীবের ব্যবহারযোগ্য শক্তি উৎপন্ন করে, তাই একে কোষের 'পাওয়ার হাউস' বলা হয়।"
        }
      },
      {
        id: "lysosome",
        position: "1.983 -0.156 -0.203",
        normal: "-0.118 -0.366 -0.923",
        en: {
          title: "Lysosome",
          text: "A cytoplasmic organelle wrapped in a lipid membrane, containing enzymes that protect the cell by destroying germs. The membrane keeps these enzymes away from the cell's own organelles — but if it breaks down (e.g. from oxygen deficiency), nearby organelles get digested and the cell itself may be destroyed."
        },
        bn: {
          title: "লাইসোজোম",
          text: "লিপিড পর্দায় মোড়ানো একটি সাইটোপ্লাজমীয় অঙ্গাণু, যাতে জীবাণু ধ্বংসকারী এনজাইম থাকে। পর্দাটি এই এনজাইমগুলোকে কোষের নিজস্ব অঙ্গাণু থেকে দূরে রাখে — কিন্তু পর্দা নষ্ট হয়ে গেলে (যেমন অক্সিজেনের অভাবে), আশপাশের অঙ্গাণু হজম হয়ে যেতে পারে এবং কোষটি নিজেই ধ্বংস হতে পারে।"
        }
      },
      {
        id: "nucleus",
        position: "-1.315 0.218 -0.621",
        normal: "-0.958 0.278 -0.068",
        en: {
          title: "Nucleus",
          text: "A membrane-bound organelle carrying the cell's chromosomes. Enclosed by a double-layered nuclear membrane with pores (nucleopores) that control transport between the nucleoplasm and cytoplasm. Inside are the nucleoplasm (a jelly-like fluid), the nucleolus (stores nucleic acid, synthesizes protein), and the chromatin reticulum — tangled thread-like DNA-protein material that condenses into chromosomes during cell division."
        },
        bn: {
          title: "নিউক্লিয়াস",
          text: "একটি পর্দাবেষ্টিত অঙ্গাণু যা কোষের ক্রোমোজোম বহন করে। এটি দ্বিস্তর নিউক্লিয়ার মেমব্রেন দ্বারা আবৃত, যাতে থাকে ছিদ্র (নিউক্লিওপোর), যা নিউক্লিওপ্লাজম ও সাইটোপ্লাজমের মধ্যে পরিবহন নিয়ন্ত্রণ করে। ভেতরে থাকে নিউক্লিওপ্লাজম (জেলির মতো তরল), নিউক্লিওলাস (নিউক্লিক অ্যাসিড সঞ্চয় ও প্রোটিন সংশ্লেষণ করে), এবং ক্রোমাটিন রেটিকুলাম — জট পাকানো সুতার মতো ডিএনএ-প্রোটিন উপাদান, যা কোষ বিভাজনের সময় ঘনীভূত হয়ে ক্রোমোজোমে পরিণত হয়।"
        }
      },
      {
        id: "centrosome",
        position: "-1.165 0.141 2.600",
        normal: "-0.047 -0.919 0.392",
        en: {
          title: "Centrosome",
          text: "Made up of two centrioles surrounded by a thick fluid called the centrosphere. Found in most animal cells (rare in lower plants). During cell division the centrioles produce astral rays and help build the spindle apparatus, and they also help form flagella."
        },
        bn: {
          title: "সেন্ট্রোজোম",
          text: "দুটি সেন্ট্রিওল এবং তাদের চারপাশের ঘন তরল (সেন্ট্রোস্ফিয়ার) নিয়ে গঠিত। এটি বেশিরভাগ প্রাণীকোষে পাওয়া যায় (নিম্নশ্রেণির উদ্ভিদে বিরল)। কোষ বিভাজনের সময় সেন্ট্রিওলগুলো অ্যাস্ট্রাল রশ্মি তৈরি করে এবং স্পিন্ডল যন্ত্র গঠনে সাহায্য করে, পাশাপাশি ফ্ল্যাজেলা গঠনেও ভূমিকা রাখে।"
        }
      },
      {
        id: "ribosome",
        position: "1.07 0.079 0.150",
        normal: "0.507 0.862 0.004",
        en: {
          title: "Ribosome",
          text: "Present in every living cell, with no membrane around it. Ribosomes link amino acids into polypeptide chains during protein synthesis and also supply enzymes. Mitochondria and plastids carry their own ribosomes too, which make proteins using the organelle's own DNA — evidence that these organelles once lived independently before becoming part of the cell."
        },
        bn: {
          title: "রাইবোজোম",
          text: "প্রতিটি জীবিত কোষে উপস্থিত, এর চারপাশে কোনো পর্দা থাকে না। রাইবোজোম প্রোটিন সংশ্লেষণের সময় অ্যামিনো অ্যাসিডগুলোকে পলিপেপটাইড শৃঙ্খলে যুক্ত করে এবং প্রয়োজনীয় এনজাইমও সরবরাহ করে। মাইটোকন্ড্রিয়া ও প্লাস্টিডেরও নিজস্ব রাইবোজোম থাকে, যা অঙ্গাণুর নিজস্ব ডিএনএ ব্যবহার করে প্রোটিন তৈরি করে — এটি প্রমাণ করে যে এই অঙ্গাণুগুলো একসময় স্বাধীনভাবে বেঁচে থেকে পরে কোষের অংশ হয়ে গিয়েছিল।"
        }
      },
      {
        id: "cytoskeleton",
        position: "-1.770 -0.067 2.695",
        normal: "-0.019 0.994 -0.109",
        en: {
          title: "Cytoskeleton",
          text: "A network of protein fibres just beneath the plasma membrane that gives the cell its shape and holds the organelles in place. Built from proteins such as actin, myosin, and tubulin, forming microtubules, microfilaments, and intermediate filaments."
        },
        bn: {
          title: "সাইটোস্কেলিটন",
          text: "প্লাজমা মেমব্রেনের ঠিক নিচে অবস্থিত প্রোটিন তন্তুর একটি জালিকা, যা কোষকে আকৃতি দেয় এবং অঙ্গাণুগুলোকে নির্দিষ্ট স্থানে ধরে রাখে। অ্যাক্টিন, মায়োসিন ও টিউবুলিনের মতো প্রোটিন দিয়ে তৈরি, যা মাইক্রোটিউবিউল, মাইক্রোফিলামেন্ট ও ইন্টারমিডিয়েট ফিলামেন্ট গঠন করে।"
        }
      }
    ]
  },
  "mitochondria": {
    file: "models/mitochondria.glb",
    en: {
      title: "Mitochondria",
      desc: "A single mitochondrion, the organelle responsible for cellular respiration. Tap a pin to read about each part."
    },
    bn: {
      title: "মাইটোকন্ড্রিয়া",
      desc: "একটি একক মাইটোকন্ড্রিয়ন, যা কোষীয় শ্বসনের জন্য দায়ী অঙ্গাণু। প্রতিটি অংশ সম্পর্কে জানতে একটি পিনে ট্যাপ করুন।"
    },
    hotspots: [
      {
        id: "outer-membrane",
        position: "19.678 3.977 -5.267",
        normal: "0.049 0.142 -0.989",
        en: {
          title: "Outer Membrane",
          text: "The smooth outer layer of the double membrane surrounding the mitochondrion, made of phospholipid and protein."
        },
        bn: {
          title: "বহিঃপর্দা",
          text: "মাইটোকন্ড্রিয়নকে ঘিরে থাকা দ্বিস্তর পর্দার মসৃণ বাইরের স্তর, যা ফসফোলিপিড ও প্রোটিন দিয়ে গঠিত।"
        }
      },
      {
        id: "inner-membrane",
        position: "18.128 5.641 -3.466",
        normal: "-0.922 -0.089 0.376",
        en: {
          title: "Inner Membrane",
          text: "Folds inward into finger-like projections called cristae, which increase the surface area available for respiratory enzymes."
        },
        bn: {
          title: "অন্তঃপর্দা",
          text: "ভেতরের দিকে ভাঁজ হয়ে আঙুলের মতো গঠন তৈরি করে, যাকে বলা হয় ক্রিস্টি — এটি শ্বসনের এনজাইমের জন্য পৃষ্ঠতলের ক্ষেত্রফল বাড়িয়ে দেয়।"
        }
      },
      {
        id: "cristae",
        position: "14.699 1.866 -3.313",
        normal: "-0.811 0.485 0.327",
        en: {
          title: "Cristae",
          text: "The finger-like infoldings of the inner membrane, studded with small round bodies called oxysomes."
        },
        bn: {
          title: "ক্রিস্টি",
          text: "অন্তঃপর্দার আঙুলের মতো ভাঁজ, যাতে অক্সিজোম নামক ছোট গোলাকার গঠন লেগে থাকে।"
        }
      },
      {
        id: "oxysome",
        position: "11.165 2.069 3.732",
        normal: "-0.486 0.688 -0.539",
        en: {
          title: "Oxysome",
          text: "Tiny round bodies studding the cristae that contain the enzymes used in respiration."
        },
        bn: {
          title: "অক্সিজোম",
          text: "ক্রিস্টিতে লেগে থাকা ক্ষুদ্র গোলাকার গঠন, যাতে শ্বসনে ব্যবহৃত এনজাইম থাকে।"
        }
      },
      {
        id: "matrix",
        position: "0 0 0",
        normal: "0 1 0",
        en: {
          title: "Matrix",
          text: "The space enclosed by the inner membrane. Most of the reactions of the Krebs cycle and the electron transport system — the stages that release the most energy during respiration — take place here. The matrix also contains the mitochondrion's own DNA and ribosomes."
        },
        bn: {
          title: "ম্যাট্রিক্স",
          text: "অন্তঃপর্দা দ্বারা আবদ্ধ স্থান। শ্বসনের সময় সবচেয়ে বেশি শক্তি উৎপাদনকারী ধাপ — ক্রেবস চক্র ও ইলেকট্রন পরিবহন ব্যবস্থার বেশিরভাগ বিক্রিয়া এখানেই ঘটে। ম্যাট্রিক্সে মাইটোকন্ড্রিয়নের নিজস্ব ডিএনএ ও রাইবোজোমও থাকে।"
        }
      }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const key = params.get("m");
const entry = CATALOG[key];

const mv = document.getElementById("mv");
const siteTitleEl = document.getElementById("site-title");
const backLinkEl = document.getElementById("back-link");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const hintEl = document.getElementById("hint");
const panel = document.getElementById("hotspot-panel");
const panelTitle = document.getElementById("hotspot-panel-title");
const panelText = document.getElementById("hotspot-panel-text");
const panelClose = document.getElementById("hotspot-panel-close");
const placeBtn = document.getElementById("place-mode-btn");
const placeReadout = document.getElementById("place-readout");
const langBtn = document.getElementById("lang-toggle");

let placing = false;

function renderHotspots() {
  document.querySelectorAll("[data-hotspot-generated]").forEach(el => el.remove());
  const lang = getLang();

  entry.hotspots.forEach(h => {
    const btn = document.createElement("button");
    btn.slot = `hotspot-${h.id}`;
    btn.className = "hotspot-dot";
    btn.dataset.hotspotGenerated = "true";
    btn.setAttribute("data-position", h.position);
    btn.setAttribute("data-normal", h.normal);
    btn.title = h[lang].title;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPanel(h);
    });
    mv.appendChild(btn);
  });
}

function openPanel(h) {
  const lang = getLang();
  panelTitle.textContent = h[lang].title;
  panelText.textContent = h[lang].text;
  panel.classList.add("open");
}

function renderPageText() {
  const lang = getLang();
  const t = UI_STRINGS[lang];
  document.documentElement.lang = lang;

  siteTitleEl.textContent = t.siteTitle;
  backLinkEl.textContent = t.backToIndex;
  hintEl.textContent = t.viewerHint;
  langBtn.textContent = t.toggleTo;

  if (!entry) {
    titleEl.textContent = t.notFoundTitle;
    descEl.textContent = t.notFoundDesc;
  } else {
    titleEl.textContent = entry[lang].title;
    descEl.textContent = entry[lang].desc;
  }
}

panelClose.addEventListener("click", () => panel.classList.remove("open"));

langBtn.addEventListener("click", () => {
  setLang(getLang() === "en" ? "bn" : "en");
  renderPageText();
  if (entry) renderHotspots(); // refresh pin tooltips + reopen-safe titles in new language
  panel.classList.remove("open");
});

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

  // Drop/update a visible preview marker at the exact clicked point 
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

renderPageText();

if (!entry) {
  if (placeBtn) placeBtn.style.display = "none";
} else {
  mv.setAttribute("src", entry.file);
  mv.setAttribute("alt", entry.en.title);

  mv.addEventListener("load", renderHotspots);
  mv.addEventListener("error", () => {
    descEl.textContent = `Could not load ${entry.file}. Make sure the file exists in /models and the name matches exactly (case-sensitive).`;
  });
}
