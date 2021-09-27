import { toSeion } from '../src/toSeion'

describe('toSeion', () => {
  const testData =
    'がぎぐげご ざじずぜぞ だぢづでど ばびぶべぼ ばびぶべぼ ガギグゲゴ ザジズゼゾ ダヂヅデド バビブベボ バビブベボ ゔヴ'
  test('全て', () => {
    expect(toSeion(testData)).toBe(
      'かきくけこ さしすせそ たちつてと はひふへほ はひふへほ カキクケコ サシスセソ タチツテト ハヒフヘホ ハヒフヘホ うウ'
    )
  })
})
