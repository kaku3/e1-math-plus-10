import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Account } from '~/models/Account'

class DefaultAccount implements Account {
  name = 'ゲスト'
  icon = JSON.stringify({
    ps: [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
      [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, ],
      [ 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 8, 3, 3, 3, 3, 8, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, ],
      [ 0, 3, 3, 3, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 0, ],
      [ 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, ],
      [ 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    ],
    cs: [
      '#000000',
      '#FFFFFF',
      '#FF0000',
      '#FFFF00',
      '#00FF00',
      '#00FFFF',
      '#0000FF',
      '#FF00FF',
      '#222222',
      '#880000',
      '#888800',
      '#008800',
      '#008888',
      '#000088',
      '#880088',
      '#FFE1CD',
    ]
  })
}

@Module({
  name: 'AccountStore',
  stateFactory: true,
  namespaced: true
})
export default class AccountStore extends VuexModule {
  account: Account = new DefaultAccount()

  @Mutation
  setAccount(account: Account) {
    this.account = account
    console.log(this.account, account)
  }

  @Action({ commit: 'setAccount' })
  async updateName(name: string) {
    this.account.name = name

    this.setAccount(this.account)
    return this.account
  }
  @Action({ commit: 'setAccount' })
  async updateIcon(icon: string) {
    this.account.icon = icon

    this.setAccount(this.account)
    return this.account
  }
}
