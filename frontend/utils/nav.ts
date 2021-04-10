
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
        section: 'おたのしみ',
        cls: 'games',
        items: [
          {
            icon: 'mdi-gamepad-square-outline',
            title: 'めいろ５０(α)',
            to: {
              name: 'game-maze-50',
              params: {
                mode: 'maze50',
              }
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
    ],
    miniVariant: false,
    title: '小１からのさんすうゲーム',
  }
}
