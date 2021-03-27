export type GameMode =
  'modeSprint-10' | 'modeSprint-30' | 'modeEndress' | 'modeSingle' |
  'minusSprint-10' | 'minusSprint-30' | 'minusEndress'

export interface ScoreEntity {
  mode: GameMode
  name: string
  score: number
  createdAt: number
}

export function NullScoreEntity(mode:GameMode):ScoreEntity {
  const name = ''
  const score = 0
  const createdAt = 0
  return { mode, name, score, createdAt }
}
