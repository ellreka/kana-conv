import { BA_HIRAGANA, BA_KATAKANA, HA_HIRAGANA, HA_KATAKANA } from './constants'
import { HANDAKU_Options } from './types'

/**
 * 日本語文字列を半濁音に変換する関数
 */
export const toHandakuon = (text: string, options?: HANDAKU_Options): string => {
  const textArray = Array.from(text.normalize('NFC'))

  const haList = new Set(
    options?.onlyHiragana ? HA_HIRAGANA : options?.onlyKatakana ? HA_KATAKANA : [...HA_HIRAGANA, ...HA_KATAKANA]
  )

  const baList = new Set(
    options?.onlyHiragana ? BA_HIRAGANA : options?.onlyKatakana ? BA_KATAKANA : [...BA_HIRAGANA, ...BA_KATAKANA]
  )

  const result = textArray.reduce(
    (prev, char) => {
      if (new Set(options?.ignoreList).has(char)) {
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
