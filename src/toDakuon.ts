import { DAKU_HIRAGANA, DAKU_KATAKANA, PA_HIRAGANA, PA_KATAKANA } from './constants'
import { DAKU_Options } from './types'

/**
 * 日本語文字列を濁音に変換する関数
 */
export const toDakuon = (
  text: string,
  { passHiragana = true, passKatakana = true, ignoreList }: DAKU_Options = {}
): string => {
  const textArray = Array.from(text.normalize('NFC'))

  const onlyHiragana = passHiragana && passKatakana === false

  const onlyKatakana = passKatakana && passHiragana === false

  const dakuList = new Set(
    onlyHiragana ? DAKU_HIRAGANA : onlyKatakana ? DAKU_KATAKANA : [...DAKU_HIRAGANA, ...DAKU_KATAKANA]
  )

  const paList = new Set(
    onlyHiragana ? [...PA_HIRAGANA] : onlyKatakana ? PA_KATAKANA : [...PA_HIRAGANA, ...PA_KATAKANA]
  )

  if (!passHiragana && !passKatakana) {
    return text
  }

  const result = textArray.reduce(
    (prev, char) => {
      if (ignoreList !== undefined && new Set(ignoreList).has(char)) {
        return prev.concat(char)
      }
      if (dakuList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) + 1))
      }
      if (paList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) - 1))
      }
      if (passHiragana && char === 'う') {
        return prev.concat('ゔ')
      }
      if (passKatakana && char === 'ウ') {
        return prev.concat('ヴ')
      }
      return prev.concat(char)
    },
    ['']
  )
  return result.join('')
}
