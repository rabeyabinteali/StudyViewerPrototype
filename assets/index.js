// Add one entry here for every specimen on the index page.
// Give each a Bengali title/subtitle alongside the English one.
const SPECIMENS = [
  {
    id: "animal-cell",
    num: "01",
    en: { title: "Animal Cell", sub: "Organelles, membrane, nucleus" },
    bn: { title: "প্রাণী কোষ", sub: "অঙ্গাণু, পর্দা, নিউক্লিয়াস" }
  },
  {
    id: "mitochondria",
    num: "02",
    en: { title: "Mitochondria", sub: "Cristae, matrix, double membrane" },
    bn: { title: "মাইটোকন্ড্রিয়া", sub: "ক্রিস্টি, ম্যাট্রিক্স, দ্বিস্তর পর্দা" }
  }
];

function render() {
  const lang = getLang();
  const t = UI_STRINGS[lang];
  document.documentElement.lang = lang;

  document.getElementById("site-title").textContent = t.siteTitle;
  document.getElementById("tag-index").textContent = t.tagIndex;
  document.getElementById("empty-note").innerHTML = t.emptyNote;
  document.getElementById("credits-link").innerHTML = t.creditsLink;
  document.getElementById("lang-toggle").textContent = t.toggleTo;

  const platesEl = document.getElementById("plates");
  platesEl.innerHTML = "";
  SPECIMENS.forEach(s => {
    const a = document.createElement("a");
    a.className = "plate";
    a.href = `viewer.html?m=${s.id}`;
    a.innerHTML = `
      <span class="num">${s.num}</span>
      <span class="meta">
        <h2>${s[lang].title}</h2>
        <p>${s[lang].sub}</p>
      </span>
      <span class="go">→</span>
    `;
    platesEl.appendChild(a);
  });
}

render();

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(getLang() === "en" ? "bn" : "en");
  render();
});
