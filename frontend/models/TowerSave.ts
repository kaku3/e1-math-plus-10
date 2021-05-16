
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
  lv: number    // level
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
  levelPrice: number  // levelup price
}

export const TowerCharacters = [
  {
    id: TOWER_CHARACTERS.TOWNS_FORK,
    name: "FORK",
    characterPrice: 0,
    levelPrice: 1,
    status: {
      lv: 0,
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
    levelPrice: 2,
    status: {
      lv: 0,
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
    levelPrice: 2,
    status: {
      lv: 0,
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
    levelPrice: 3,
    status: {
      lv: 0,
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
    levelPrice: 3,
    status: {
      lv: 0,
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
    levelPrice: 4,
    status: {
      lv: 0,
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
    levelPrice: 5,
    status: {
      lv: 0,
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
    levelPrice: 6,
    status: {
      lv: 0,
      hp: 500,
      atk: 300,
      def: 70,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.ELITEKNIGHT,
    name: "ELITE KNIGHT",
    characterPrice: 100,
    levelPrice: 7,
    status: {
      lv: 0,
      hp: 400,
      atk: 400,
      def: 60,
      spd: 30,
      range: 1,
      creationTime: 10000,
    }
  },
  {
    id: TOWER_CHARACTERS.LARGEELITEKNIGHT,
    name: "LARGE ELITE KNIGHT",
    characterPrice: 200,
    levelPrice: 8,
    status: {
      lv: 0,
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
    levelPrice: 6,
    status: {
      lv: 0,
      hp: 400,
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
    levelPrice: 7,
    status: {
      lv: 0,
      hp: 400,
      atk: 700,
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
    levelPrice: 8,
    status: {
      lv: 0,
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
    levelPrice: 10,
    status: {
      lv: 0,
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
    levelPrice: 20,
    status: {
      lv: 0,
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

const characterLevelStatuses = [
  // fork
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      s.hp = s.hp + s.lv + Math.floor(s.lv / 10) * 10
      s.atk = s.atk + s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100
      s.def = s.def + s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // thief
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      s.hp = s.hp + s.lv + Math.floor(s.lv / 10) * 10
      s.atk = s.atk + s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100
      s.def = s.def + s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // archer
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      s.hp = s.hp + s.lv + Math.floor(s.lv / 10) * 10
      s.atk = s.atk + (s.lv * 2) + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100
      s.def = s.def + s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // mage
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      s.hp = s.hp + s.lv + Math.floor(s.lv / 10) * 10
      s.atk = s.atk + (s.lv * 3) + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100
      s.def = s.def + s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // bishop
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      s.hp = s.hp + s.lv + Math.floor(s.lv / 10) * 10
      s.atk = s.atk + (s.lv * 3) + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100
      s.def = s.def + s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // knight
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // heavy knight
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // large knight
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // elite knight
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // large elite knight
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // num
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // princess
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // queen
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // king
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },
  // mountain king
  (s:TowerCharacterStatus) => {
    if(s.lv < 99) {
      const hp_ = Math.floor(s.hp / 10)
      const atk_ = Math.floor(s.atk / 10)
      const def_ = Math.floor(s.def / 10)
      s.hp = s.hp + (s.lv + Math.floor(s.lv / 10) * 10) * hp_
      s.atk = s.atk + (s.lv + Math.floor(s.lv / 10) * 10 + Math.floor(s.lv / 50) * 100) * atk_
      s.def = s.def + (s.lv + Math.floor(s.lv / 10) * 5 + Math.floor(s.lv / 50) * 50) * def_
    } else {
      s.hp = s.hp * 200
      s.atk = s.atk * 500
      s.def = s.def * 300
    }
    s.creationTime = s.creationTime - (s.lv * 10 + Math.floor(s.lv / 10) * 100 + Math.floor(s.lv / 50) * 1000)
    return s
  },

]


export class TowerUtil {
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

  // キャラクター buy / levelup
  async updateCharacter(c:TowerCharacter, price:number) {
    const uid = sessionStorage.getItem('uid') || ''
    if(!uid) {
      return
    }

    const db = firebase.firestore()
    const batch = db.batch()
    const q = db.collection('towerSaves').doc(uid)

    this.save.star -= price
    this.save.levels[c.id]++

    batch.update(q, {
      star: this.save.star,
      levels: this.save.levels
    })
    await batch.commit()
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

  static getCharacters(save:TowerSave): TowerCharacter[] {
    const characters = []
    let available = 2
    for(let i in save.levels) {
      let lv = save.levels[i]
      if(save.levels[i] == 0) {
        if(available-- <= 0) {
          break
        }
      }
      characters.push(TowerUtil.setupCharacter(lv, TowerCharacters[i]))
    }
    return characters
  }

  static setupCharacter(lv: number, character:TowerCharacter) {
    let c = {...character}
    let status = {...c.status}
    status.lv = lv
    c.status = characterLevelStatuses[c.id](status)
    return c
  }

}
