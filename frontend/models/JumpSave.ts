import firebase from '@/plugins/firebase'

import { StatisticEntity } from '~/models/Statistic'

export enum JUMP_CHARACTERS {
  TOWNS_FORK,

  HERALD,

  MERCHANT,

  BUCTCHER,
  BLACKSMITH,
  ALCHEMIST,

  MAGICSHOPKEEPER,

  THIEF,
  ARCHER,

  MAGE,
  BISHOP,

  EXECUTIONER,

  KNIGHT,
  HEAVYKNIGHT,

  LARGEKNIGHT,
  ELITEKNIGHT,
  LARGEELITEKNIGHT,

  SKINNYNUN,
  NORMALNUN,
  FATNUN,

  PRINCESS,
  QUEEN,

  KING,
  MOUNTAINKING,
}
export interface JumpCharacterStatus {
  spx: number,
  spy: number,
  jp: number,
  life: number
}
export interface JumpCharacter {
  id: JUMP_CHARACTERS
  name: string
  status: JumpCharacterStatus
  mode: string
  field: string
  condition: string
  cond: 'GE' | 'LE'
  value: number,
  to: string
}

export const JumpCharacters:JumpCharacter[] = [
  {
    id: JUMP_CHARACTERS.TOWNS_FORK,
    name: "FORK",
    status: {
      spx: 1,
      spy: 1,
      jp: 1,
      life: 1
    },
    mode: '',
    field: '',
    condition: "なし",
    cond: 'GE',
    value: 0,
    to: ''
  },

  {
    id: JUMP_CHARACTERS.HERALD,
    name: "HERALD",
    status: {
      spx: 0.95,
      spy: 1,
      jp: 1,
      life: 1
    },
    mode: 'modeSprint-30',
    field: 'count',
    condition: "たして１０：３０問モードを10回",
    cond: 'GE',
    value: 10,
    to: '/game-plus-10/modeSprint-30'
  },

  {
    id: JUMP_CHARACTERS.MERCHANT,
    name: "MERCHANT",
    status: {
      spx: 1,
      spy: 0.95,
      jp: 0.95,
      life: 1
    },
    mode: 'modeSingle',
    field: 'count',
    condition: "ヒトケタス：10回",
    cond: 'GE',
    value: 10,
    to: '/game-plus-single/modeSingle'
  },

  {
    id: JUMP_CHARACTERS.BUCTCHER,
    name: "BUCTCHER",
    status: {
      spx: 0.95,
      spy: 0.95,
      jp: 0.95,
      life: 1
    },
    mode: 'minusSprint-30',
    field: 'count',
    condition: "ひきざん２０：３０問モードを10回",
    cond: 'GE',
    value: 10,
    to: '/game-minus-20/minusSprint-30'
  },
  {
    id: JUMP_CHARACTERS.BLACKSMITH,
    name: "BLACKSMITH",
    status: {
      spx: 0.8,
      spy: 0.95,
      jp: 0.95,
      life: 1
    },
    mode: 'mul99Sprint-30',
    field: 'count',
    condition: "かけざん９９：３０問モードを10回",
    cond: 'GE',
    value: 10,
    to: '/game-mul-99/mul99Sprint-30'
  },
  {
    id: JUMP_CHARACTERS.ALCHEMIST,
    name: "ALCHEMIST",
    status: {
      spx: 0.8,
      spy: 0.8,
      jp: 0.8,
      life: 1
    },
    mode: 'modeSprint-10',
    field: 'score',
    condition: "たして１０：１０問モード20秒",
    cond: 'LE',
    value: 20,
    to: '/game-plus-10/modeSprint-10'
  },

  {
    id: JUMP_CHARACTERS.MAGICSHOPKEEPER,
    name: "MAGIC SHOPKEEPER",
    status: {
      spx: 0.6,
      spy: 0.6,
      jp: 0.6,
      life: 1
    },
    mode: 'modeSprint-10',
    field: 'score',
    condition: "たして１０：１０問モード8秒",
    cond: 'LE',
    value: 8,
    to: '/game-plus-10/modeSprint-10'
  },

  {
    id: JUMP_CHARACTERS.THIEF,
    name: "THIEF",
    status: {
      spx: 1.5,
      spy: 1.3,
      jp: 1.3,
      life: 1
    },
    mode: 'modeSprint-10',
    field: 'score',
    condition: "たして１０：１０問モード6秒",
    cond: 'LE',
    value: 6,
    to: '/game-plus-10/modeSprint-10'
  },
  {
    id: JUMP_CHARACTERS.ARCHER,
    name: "ARCHER",
    status: {
      spx: 1.2,
      spy: 1.2,
      jp: 1.2,
      life: 1
    },
    mode: 'modeSingle',
    field: 'score',
    condition: "ヒトケタス：100万点",
    cond: 'GE',
    value: 1000000,
    to: '/game-plus-single/modeSingle'
  },

  {
    id: JUMP_CHARACTERS.MAGE,
    name: "MAGE",
    status: {
      spx: 1,
      spy: 0.9,
      jp: 0.9,
      life: 2
    },
    mode: 'modeSingle',
    field: 'score',
    condition: "ヒトケタス：300万点",
    cond: 'GE',
    value: 3000000,
    to: '/game-plus-single/modeSingle'
  },
  {
    id: JUMP_CHARACTERS.BISHOP,
    name: "BISHOP",
    status: {
      spx: 1,
      spy: 0.9,
      jp: 0.9,
      life: 2
    },
    mode: 'modeSingle',
    field: 'score',
    condition: "ヒトケタス：400万点",
    cond: 'GE',
    value: 4000000,
    to: '/game-plus-single/modeSingle'
  },

  {
    id: JUMP_CHARACTERS.EXECUTIONER,
    name: "EXECUTIONER",
    status: {
      spx: 1,
      spy: 1,
      jp: 1,
      life: 2
    },
    mode: 'minusSprint-10',
    field: 'score',
    condition: "ひきざん２０：１０問モード30秒",
    cond: 'LE',
    value: 30,
    to: '/game-minus-20/minusSprint-10'
  },

  {
    id: JUMP_CHARACTERS.KNIGHT,
    name: "KNIGHT",
    status: {
      spx: 1,
      spy: 1,
      jp: 1,
      life: 2
    },
    mode: 'minusSprint-10',
    field: 'score',
    condition: "ひきざん２０：１０問モード9秒",
    cond: 'LE',
    value: 9,
    to: '/game-minus-20/minusSprint-10'
  },
  {
    id: JUMP_CHARACTERS.HEAVYKNIGHT,
    name: "HEAVY KNIGHT",
    status: {
      spx: 0.9,
      spy: 1,
      jp: 1,
      life: 3
    },
    mode: 'minusSprint-10',
    field: 'score',
    condition: "ひきざん２０：１０問モード7秒",
    cond: 'LE',
    value: 7,
    to: '/game-minus-20/minusSprint-10'
  },

  {
    id: JUMP_CHARACTERS.LARGEKNIGHT,
    name: "LARGE KNIGHT",
    status: {
      spx: 0.8,
      spy: 0.8,
      jp: 0.8,
      life: 3
    },
    mode: 'mul99Sprint-10',
    field: 'score',
    condition: "かけざん９９：１０問モード30秒",
    cond: 'LE',
    value: 30,
    to: '/game-mul-99/mul99Sprint-10'
  },
  {
    id: JUMP_CHARACTERS.ELITEKNIGHT,
    name: "ELITE KNIGHT",
    status: {
      spx: 1.1,
      spy: 1.1,
      jp: 1.1,
      life: 2
    },
    mode: 'mul99Sprint-10',
    field: 'score',
    condition: "かけざん９９：１０問モード10秒",
    cond: 'LE',
    value: 10,
    to: '/game-mul-99/mul99Sprint-10'
  },
  {
    id: JUMP_CHARACTERS.LARGEELITEKNIGHT,
    name: "LARGE ELITE KNIGHT",
    status: {
      spx: 1.1,
      spy: 1.0,
      jp: 1.1,
      life: 3
    },
    mode: 'mul99Sprint-10',
    field: 'score',
    condition: "かけざん９９：１０問モード8秒",
    cond: 'LE',
    value: 8,
    to: '/game-mul-99/mul99Sprint-10'
  },

  {
    id: JUMP_CHARACTERS.SKINNYNUN,
    name: "SKINNY NUN",
    status: {
      spx: 0.8,
      spy: 0.8,
      jp: 0.8,
      life: 2
    },
    mode: 'maze20',
    field: 'score',
    condition: "めいろ２０：5階",
    cond: 'GE',
    value: 5,
    to: '/game-maze-20'
  },
  {
    id: JUMP_CHARACTERS.NORMALNUN,
    name: "NORMAL NUN",
    status: {
      spx: 0.9,
      spy: 0.9,
      jp: 0.9,
      life: 2
    },
    mode: 'maze20',
    field: 'score',
    condition: "めいろ２０：15階",
    cond: 'GE',
    value: 15,
    to: '/game-maze-20'
  },
  {
    id: JUMP_CHARACTERS.FATNUN,
    name: "FAT NUN",
    status: {
      spx: 0.7,
      spy: 0.7,
      jp: 0.7,
      life: 2
    },
    mode: 'maze20',
    field: 'score',
    condition: "めいろ２０：クリア",
    cond: 'GE',
    value: 21,
    to: '/game-maze-20'
  },

  {
    id: JUMP_CHARACTERS.PRINCESS,
    name: "PRINCESS",
    status: {
      spx: 1,
      spy: 1,
      jp: 1,
      life: 2
    },
    mode: 'modeSprint-10',
    field: 'count',
    condition: "たして１０：10問モード1000回",
    cond: 'GE',
    value: 1000,
    to: '/game-plus-10/modeSprint-10'
  },
  {
    id: JUMP_CHARACTERS.QUEEN,
    name: "QUEEN",
    status: {
      spx: 1,
      spy: 1,
      jp: 1,
      life: 3
    },
    mode: 'modeSingle',
    field: 'count',
    condition: "ヒトケタス：100回",
    cond: 'GE',
    value: 100,
    to: '/game-plus-single/modeSingle'
  },

  {
    id: JUMP_CHARACTERS.KING,
    name: "KING",
    status: {
      spx: 1.1,
      spy: 1.1,
      jp: 1.1,
      life: 3
    },
    mode: 'minusSprint-10',
    field: 'count',
    condition: "ひきざん２０：10問モード500回",
    cond: 'GE',
    value: 500,
    to: '/game-minus-20/modeSprint-10'
  },
  {
    id: JUMP_CHARACTERS.MOUNTAINKING,
    name: "MOUNTAIN KING",
    status: {
      spx: 1.1,
      spy: 1.1,
      jp: 1.1,
      life: 4
    },
    mode: 'mul99Sprint-10',
    field: 'count',
    condition: "かけざん９９：10問モード300回",
    cond: 'GE',
    value: 300,
    to: '/game-mul-99/modeSprint-10'
  },

]

export interface JumpSave {
  uid: string
  characterFlg: number
  scores: number[]
  playCount: number
}

export class JumpSaveUtil {
  uid: string
  save: JumpSave

  constructor() {
    const uid = sessionStorage.getItem('uid') || ''

    this.uid = uid
    this.save = this.newSave()
  }
  static hasCharacters(characters:JumpCharacter[], statistic:StatisticEntity) {
    return characters.map(c => {
      //@ts-ignore
      const value = statistic[c.field]
      if(value == -1) {
        return false
      }
      console.log(value, c.cond, c.value)
      if((c.cond == 'GE' && value >= c.value)
      || (c.cond == 'LE' && Math.floor(value) <= c.value)
      ){
        return true
      }
      return false
    })
  }

  newSave():JumpSave {
    return {
      uid: this.uid,
      characterFlg: 1,
      scores: Array(7).fill(0),
      playCount: 0
    }
  }

  async loadData() {
    const db = firebase.firestore()
    const q = db.collection('jumpSaves').doc(this.save.uid)
    const r = await q.get()
    if(r.exists) {
      //@ts-ignore
      this.save = r.data()
      if(!this.save.scores) {
        this.save.scores = Array(7).fill(0)
      }
    } else {
      q.set(this.save)
    }
  }
  saveData() {
    const db = firebase.firestore()
    const q = db.collection('jumpSaves').doc(this.save.uid)
    q.set(this.save)
  }
  hasCharacter(n:number): boolean {
    return (this.save.characterFlg & (1 << n)) != 0
  }
  getCharacter(n:number) {
    this.save.characterFlg |= (1 << n)
  }
}
