import firebase from '@/plugins/firebase'

firebase.auth().signInAnonymously()
.catch((error) => {
  console.log(`[error] Can not signin anonymouse (${error.code}:${error.message})`);
})

export default function ({ route, store, redirect }) {
  firebase.auth().onAuthStateChanged((user) => {
    sessionStorage.setItem('uid', user.uid)
    console.log(user)
  })
}
