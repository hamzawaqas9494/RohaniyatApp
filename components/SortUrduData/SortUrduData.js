// ✅ Urdu alphabet order
const urduAlphabet = [
  "ا","ب","پ","ت","ٹ","ث","ج","چ","ح","خ","د","ڈ","ذ",
  "ر","ڑ","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف",
  "ق","ک","گ","ل","م","ن","و","ہ","ء","ی"
];

// ✅ helper to get position of Urdu character
const getUrduIndex = (char) => urduAlphabet.indexOf(char);

/**
 * Sorts data in Urdu alphabetical order + stable ID order
 * @param {Array} data - the array of objects to sort
 * @param {string} primaryField - usually 'category' or 'title'
 * @returns {Array} sorted data
 */
export function sortUrduData(data, primaryField = "category") {
  if (!Array.isArray(data)) return [];

  // Step 1: sort by ID (oldest → newest)
  const sortedById = [...data].sort((a, b) => a.id - b.id);

  // Step 2: sort alphabetically based on first Urdu letter
  const sortedFinal = sortedById.sort((a, b) => {
    const firstA = (a[primaryField] || a.title || "").trim().charAt(0);
    const firstB = (b[primaryField] || b.title || "").trim().charAt(0);
    return getUrduIndex(firstA) - getUrduIndex(firstB);
  });

  return sortedFinal;
}
