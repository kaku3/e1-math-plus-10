import firebase from '@/plugins/firebase'

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
  condition: string
  cond: 'GE' | 'LE'
  value: number
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
    condition: "なし",
    cond: 'GE',
    value: 0
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
    condition: "たして１０：３０問モードを１０回",
    cond: 'GE',
    value: 10
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
    condition: "ヒトケタス：１０回",
    cond: 'GE',
    value: 10
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
    condition: "ひきざん２０：３０問モードを１０回",
    cond: 'GE',
    value: 10
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
    condition: "かけざん９９：３０問モードを１０回",
    cond: 'GE',
    value: 10
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
    condition: "たして１０：１０問モード20秒",
    cond: 'LE',
    value: 20
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
    condition: "たして１０：１０問モード8秒",
    cond: 'LE',
    value: 8
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
    condition: "たして１０：１０問モード6秒",
    cond: 'LE',
    value: 6
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
    condition: "ヒトケタス：100万点",
    cond: 'GE',
    value: 1000000
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
    condition: "ヒトケタス：300万点",
    cond: 'GE',
    value: 3000000
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
    condition: "ヒトケタス：400万点",
    cond: 'GE',
    value: 4000000
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
    condition: "ひきざん２０：１０問モード30秒",
    cond: 'LE',
    value: 30
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
    condition: "ひきざん２０：１０問モード9秒",
    cond: 'LE',
    value: 9
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
    condition: "ひきざん２０：１０問モード7秒",
    cond: 'LE',
    value: 7
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
    condition: "かけざん９９：１０問モード30秒",
    cond: 'LE',
    value: 30
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
    condition: "かけざん９９：１０問モード10秒",
    cond: 'LE',
    value: 10
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
    condition: "かけざん９９：１０問モード8秒",
    cond: 'LE',
    value: 8
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
    condition: "めいろ２０：5階",
    cond: 'GE',
    value: 5
  }, {
    id: JUMP_CHARACTERS.NORMALNUN,
    name: "NORMAL NUN",
    status: {
      spx: 0.9,
      spy: 0.9,
      jp: 0.9,
      life: 2
    },
    condition: "めいろ２０：15階",
    cond: 'GE',
    value: 15
  }, {
    id: JUMP_CHARACTERS.FATNUN,
    name: "FAT NUN",
    status: {
      spx: 0.7,
      spy: 0.7,
      jp: 0.7,
      life: 2
    },
    condition: "めいろ２０：クリア",
    cond: 'GE',
    value: 21
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
    condition: "たして１０：10問モード1000回",
    cond: 'GE',
    value: 1000
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
    condition: "ヒトケタス：1000回",
    cond: 'GE',
    value: 1000
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
    condition: "ひきざん２０：1000回",
    cond: 'GE',
    value: 1000
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
    condition: "かけざん９９：1000回",
    cond: 'GE',
    value: 1000
  },

]

export interface JumpSave {
  uid: string
  characterFlg: number
  score: number
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

  newSave():JumpSave {
    return {
      uid: this.uid,
      characterFlg: 1,
      score: 0,
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
