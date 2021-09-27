import { toHandakuon } from '../src/toHandakuon'

describe('toHandakuon', () => {
  const testData = 'はひふへほ ばびぶべぼ ハヒフヘホ バビブベボ'
  test('全て', () => {
    expect(toHandakuon(testData)).toBe('ぱぴぷぺぽ ぱぴぷぺぽ パピプペポ パピプペポ')
  })

  test('ひらがなのみ', () => {
    expect(
      toHandakuon(testData, {
        passKatakana: false
      })
    ).toBe('ぱぴぷぺぽ ぱぴぷぺぽ ハヒフヘホ バビブベボ')
  })

  test('カタカナのみ', () => {
    expect(
      toHandakuon(testData, {
        passHiragana: false
      })
    ).toBe('はひふへほ ばびぶべぼ パピプペポ パピプペポ')
  })

  test('何も変換されない', () => {
    expect(
      toHandakuon(testData, {
        passHiragana: false,
        passKatakana: false
      })
    ).toBe(testData)
  })

  test('ignoreList 何も変換されない', () => {
    expect(
      toHandakuon(testData, {
        ignoreList: [
          'は',
          'ひ',
          'ふ',
          'へ',
          'ほ',
          'ば',
          'び',
          'ぶ',
          'べ',
          'ぼ',
          'ハ',
          'ヒ',
          'フ',
          'ヘ',
          'ホ',
          'バ',
          'ビ',
          'ブ',
          'ベ',
          'ボ'
        ]
      })
    ).toBe('はひふへほ ばびぶべぼ ハヒフヘホ バビブベボ')
  })
})
