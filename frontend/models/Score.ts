export type GameMode = 'modeSprint-10' | 'modeSprint-30' | 'modeEndress'

export interface ScoreEntity {
  mode: GameMode
  name: string
  score: number
  createdAt: number
}
