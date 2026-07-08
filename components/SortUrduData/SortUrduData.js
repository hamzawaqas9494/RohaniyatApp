const urduAlphabet = [
  "ا",
  "آ",
  "أ",
  "إ",
  "ٱ",
  "ب",
  "پ",
  "ت",
  "ٹ",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ڈ",
  "ذ",
  "ر",
  "ڑ",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "ں",
  "و",
  "ہ",
  "ھ",
  "ء",
  "ی",
  "ي",
  "ئے",
];

const normalizeUrdu = (text = "") => {
  return text
    .toString()
    .trim()
    .replace(/[آأإٱ]/g, "ا")
    .replace(/[يى]/g, "ی")
    .replace(/ھ/g, "ہ");
};

export function sortUrduData(data) {
  if (!Array.isArray(data) || data.length === 0) return [];

  return [...data].sort((a, b) => {
    const getText = (item) => {
      if (!item) return "";
      return normalizeUrdu(
        item.label ||
          item.name ||
          item.title ||
          item.category ||
          item.category_label ||
          "",
      );
    };

    const textA = getText(a);
    const textB = getText(b);

    if (!textA) return 1;
    if (!textB) return -1;

    const firstA = textA.charAt(0);
    const firstB = textB.charAt(0);

    const indexA = urduAlphabet.indexOf(firstA);
    const indexB = urduAlphabet.indexOf(firstB);

    return indexA - indexB;
  });
}
