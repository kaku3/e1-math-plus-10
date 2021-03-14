import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Account } from '~/models/Account'

class DefaultAccount implements Account {
  name = 'プレイヤー1'
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
  }

  @Action({ commit: 'setAccount' })
  async updateName(name: string) {
    this.account.name = name
    this.setAccount(this.account)
    return this.account
  }
}
