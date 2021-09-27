import { BA_HIRAGANA, BA_KATAKANA, HA_HIRAGANA, HA_KATAKANA } from './constants'
import { HANDAKU_Options } from './types'

/**
 * 日本語文字列を半濁音に変換する関数
 */
export const toHandakuon = (
  text: string,
  { passHiragana = true, passKatakana = true, ignoreList }: HANDAKU_Options = {}
): string => {
  const textArray = Array.from(text.normalize('NFC'))

  const onlyHiragana = passHiragana && passKatakana === false

  const onlyKatakana = passKatakana && passHiragana === false

  const haList = new Set(onlyHiragana ? HA_HIRAGANA : onlyKatakana ? HA_KATAKANA : [...HA_HIRAGANA, ...HA_KATAKANA])

  const baList = new Set(onlyHiragana ? BA_HIRAGANA : onlyKatakana ? BA_KATAKANA : [...BA_HIRAGANA, ...BA_KATAKANA])

  if (!passHiragana && !passKatakana) {
    return text
  }

  const result = textArray.reduce(
    (prev, char) => {
      if (ignoreList !== undefined && new Set(ignoreList).has(char)) {
        return prev.concat(char)
      }
      if (haList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) + 2))
      }
      if (baList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) + 1))
      }
      return prev.concat(char)
    },
    ['']
  )
  return result.join('')
}
