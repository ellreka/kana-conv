import { DAKU_HIRAGANA, DAKU_KATAKANA, PA_HIRAGANA, PA_KATAKANA } from './constants'
import { DAKU_Options } from './types'

/**
 * 日本語文字列を濁音に変換する関数
 */
export const toDakuon = (text: string, options?: DAKU_Options): string => {
  const textArray = Array.from(text.normalize('NFC'))

  const dakuList = new Set(
    options?.onlyHiragana ? DAKU_HIRAGANA : options?.onlyKatakana ? DAKU_KATAKANA : [...DAKU_HIRAGANA, ...DAKU_KATAKANA]
  )

  const paList = new Set(
    options?.onlyHiragana ? [...PA_HIRAGANA] : options?.onlyKatakana ? PA_KATAKANA : [...PA_HIRAGANA, ...PA_KATAKANA]
  )

  const result = textArray.reduce(
    (prev, char) => {
      if (new Set(options?.ignoreList).has(char)) {
        return prev.concat(char)
      }
      if (dakuList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) + 1))
      }
      if (paList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) - 1))
      }
      return prev.concat(char)
    },
    ['']
  )
  return result.join('')
}
