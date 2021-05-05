import { ScoreEntity, NullScoreEntity, GameMode } from '~/models/Score'

export function fixed2(v:number): string {
  return Number.isInteger(v) ? `${v}` : v.toFixed(2)
}

export function signed(v:number): string {
  if(Number.isInteger(v)) {
    return v > 0 ? `+${v}` : `${v}`
  }
  return v > 0 ? `+${v.toFixed(2)}` : `${v.toFixed(2)}`
}

export function displayModeScore(mode:string, score:number) {
  if(mode !== 'modeEndress'
  && mode !== 'modeSingle'
  && mode !== 'minusEndress'
  && mode !== 'mul99Endress'
  && mode !== 'mul1xEndress'
  && mode !== 'mul9xEndress'
  ) {
    return score.toFixed(2)
  }
  return score
}

export function toGameMode(mode:string, questionCount:number): GameMode {
  if( mode == 'modeEndress'
  ||  mode == 'modeSingle'
  ||  mode == 'minusEndress'
  ||  mode == 'mul99Endress'
  ||  mode == 'mul1xEndress'
  ) {
    return mode
  } else {
    return `${mode}-${questionCount}` as GameMode
  }
}

export function toGameModeOrderBy(mode:string) {
  return (mode === 'modeEndress'
  || mode === 'modeSingle'
  || mode === 'minusEndress'
  || mode === 'mul99Endress'
  || mode == 'mul1xEndress'
  || mode == 'mul9xEndress'
  ) ? 'desc' : 'asc'
}

export function displayModeName(mode:GameMode): string {
  switch(mode) {
    case 'modeSprint-10':
    case 'minusSprint-10':
    case 'mul99Sprint-10':
    case 'mul1xSprint-10':
    case 'mul9xSprint-10':
      return '10問モード'
    case 'modeSprint-30':
    case 'minusSprint-30':
    case 'mul99Sprint-30':
    case 'mul1xSprint-30':
    case 'mul9xSprint-30':
      return '30問モード'
    case 'modeEndress':
    case 'minusEndress':
    case 'mul99Endress':
    case 'mul1xEndress':
    case 'mul9xEndress':
      return 'たいきゅうモード'
    case 'modeSingle':
      return 'ヒトケタス'
  }
}

export function fullDisplayModeName(mode:GameMode): string {
  switch(mode) {
    case 'modeSprint-10':
      return 'たして１０ 10問モード'
    case 'modeSprint-30':
      return 'たして１０ 30問モード'
    case 'modeEndress':
      return 'たして１０ たいきゅうモード'

    case 'modeSingle':
      return 'ヒトケタス'

    case 'minusSprint-10':
      return 'ひきざん２０ 10問モード'
    case 'minusSprint-30':
      return 'ひきざん２０ 30問モード'
    case 'minusEndress':
      return 'ひきざん２０ たいきゅうモード'

    case 'mul99Sprint-10':
      return 'かけざん９９ 10問モード'
    case 'mul99Sprint-30':
      return 'かけざん９９ 30問モード'
    case 'mul99Endress':
      return 'かけざん９９ たいきゅうモード'

    case 'mul1xSprint-10':
      return 'かけざん１ｘ 10問モード'
    case 'mul1xSprint-30':
      return 'かけざん１ｘ 30問モード'
    case 'mul1xEndress':
      return 'かけざん１ｘ たいきゅうモード'

    case 'mul9xSprint-10':
      return 'かけざん９ｘ 10問モード'
    case 'mul9xSprint-30':
      return 'かけざん９ｘ 30問モード'
    case 'mul9xEndress':
      return 'かけざん９ｘ たいきゅうモード'
  }
}
