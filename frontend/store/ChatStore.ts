import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ChatReadEntity } from '~/models/Chat'

@Module({
  name: 'ChatStore',
  stateFactory: true,
  namespaced: true
})
export default class ChatStore extends VuexModule {
  chatReads: ChatReadEntity[] = []

  @Mutation
  _updateChatRead(e: ChatReadEntity) {
    const es = this.chatReads.filter(o => o.room === e.room)
    if(es.length > 0) {
      es[0] = e
    } else {
      this.chatReads.push(e)
    }
  }

  @Action
  async updateChatRead(e: ChatReadEntity) {
    this._updateChatRead(e)

    return e
  }
}
