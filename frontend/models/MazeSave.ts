export interface MazeSave {
  uid: string
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
