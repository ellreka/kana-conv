type Options = {
  /**
   * ひらがなを変換する
   * @defaultValue `true`
   */
  passHiragana?: boolean
  /**
   * カタカナを変換する
   * @defaultValue `true`
   */
  passKatakana?: boolean
  /**
   * 変換しない文字列のリスト
   */
  ignoreList?: string[]
}

export type DAKU_Options = Options

export type HANDAKU_Options = Options
