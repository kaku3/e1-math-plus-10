import firebase from '@/plugins/firebase'
import { ScoreEntity, MazeScoreEntity } from '~/models/Score'

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
}

export function entryMazeScore(e: MazeScoreEntity) {
  const uid = sessionStorage.getItem('uid') || ''

  const db = firebase.firestore()
  db.collection('mazeScores').add({
    uid: uid,
    name: e.name,
    floor: e.floor,
    coin: e.coin,
    createdAt: new Date(e.createdAt).setHours(0,0,0,0),
    timestamp: e.createdAt
  })
}
