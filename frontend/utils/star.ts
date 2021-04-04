import { ScoreEntity, GameMode, GAME_MODES } from '~/models/Score'

const CONDITIONS = [ 1, 4, 10, 20, 40, 60 ]

export function dailyStarsOf(scores: ScoreEntity[], d:Date): number {
  let count = 0

  for(let gm of GAME_MODES) {
    const c = playCount(scores, d, gm)
    if(c >= 10) {
      count += Math.min(Math.floor(c / 20) + 3, 6)
    } else if(c >= 4) {
      count += 2
    } else if(c >= 1) {
      count += 1
    }
  }
  return count
}

export function playCount(scores:ScoreEntity[], d:Date, gameMode:GameMode): number {
  const dd = new Date(d)
  const start = dd.setHours(0, 0, 0, 0)
  const end = dd.setDate(dd.getDate() + 1)

  const scores_ = scores
    .filter((o:ScoreEntity) => o.mode === gameMode)
    .filter((o:ScoreEntity) => o.createdAt >= start)
    .filter((o:ScoreEntity) => o.createdAt < end)

  return scores_.length
}
export function nextCondition(scores:ScoreEntity[], d:Date, gameMode:GameMode): number {
  const playCount_ = playCount(scores, d, gameMode)
  const c = CONDITIONS.findIndex(c => c === playCount_)
  console.log(playCount_, c)
  if(c >= 0 && c < CONDITIONS.length - 1) {
    return CONDITIONS[c + 1] - playCount_
  }
  return 1
}

export function monthlyStarsOf(scores:ScoreEntity[], d:Date): number {
  const dd = new Date(d)
  dd.setHours(0,0,0,0)
  const monthStart =   dd.setDate(1)
  const monthEnd = dd.setMonth(dd.getMonth() + 1)

  const monthlyScore = scores
    .filter((o:ScoreEntity) => o.createdAt >= monthStart)
    .filter((o:ScoreEntity) => o.createdAt < monthEnd)

  let count = 0
  for(let t = monthStart; t < monthEnd; t += 24 * 60 * 60 * 1000) {
    count += dailyStarsOf(monthlyScore, new Date(t))
  }

  return count
}
