export type GameMode = 'modeSprint-10' | 'modeSprint-30' | 'modeEndress'

export interface Hiscore {
  mode: GameMode
  name: string
  score: number
}
