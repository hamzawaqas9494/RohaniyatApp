
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
    const idDiff = (a.id || 0) - (b.id || 0);
    if (idDiff !== 0) return idDiff;


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