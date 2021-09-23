import { toDakuon } from "../src";

describe("toDakuon", () => {
  test("ひらがな 濁音", () => {
    expect(toDakuon("かきくけこさしすせそたちつてとはひふへほ")).toBe(
      "がぎぐげござじずぜぞだぢづでどばびぶべぼ"
    );
  });

  test("ひらがな 清音", () => {
    expect(toDakuon("あいうえおなにぬねのまみむめもやゆよらりるれろ")).toBe(
      "あいうえおなにぬねのまみむめもやゆよらりるれろ"
    );
  });
});
