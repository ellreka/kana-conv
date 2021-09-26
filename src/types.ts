type Options = {
  /**
   * ひらがなのみを変換する
   */
  onlyHiragana?: boolean
  /**
   * カタカナのみを変換する
   */
  onlyKatakana?: boolean
  /**
   * 変換しない文字列のリスト
   */
  ignoreList?: string[]
}

export type DAKU_Options = Options

export type HANDAKU_Options = Options
