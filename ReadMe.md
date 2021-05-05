小学校1年生～向け足し算練習 web アプリです。

[小１からのさんすうゲーム](https://kaku3.github.io/e1-math-plus-10/frontend/dist/)

## さんすう

### けいさん
- 1年生
  - [たして１０](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-plus-10)
    たして10になるすうじをこたえる
  - [ヒトケタス](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-plus-single)
    ひとけたのすうじを足してこたえにする
  - [ひきざん２０](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-minus-20)
    20までのすうじのひきざん
- 2年生
  - [かけざん９９](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-mul-99)
    かけざん９ｘ９
- 3年生
  - [かけざん１ｘ](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-mul-1x)
    １１－１９のすうじのかけざん
  - [かけざん９ｘ](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-mul-9x)
    ９１－９９のすうじのかけざん

### おまけ
- [ピクセル１６](https://kaku3.github.io/e1-math-plus-10/frontend/dist/pixel16)
  ドット絵らくがき帳
- [めいろ２０](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-maze-20)
  20階めいろの塔（'80 GAMES）
- [JUMP MAN](https://kaku3.github.io/e1-math-plus-10/frontend/dist/game-jump-man)
  シングルタップジャンプゲーム（'80 GAMES）

## けいさんモード追加方法（メモ）
```
// add
components/
  ex/
    GameX.vue
    GameXHistory.vue
  banner/
    BannerX.vue

content/
  ex/
    x.md

page/
  x/
    index.vue
    _game.vue

// modify
components/
  History.vue
  Ranking.vue
  DailySummary.vue
models/
  Score.ts
store/
  ScoreStore.ts
utils/
  filters.ts

page/
  index.vue
```

## ご注意
開発用設定は公開していないので、env.production.js をコピーして適宜書き換えてご利用ください。
```
frontend/
  env.production.js
    ↓コピーして書き換え
  env.development.js
```

## クレジット
[クレジット表記](https://github.com/kaku3/e1-math-plus-10/tree/master/frontend/content/credits.md)