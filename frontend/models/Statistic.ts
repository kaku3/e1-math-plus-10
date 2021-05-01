import firebase from '@/plugins/firebase'

export interface StatisticEntity {
  uid: string

  mode: string

  count: number
  score: number
}


const ascs = [
  'modeSprint-10',
  'modeSprint-30',

  'minusSprint-10',
  'minusSprint-30',

  'mul99Sprint-10',
  'mul99Sprint-30',
]

export class StatisticUtil {
  uid: string
  mode: string
  sort: 'asc' | 'desc'
  save: StatisticEntity

  constructor(mode:string) {
    const uid = sessionStorage.getItem('uid') || ''

    this.uid = uid
    this.mode = mode
    this.save = this.newSave()

    this.sort = ascs.find(mode => mode === this.mode) ? 'asc' : 'desc'
  }
  static async loadUserStatistic() {
    const uid = sessionStorage.getItem('uid') || ''

    const db = firebase.firestore()
    const q = db.collection('userStatistics').doc(uid)
    const r = await q.get()

    //@ts-ignore
    let userStatistic = null
    if(r.exists) {
      //@ts-ignore
      userStatistic = r.data()
    } else {
      userStatistic = StatisticUtil.newUserStatistic(uid)
      q.set(userStatistic)
    }
    //@ts-ignore
    for(let k in userStatistic) {
      if(k == 'uid') {
        continue
      }
      //@ts-ignore
      const r = await userStatistic[k].get()
      if(r.exists) {
        //@ts-ignore
        userStatistic[k] = r.data()
      } else {
        //@ts-ignore
        userStatistic[k] = {
          count: 0,
          score: -1
        }
      }
    }

    return userStatistic
  }

  static newUserStatistic(uid: string) {
    const c = firebase.firestore().collection('statistics')
    return {
      uid,
      modeSprint10: c.doc(`${uid}_modeSprint-10`),
      modeSprint30: c.doc(`${uid}_modeSprint-30`),
      modeEndress: c.doc(`${uid}_modeEndress`),

      modeSingle: c.doc(`${uid}_modeSingle`),

      minusSprint10: c.doc(`${uid}_minusSprint-10`),
      minusSprint30: c.doc(`${uid}_minusSprint-30`),
      minusEndress: c.doc(`${uid}_minusEndress`),

      mul99Sprint10: c.doc(`${uid}_mul99Sprint-10`),
      mul99Sprint30: c.doc(`${uid}_mul99Sprint-30`),
      mul99Endress: c.doc(`${uid}_mul99Endress`),

      maze20: c.doc(`${uid}_maze20`),
      jumpMan: c.doc(`${uid}_jumpMan`),
    }
  }

  newSave():StatisticEntity {
    return {
      uid: this.uid,
      mode: this.mode,
      count: 0,
      score: -1,
    }
  }
  async update(score:number) {
    await this.loadData()
    this.save.count++
    if(this.save.score == -1
      || this.sort === 'asc' && score < this.save.score
      || this.sort === 'desc' && score > this.save.score
    ) {
      this.save.score = score
    }
    this.saveData()
  }

  async loadData() {
    const db = firebase.firestore()
    const q = db.collection('statistics').doc(this.docId())
    const r = await q.get()
    if(r.exists) {
      //@ts-ignore
      this.save = r.data()
    } else {
      q.set(this.save)
    }
  }
  saveData() {
    const db = firebase.firestore()
    const q = db.collection('statistics').doc(this.docId())
    q.set(this.save)
  }
  docId() {
    return `${this.uid}_${this.mode}`
  }
}
