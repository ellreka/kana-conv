import { toHandakuon } from '../src'

describe('toHandakuon', () => {
  const testData = 'はひふへほ ばびぶべぼ ハヒフヘホ バビブベボ'
  test('全て', () => {
    expect(toHandakuon(testData)).toBe('ぱぴぷぺぽ ぱぴぷぺぽ パピプペポ パピプペポ')
  })

  test('ひらがなのみ', () => {
    expect(
      toHandakuon(testData, {
        onlyHiragana: true
      })
    ).toBe('ぱぴぷぺぽ ぱぴぷぺぽ ハヒフヘホ バビブベボ')
  })

  test('カタカナのみ', () => {
    expect(
      toHandakuon(testData, {
        onlyKatakana: true
      })
    ).toBe('はひふへほ ばびぶべぼ パピプペポ パピプペポ')
  })

  test('ignoreList', () => {
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
