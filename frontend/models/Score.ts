export type GameMode =
  'modeSprint-10' | 'modeSprint-30' | 'modeEndress' | 'modeSingle' |
  'minusSprint-10' | 'minusSprint-30' | 'minusEndress' |
  'mul99Sprint-10' | 'mul99Sprint-30' | 'mul99Endress' |
  'mul1xSprint-10' | 'mul1xSprint-30' | 'mul1xEndress'

export const GAME_MODES:GameMode[] = [
  'modeSprint-10',
  'modeSprint-30',
  'modeEndress',

  'modeSingle',

  'minusSprint-10',
  'minusSprint-30',
  'minusEndress',

  'mul99Sprint-10',
  'mul99Sprint-30',
  'mul99Endress',

  'mul1xSprint-10',
  'mul1xSprint-30',
  'mul1xEndress'
]

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

export interface MazeScoreEntity {
  name: string
  icon: string
  floor: number
  coin: number
  createdAt: number
}

export interface JumpScoreEntity {
  uid: string
  name: string
  stage: number
  character: number
  score: number
  createdAt: number
}
