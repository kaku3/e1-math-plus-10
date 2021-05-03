
export default function nav() {
  return {
    clipped: false,
    drawer: false,
    fixed: false,
    lists: [
      {
        section: '',
        cls: 'global',
        items: [
          {
          icon: 'mdi-home-circle',
          title: 'ほーむ',
          to: '/',
          }
        ]
      },
      {
        section: '１ねんせい',
        cls: 'e1',
        items: [
          {
            icon: 'mdi-playlist-edit',
            title: 'たして１０',
            to: {
              name: 'game-plus-10',
              params: {
                mode: 'modeSprint',
                count: 10
              }
            }
          },
          {
            icon: 'mdi-playlist-edit',
            title: 'ヒトケタス',
            to: '/game-plus-single',
          },
          {
            icon: 'mdi-playlist-edit',
            title: 'ひきざん２０',
            to: {
              name: 'game-minus-20',
              params: {
                mode: 'minusSprint',
                count: 10
              }
            }
          },
        ]
      },
      {
        section: '２ねんせい',
        cls: 'e2',
        items: [
          {
            section: '',
            icon: 'mdi-playlist-edit',
            title: 'かけざん９９',
            to: {
              name: 'game-mul-99',
              params: {
                mode: 'mul99Sprint',
                count: 10
              }
            }
          },
        ]
      },
      {
        section: 'おまけ',
        cls: 'games',
        items: [
          {
            icon: 'mdi-gamepad-square-outline',
            title: 'JUMP MAN',
            to: {
              name: 'game-jump-man',
              params: {
                mode: 'jump-man',
              }
            }
          },
          {
            icon: 'mdi-gamepad-square-outline',
            title: 'めいろ２０',
            to: {
              name: 'game-maze-20',
              params: {
                mode: 'maze20',
              }
            }
          },
          {
            icon: 'mdi-image-edit-outline',
            title: 'ピクセル１６',
            to: {
              name: 'pixel16',
              params: {}
            }
          },
        ]
      },
      {
        section: 'せってい',
        cls: 'setting',
        items: [
          {
            icon: 'mdi-account-box',
            title: 'アカウント',
            to: '/account',
          },
        ]
      },
      {
        section: '',
        cls: 'global',
        items: [
          {
          icon: 'mdi-creative-commons',
          title: 'クレジット表記',
          to: '/credits',
          }
        ]
      },
    ],
    miniVariant: false,
    title: '小１からのさんすうゲーム',
  }
}
