
import firebase from '@/plugins/firebase'

import { StatisticEntity } from '~/models/Statistic'

export enum TOWER_CHARACTERS {
  TOWNS_FORK,

  THIEF,
  ARCHER,

  MAGE,
  BISHOP,

  KNIGHT,
  HEAVYKNIGHT,

  LARGEKNIGHT,
  ELITEKNIGHT,
  LARGEELITEKNIGHT,

  NORMALNUN,

  PRINCESS,
  QUEEN,

  KING,
  MOUNTAINKING,
}
export interface TowerCharacterStatus {
  hp: number    // 体力
  atk: number   // 攻撃力
  def: number   // 防御力（高いほど吹き飛ばされない）
  spd: number   // 移動速度
  range: number // 攻撃範囲
  creationTime: number // 生成時間
}
export interface TowerCharacter {
  id: TOWER_CHARACTERS
  name: string
  status: TowerCharacterStatus
  characterPrice: number   // 購入価格
}

export const TowerCharacters = [
  {
    id: TOWER_CHARACTERS.TOWNS_FORK,
    name: "FORK",
    characterPrice: 0,
    status: {
      hp: 1,
      atk: 1,
      def: 1,
      spd: 50,
      range: 1,
      creationTime: 5000,
    }
  },

  {
    id: TOWER_CHARACTERS.THIEF,
    name: "THIEF",
    characterPrice: 3,
    status: {
      hp: 2,
      atk: 3,
      def: 1,
      spd: 100,
      range: 1,
      creationTime: 7000,
    }
  },
  {
    id: TOWER_CHARACTERS.ARCHER,
    name: "ARCHER",
    characterPrice: 8,
    status: {
      hp: 2,
      atk: 3,
      def: 1,
      spd: 5,
      range: 10,
      creationTime: 8000,
    }
  },

  {
    id: TOWER_CHARACTERS.MAGE,
    name: "MAGE",
    characterPrice: 20,
    status: {
      hp: 2,
      atk: 10,
      def: 1,
      spd: 5,
      range: 20,
      creationTime: 12000,
    }
  },
  {
    id: TOWER_CHARACTERS.BISHOP,
    name: "BISHOP",
    characterPrice: 30,
    status: {
      hp: 2,
      atk: 10,
      def: 1,
      spd: 5,
      range: 20,
      creationTime: 12000,
    }
  },

  {
    id: TOWER_CHARACTERS.KNIGHT,
    name: "KNIGHT",
    characterPrice: 30,
    status: {
      hp: 100,
      atk: 50,
      def: 10,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.HEAVYKNIGHT,
    name: "HEAVY KNIGHT",
    characterPrice: 60,
    status: {
      hp: 200,
      atk: 100,
      def: 50,
      spd: 20,
      range: 1,
      creationTime: 10000,
    }
  },

  {
    id: TOWER_CHARACTERS.LARGEKNIGHT,
    name: "LARGE KNIGHT",
    characterPrice: 100,
    status: {
      hp: 400,
      atk: 300,
      def: 50,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.ELITEKNIGHT,
    name: "ELITE KNIGHT",
    characterPrice: 100,
    status: {
      hp: 400,
      atk: 300,
      def: 50,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.LARGEELITEKNIGHT,
    name: "LARGE ELITE KNIGHT",
    characterPrice: 200,
    status: {
      hp: 800,
      atk: 600,
      def: 200,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },

  {
    id: TOWER_CHARACTERS.NORMALNUN,
    name: "NUN",
    characterPrice: 200,
    status: {
      hp: 800,
      atk: 600,
      def: 1,
      spd: 30,
      range: 50,
      creationTime: 10000,
    }
  },

  {
    id: TOWER_CHARACTERS.PRINCESS,
    name: "PRINCESS",
    characterPrice: 300,
    status: {
      hp: 800,
      atk: 600,
      def: 1,
      spd: 30,
      range: 100,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.QUEEN,
    name: "QUEEN",
    characterPrice: 500,
    status: {
      hp: 800,
      atk: 1200,
      def: 1,
      spd: 30,
      range: 100,
      creationTime: 10000,
    }
  },

  {
    id: TOWER_CHARACTERS.KING,
    name: "KING",
    characterPrice: 800,
    status: {
      hp: 2000,
      atk: 2000,
      def: 1000,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.MOUNTAINKING,
    name: "MOUNTAIN KING",
    characterPrice: 1000,
    status: {
      hp: 4000,
      atk: 4000,
      def: 2000,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
]

export interface TowerSave {
  uid: string
  star: number
  floor: number
  levels: number[]
}

export class TowerSaveUtil {
  uid: string
  save: TowerSave

  constructor() {
    const uid = sessionStorage.getItem('uid') || ''

    this.uid = uid
    this.save = this.newSave()
  }

  newSave():TowerSave {
    const levels = Array(TowerCharacters.length).fill(0)
    levels[TOWER_CHARACTERS.TOWNS_FORK] = 1
    return {
      uid: this.uid,
      floor: 1,
      star: 0,
      levels
    }
  }

  async loadData() {
    const db = firebase.firestore()
    const q = db.collection('towerSaves').doc(this.save.uid)
    const r = await q.get()
    if(r.exists) {
      //@ts-ignore
      this.save = r.data()
    } else {
      q.set(this.save)
    }
  }
  async saveData() {
    const db = firebase.firestore()
    const q = db.collection('towerSaves').doc(this.save.uid)
    await q.set(this.save)
  }

  static async addStar() {
    const uid = sessionStorage.getItem('uid') || ''
    if(!uid) {
      return
    }

    const db = firebase.firestore()
    const q = db.collection('towerSaves').doc(uid)
    try {
      await db.runTransaction(async (t) => {
        const r = await t.get(q)
        //@ts-ignore
        const star = r.data().star + 1
        t.update(q, { star })
      })
    } catch(ex) {
      console.error(ex)
    }
  }
}
