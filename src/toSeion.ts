import { DAKU_HIRAGANA, DAKU_KATAKANA, PA_HIRAGANA, PA_KATAKANA } from './constants'

/**
 * 濁音・半濁音を清音に変換する関数
 */
export const toSeion = (text: string): string => {
  const textArray = Array.from(text.normalize('NFC'))

  const dakuList = new Set([...DAKU_HIRAGANA, ...DAKU_KATAKANA])

  const paList = new Set([...PA_HIRAGANA, ...PA_KATAKANA])

  const result = textArray.reduce(
    (prev, char) => {
      if (dakuList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) - 1))
      }
      if (paList.has(char)) {
        return prev.concat(String.fromCharCode(char.charCodeAt(0) - 2))
      }
      if (char === 'ゔ') {
        return prev.concat('う')
      }
      if (char === 'ヴ') {
        return prev.concat('ウ')
      }
      return prev.concat(char)
    },
    ['']
  )
  return result.join('')
}
