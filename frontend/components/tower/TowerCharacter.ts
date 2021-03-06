import { TowerCharacter } from '~/models/TowerSave'

export type CharacterController = {
  character: TowerCharacter
  creationTime: number
  displayCreationTime: number
}

export enum TOWER_ENEMIES {
  E0,
  E1,
  E2,
  E3,
  E4,
  E5,
  E6,
  E7,
  E8,
  E9,
  E10,
  E11,
  E12,
  E13,
  E14,
  E15,
  E16,
  E17,
  E18,  // boss
  E19,  //
  E20,  //
}

export interface TowerEnemyStatus {
  lv: number    // level
  hp: number    // 体力
  atk: number   // 攻撃力
  def: number   // 防御力（高いほど吹き飛ばされない）
  spd: number   // 移動速度
  range: number // 攻撃範囲
  creationTime: number // 生成時間
}

export interface TowerEnemy {
  id: TOWER_ENEMIES
  status: TowerEnemyStatus
}

export type EnemyController = {
  enemy: TowerEnemy
  creationTime: number
  displayCreationTime: number
}

export const TowerEnemies = [
  {
    id: TOWER_ENEMIES.E0,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E1,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E2,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E3,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E4,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E5,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E6,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E7,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E8,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E9,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E10,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E11,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E12,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E13,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E14,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E15,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E16,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E17,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E18,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E19,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
  {
    id: TOWER_ENEMIES.E20,
    status: {
      lv: 0,
      hp: 1,
      atk: 1,
      def: 1,
      range: 1,
      creationTime: 200
    }
  },
]

export class TowerEnemyUtil {
  enemies: TowerEnemy[]

  constructor(floor:number) {
    this.enemies = this.initEnemies(floor)
  }
  initEnemies(floor:number):TowerEnemy[] {
    const floorEnemies = [
      { floor: 1, e: TOWER_ENEMIES.E0 },
      { floor: 2, e: TOWER_ENEMIES.E1 },
      { floor: 5, e: TOWER_ENEMIES.E2 },
      { floor: 10, e: TOWER_ENEMIES.E3 },
      { floor: 20, e: TOWER_ENEMIES.E4 },
      { floor: 40, e: TOWER_ENEMIES.E5 },
      { floor: 100, e: TOWER_ENEMIES.E6 },
      { floor: 200, e: TOWER_ENEMIES.E7 },
      { floor: 300, e: TOWER_ENEMIES.E8 },
      { floor: 400, e: TOWER_ENEMIES.E9 },
      { floor: 500, e: TOWER_ENEMIES.E10 },
      { floor: 600, e: TOWER_ENEMIES.E11 },
      { floor: 700, e: TOWER_ENEMIES.E12 },
      { floor: 800, e: TOWER_ENEMIES.E13 },
      { floor: 900, e: TOWER_ENEMIES.E14 },
      { floor: 1000, e: TOWER_ENEMIES.E15 },
      { floor: 2000, e: TOWER_ENEMIES.E16 },
      { floor: 5000, e: TOWER_ENEMIES.E17 },
    ]
    const floorBosses = [
      { floor: 10, e: TOWER_ENEMIES.E18 },
      { floor: 50, e: TOWER_ENEMIES.E19 },
      { floor: 100, e: TOWER_ENEMIES.E20 },
    ]

    return []
  }
}
