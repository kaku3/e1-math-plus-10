import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Account } from '~/models/Account'

class DefaultAccount implements Account {
  name = 'ゲスト'
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
  async update(account: Account) {
    this.setAccount(account)
    return account
  }
}
