// // ✅ Urdu alphabet order
// const urduAlphabet = [
//   "ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ","د","ڈ","ذ",
//   "ر","ڑ","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف",
//   "ق","ک","گ","ل","م","ن","و","ہ","ء","ی"
// ];

// // ✅ helper to get position of Urdu character
// const getUrduIndex = (char) => urduAlphabet.indexOf(char);

// /**
//  * Sorts data in Urdu alphabetical order + stable ID order
//  * @param {Array} data - the array of objects to sort
//  * @param {string} primaryField - usually 'category' or 'title'
//  * @returns {Array} sorted data
//  */
// export function sortUrduData(data, primaryField = "category") {
//   if (!Array.isArray(data)) return [];

//   // Step 1: sort by ID (oldest → newest)
//   const sortedById = [...data].sort((a, b) => a.id - b.id);

//   // Step 2: sort alphabetically based on first Urdu letter
//   const sortedFinal = sortedById.sort((a, b) => {
//     const firstA = (a[primaryField] || a.title || "").trim().charAt(0);
//     const firstB = (b[primaryField] || b.title || "").trim().charAt(0);
//     return getUrduIndex(firstA) - getUrduIndex(firstB);
//   });

//   return sortedFinal;
// }



// ✅ مکمل اردو الفابیٹ ترتیب (سب سے درست اور مکمل)
const urduAlphabet = [
  "ا", "آ", "ب", "پ", "ت", "ٹ", "ث", "ج", "چ", "ح", "خ",
  "د", "ڈ", "ذ", "ر", "ڑ", "ز", "ژ", "س", "ش", "ص", "ض",
  "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن",
  "ں", "و", "ہ", "ھ", "ء", "ی", "ئے"
];

// ✅ پہلے حرف کی پوزیشن نکالو
const getUrduIndex = (char) => {
  if (!char) return -1;
  const index = urduAlphabet.indexOf(char);
  return index === -1 ? 999 : index; // اگر اردو میں نہ ہو تو آخر میں
};

/**
 * اردو الفابیٹکل ترتیب میں ڈیٹا سورٹ کرو
 * پہلے ID سے سٹیبل، پھر پہلے اردو حرف سے
 * @param {Array} data - آبجیکٹس کی آرے
 * @param {string} field - جس فیلڈ سے سورٹ کرنا ہے (label, title, category وغیرہ)
 * @returns {Array} سورٹ شدہ آرے
 */
export function sortUrduData(data, field = "label") {
  if (!Array.isArray(data) || data.length === 0) return [];

  return [...data].sort((a, b) => {
    // 1. پہلے ID سے سٹیبل سورٹ (پرانا → نیا)
    const idDiff = (a.id || 0) - (b.id || 0);
    if (idDiff !== 0) return idDiff;

    // 2. پھر اردو ترتیب سے
    const textA = (a[field] || a.title || a.category || "").trim();
    const textB = (b[field] || b.title || b.category || "").trim();

    if (!textA && !textB) return 0;
    if (!textA) return 1;
    if (!textB) return -1;

    const firstCharA = textA.charAt(0);
    const firstCharB = textB.charAt(0);

    return getUrduIndex(firstCharA) - getUrduIndex(firstCharB);
  });
}