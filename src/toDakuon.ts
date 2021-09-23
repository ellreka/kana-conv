const dakuList = [
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
];

const haList = ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];

/**
 * 日本語文字列を濁音に変換する
 */
export const toDakuon = (text: string): string => {
  const textArray = Array.from(text);
  const result = textArray.reduce(
    (prev, char) => {
      if (new Set(dakuList).has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) + 1));
      }
      if (new Set(haList).has(char)) {
        return prev.concat(String.fromCharCode(text.charCodeAt(0) - 1));
      }
      return prev.concat(char);
    },
    [""]
  );
  return result.join("");
};
