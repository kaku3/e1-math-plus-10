import firebase from '@/plugins/firebase'
import { ScoreEntity, MazeScoreEntity } from '~/models/Score'

import { StatisticUtil } from '~/models/Statistic'

export function entryHiscore(e: ScoreEntity) {
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
  s.update(e.score)
}

export function entryMazeScore(e: MazeScoreEntity) {
  const uid = sessionStorage.getItem('uid') || ''

  const o = {
    ...e,
    uid: uid,
    createdAt: new Date(e.createdAt).setHours(0,0,0,0)
  }

  const db = firebase.firestore()
  db.collection('mazeScores').add(o)

  const s = new StatisticUtil('maze20')
  s.update(e.floor)
}
