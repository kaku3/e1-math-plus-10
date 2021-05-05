小学校1年生向け足し算練習 web アプリです。

[小１からのさんすうゲーム](https://kaku3.github.io/e1-math-plus-10/frontend/dist/)

## モード

### けいさん
- 1年生
  - たして１０
  - ヒトケタス
  - ひきざん２０
- 2年生
  - かけざん９９
- 3年生
  - かけざん１ｘ
  - かけざん９ｘ

### おまけ
- ピクセル９９
- めいろ２０
- JUMP MAN

## けいさんモード追加
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