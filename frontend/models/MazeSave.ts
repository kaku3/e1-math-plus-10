export interface MazeSave {
  uid: string
  hpMax: number
  hp: number
  coin: number
  mattock: number
  portion: number
  key1: number
  key2: number
  floor: number
  playCount: number
}


export function NewSave(id: string): MazeSave {
  return {
    uid: id,
    hpMax : 100,
    hp : 100,
    coin : 0,
    mattock : 0,
    portion : 0,
    key1 : 0,
    key2 : 0,
    floor : 0,
    playCount : 0
  }
}
export function resetSave(save: MazeSave) {
  save.hpMax = 100
  save.hp = 100
  save.coin = 0
  save.mattock = 0
  save.portion = 0
  save.key1 = 0
  save.key2 = 0
  save.floor = 0
  save.playCount = 0
}
