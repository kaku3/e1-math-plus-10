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

export function displayModeName(mode:GameMode): string {
  switch(mode) {
    case 'modeSprint-10':
    case 'minusSprint-10':
      return '10問モード'
    case 'modeSprint-30':
    case 'minusSprint-30':
      return '30問モード'
    case 'modeEndress':
    case 'minusEndress':
      return 'たいきゅうモード'
    case 'modeSingle':
      return 'ヒトケタス'
  }
}

export function fullDisplayModeName(mode:GameMode): string {
  switch(mode) {
    case 'modeSprint-10':
      return 'たして１０ 10問モード'
    case 'minusSprint-10':
      return 'ひきざん２０ 10問モード'
    case 'modeSprint-30':
      return 'たして１０ 30問モード'
    case 'minusSprint-30':
      return 'ひきざん２０ 30問モード'
    case 'modeEndress':
      return 'たして１０ たいきゅうモード'
    case 'minusEndress':
      return 'ひきざん２０ たいきゅうモード'
    case 'modeSingle':
      return 'ヒトケタス'
  }
}
