// Shared translation strings + language preference helpers,
// used by both index.html and viewer.html.
const UI_STRINGS = {
  en: {
    siteTitle: "Specimen Index",
    tagIndex: "touch a plate to view in 3D",
    emptyNote: 'Information is taken from NCTB Class 9-10 Books',
    creditsLink: "Model credits &amp; licenses →",
    backToIndex: "← back to index",
    viewerHint: "Drag to rotate · pinch to zoom · tap a pin to read about that part · AR icon places it in your room.",
    notFoundTitle: "Specimen not found",
    notFoundDesc: "Go back to the index and pick a specimen.",
    loading: "Loading…",
    toggleTo: "বাংলা"
  },
  bn: {
    siteTitle: "নমুনা তালিকা",
    tagIndex: "থ্রিডি দেখতে একটি নমুনায় ট্যাপ করুন",
    emptyNote: 'তথ্যগুলো এনসিটিবি (NCTB)-এর নবম-দশম শ্রেণির পাঠ্যবই থেকে নেওয়া হয়েছে।',
    creditsLink: "মডেলের কৃতজ্ঞতা ও লাইসেন্স →",
    backToIndex: "← তালিকায় ফিরুন",
    viewerHint: "ঘোরাতে টেনে ধরুন · জুম করতে চিমটি দিন · কোনো অংশ সম্পর্কে জানতে পিনে ট্যাপ করুন · AR আইকনে ট্যাপ করে ঘরে দেখুন।",
    notFoundTitle: "নমুনা পাওয়া যায়নি",
    notFoundDesc: "তালিকায় ফিরে গিয়ে একটি নমুনা বেছে নিন।",
    loading: "লোড হচ্ছে…",
    toggleTo: "English"
  }
};

function getLang() {
  return localStorage.getItem("site-lang") || "en";
}
function setLang(lang) {
  localStorage.setItem("site-lang", lang);
}
