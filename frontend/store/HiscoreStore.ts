import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Hiscore, GameMode } from '~/models/Hiscore'
import { Account } from '~/models/Account'

@Module({
  name: 'HiscoreStore',
  stateFactory: true,
  namespaced: true
})
export default class HiscoreStore extends VuexModule {
  hiscores: Hiscore[] = []

  public get sprint10Hiscores(): Hiscore[] {
    let hiscores = this.hiscores
      .filter(v => v.mode === 'modeSprint-10')
      .sort((a, b) => b.score - a.score)
    hiscores = hiscores.slice(0, 10)
    return hiscores
  }
  public get sprint30Hiscores(): Hiscore[] {
    let hiscores = this.hiscores
      .filter(v => v.mode === 'modeSprint-30')
      .sort((a, b) => b.score - a.score)
    hiscores = hiscores.slice(0, 10)
    return hiscores
  }
  public get endressHiscores(): Hiscore[] {
    let hiscores = this.hiscores
      .filter(v => v.mode === 'modeEndress')
      .sort((a, b) => b.score - a.score)
    hiscores = hiscores.slice(0, 10)
    return hiscores
  }

  @Mutation
  setHiscores(hiscores: Hiscore[]) {
    this.hiscores = hiscores
  }

  @Action({ commit: 'setHiscores' })
  async addHiscore(hiscore: Hiscore) {
    const hiscores = [...this.hiscores, hiscore ]
    this.setHiscores(hiscores)
    return this.hiscores
  }
}
