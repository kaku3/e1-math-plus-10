import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ScoreEntity, GameMode } from '~/models/Score'
import { Account } from '~/models/Account'

@Module({
  name: 'ScoreStore',
  stateFactory: true,
  namespaced: true
})
export default class ScoreStore extends VuexModule {
  scores: ScoreEntity[] = []
  lastScore: ScoreEntity | null = null

  public get sprint10Hiscores(): ScoreEntity[] {
    let scores = this.scores
      .filter(v => v.mode === 'modeSprint-10')
      .sort((a, b) => a.score - b.score)
    scores = scores.slice(0, 10)
    return scores
  }
  public get sprint30Hiscores(): ScoreEntity[] {
    let scores = this.scores
      .filter(v => v.mode === 'modeSprint-30')
      .sort((a, b) => a.score - b.score)
    scores = scores.slice(0, 10)
    return scores
  }
  public get endressHiscores(): ScoreEntity[] {
    let scores = this.scores
      .filter(v => v.mode === 'modeEndress')
      .sort((a, b) => b.score - a.score)
    scores = scores.slice(0, 10)
    return scores
  }

  @Mutation
  setScores(scores: ScoreEntity[]) {
    this.scores = scores
  }

  @Mutation
  setLastScore(score: ScoreEntity) {
    this.lastScore = score
  }

  @Action
  async addScore(score: ScoreEntity) {
    const scores = [...this.scores, score ]
    this.setScores(scores)
    this.setLastScore(score)
  }
}
