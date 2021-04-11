import Random from '~/utils/Random'

export interface MazeSave {
  uid: string
  seed: number
  hpMax: number
  hp: number
  coin: number
  mattock: number
  portion: number
  key1: number
  key2: number
  floor: number
  playCount: number

  shop_mattock: number
  shop_portion: number
  shop_key1: number
  shop_key2: number
}


export function NewSave(id: string): MazeSave {
  return {
    uid: id,
    seed: new Date().getTime(),
    hpMax : 100,
    hp : 100,
    coin : 0,
    mattock : 0,
    portion : 0,
    key1 : 0,
    key2 : 0,
    floor : 0,
    playCount : 0,

    shop_mattock: 0,
    shop_portion: 0,
    shop_key1: 0,
    shop_key2: 0,
  }
}
export function resetSave(save: MazeSave) {
  save.seed = new Date().getTime()
  save.hpMax = 100
  save.hp = 100
  save.coin = 0
  save.mattock = 0
  save.portion = 0
  save.key1 = 0
  save.key2 = 0
  save.floor = 0

  save.shop_mattock = 0
  save.shop_portion = 0
  save.shop_key1 = 0
  save.shop_key2 = 0

}
