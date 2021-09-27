# kanadaku

ひらがな・カタカナを濁音、半濁音に変換する

※ヺ、ヷ、ヸ、ヹはサポートしていません

## Install

```bash
yarn add kanadaku
```

```ts
import { toDakuon, toHandakuon } from 'kanadaku'
```

## toDakuon

濁音に変換する

```ts
toDakuon('こんにちはさよなら')
// => ごんにぢばざよなら

toDakuon('こんにちはさよなら コンニチハサヨナラ', { onlyHiragana: true })
// => ごんにぢばざよなら コンニチハサヨナラ

toDakuon('こんにちはさよなら コンニチハサヨナラ', { onlyKatakana: true })
// => こんにちはさよなら ゴンニヂバザヨナラ

toDakuon('こんにちはさよなら コンニチハサヨナラ', { ignoreList: ['こ', 'ち', 'は'] })
// => こんにちはざよなら ゴンニヂバザヨナラ
```

## toHandakuon

半濁音に変換する

```ts
toHandakuon('はひふへほ')
// => ぱぴぷぺぽ

toHandakuon('はひふへほ ハヒフヘホ', { onlyHiragana: true })
// => ぱぴぷぺぽ ハヒフヘホ

toHandakuon('はひふへほ ハヒフヘホ', { onlyKatakana: true })
// => はひふへほ パピプペポ

toHandakuon('はひふへほ ハヒフヘホ', { ignoreList: ['は', 'ハ'] })
// => はぴぷぺぽ ハピプペポ
```
