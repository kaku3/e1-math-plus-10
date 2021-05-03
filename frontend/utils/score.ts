import firebase from '@/plugins/firebase'
import { ScoreEntity, MazeScoreEntity, JumpScoreEntity } from '~/models/Score'

import { StatisticUtil } from '~/models/Statistic'

export async function entryHiscore(e: ScoreEntity) {
  console.log(e)
  const db = firebase.firestore()
  db.collection('scores').add({
    mode: e.mode,
    name: e.name,
    score: e.score,
    createdAt: new Date(e.createdAt).setHours(0,0,0,0),
    timestamp: e.createdAt
  })

  const s = new StatisticUtil(e.mode)
  await s.update(e.score)
  return s.save
}

export async function entryMazeScore(e: MazeScoreEntity) {
  const uid = sessionStorage.getItem('uid') || ''

  const o = {
    ...e,
    uid: uid,
    createdAt: new Date(e.createdAt).setHours(0,0,0,0)
  }

  const db = firebase.firestore()
  db.collection('mazeScores').add(o)

  const s = new StatisticUtil('maze20')
  await s.update(e.floor)
  return s.save
}


export async function entryJumpHiscore(e: JumpScoreEntity) {
  console.log(e)
  const db = firebase.firestore()
  db.collection('jumpScores').add({
    ...e,
    createdAt: new Date(e.createdAt).setHours(0,0,0,0),
    timestamp: e.createdAt
  })

  const s = new StatisticUtil('jumpMan')
  await s.update(e.score)
  return s.save
}
