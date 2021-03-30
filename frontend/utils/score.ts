import firebase from '@/plugins/firebase'
import { ScoreEntity, GameMode } from '~/models/Score'

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
