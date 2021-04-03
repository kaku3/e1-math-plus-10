import { ScoreEntity } from '~/models/Score'

export function dailyStarsOf(scores: ScoreEntity[], d:Date): number {
  const dd = new Date(d)
  const start = dd.setHours(0, 0, 0, 0)
  const end = dd.setDate(dd.getDate() + 1)
  scores = scores
    .filter((o:ScoreEntity) => o.createdAt >= start)
    .filter((o:ScoreEntity) => o.createdAt < end)
  if(scores.length >= 10) {
    return Math.min(Math.floor(scores.length / 20) + 3, 6)
  } else if(scores.length >= 4) {
    return 2
  } else if(scores.length >= 1) {
    return 1
  }
  return 0
}

export function monthlyStarsOf(scores: ScoreEntity[], d:Date): number {
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
