import { toDakuon } from '../src/toDakuon'

describe('toDakuon', () => {
  const testData =
    'かきくけこ さしすせそ たちつてと はひふへほ ぱぴぷぺぽ カキクケコ サシスセソ タチツテト ハヒフヘホ パピプペポ うウ'
  test('全て', () => {
    expect(toDakuon(testData)).toBe(
      'がぎぐげご ざじずぜぞ だぢづでど ばびぶべぼ ばびぶべぼ ガギグゲゴ ザジズゼゾ ダヂヅデド バビブベボ バビブベボ ゔヴ'
    )
  })

  test('ひらがなのみ', () => {
    expect(
      toDakuon(testData, {
        passKatakana: false
      })
    ).toBe(
      'がぎぐげご ざじずぜぞ だぢづでど ばびぶべぼ ばびぶべぼ カキクケコ サシスセソ タチツテト ハヒフヘホ パピプペポ ゔウ'
    )
  })

  test('カタカナのみ', () => {
    expect(
      toDakuon(testData, {
        passHiragana: false
      })
    ).toBe(
      'かきくけこ さしすせそ たちつてと はひふへほ ぱぴぷぺぽ ガギグゲゴ ザジズゼゾ ダヂヅデド バビブベボ バビブベボ うヴ'
    )
  })

  test('何も変換されない', () => {
    expect(
      toDakuon(testData, {
        passHiragana: false,
        passKatakana: false
      })
    ).toBe(testData)
  })

  test('ignoreList 何も変換されていない', () => {
    expect(
      toDakuon(testData, {
        ignoreList: [
          'か',
          'き',
          'く',
          'け',
          'こ',
          'さ',
          'し',
          'す',
          'せ',
          'そ',
          'た',
          'ち',
          'つ',
          'て',
          'と',
          'は',
          'ひ',
          'ふ',
          'へ',
          'ほ',
          'ぱ',
          'ぴ',
          'ぷ',
          'ぺ',
          'ぽ',
          'カ',
          'キ',
          'ク',
          'ケ',
          'コ',
          'サ',
          'シ',
          'ス',
          'セ',
          'ソ',
          'タ',
          'チ',
          'ツ',
          'テ',
          'ト',
          'ハ',
          'ヒ',
          'フ',
          'ヘ',
          'ホ',
          'パ',
          'ピ',
          'プ',
          'ペ',
          'ポ',
          'う',
          'ウ'
        ]
      })
    ).toBe(testData)
  })
})
