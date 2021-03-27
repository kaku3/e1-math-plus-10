<template>
  <div class="chat-component">
    <v-slide-y-reverse-transition>
      <div v-if="show" class="log-container">
        <div v-for="(o, i) in logs" :key="i" class="log-item" :class="{ me: isMe(o)}">
          <div class="name">{{o.name}}</div>
          <v-card class="comment rounded-lg" elevation="2">{{o.comment}}</v-card>
        </div>
      </div>
    </v-slide-y-reverse-transition>
    <v-card v-if="show" elevation="2" class="input-form">
      <v-text-field
        v-model="comment"
        placeholder="コメント"
        outlined
        dense
      >
        <template v-slot:append>
          <v-btn icon @click="postComment()"><v-icon>mdi-send</v-icon></v-btn>
        </template>
      </v-text-field>
    </v-card>
    <v-badge
      :content="unreadCount"
      :value="unreadCount"
      bordered
      color="info"
      overlap
      class="toggle-show-icon"
    >
      <v-btn
        fab
        dark
        small
        :color="showIconColor"
        @click="toggleShow()">
        <v-icon>mdi-chat</v-icon>
      </v-btn>
    </v-badge>
  </div>
</template>
<style lang="scss" scoped>
.chat-component {
  position: fixed;
  right: 0;
  bottom: 0;
  text-align: right;
}
.toggle-show-icon {
  margin-right: .5rem;
  margin-bottom: .5rem;
}
.log-container {
  width: 100vw;
  max-height: 60vh;
  overflow: auto;
  background-color: rgba(0,0,0, .25);
  > .log-item {
    display: block;
    > .name {
      font-size: .8rem;
      font-weight: bold;
    }
    > .comment {
      display: inline-block;
      padding: .5rem;

    }

    &.me {
      > .comment {
        background-color: #C5E1A5;
      }
    }
  }
  .input-form {
    width: 90vw;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import AccountStore from '~/store/AccountStore'
import ChatStore from '~/store/ChatStore'
import { ChatLogEntity, ChatReadEntity } from '~/models/Chat'

import firebase from '@/plugins/firebase'

type DataType = {
  show: boolean
  chatRead: ChatReadEntity | null
  comment: String
  logs: ChatLogEntity[]
}

export default Vue.extend({
  props: {
    room: {
      type: String,
      default: ""
    }
  },
  data(): DataType {
    return {
      show: false,
      chatRead: null,
      comment: "",
      logs: []
    }
  },
  mounted () {
    this.getLogs()
  },
  methods: {
    toggleShow() {
      this.show = !this.show
      if(this.show && this.logs.length > 0) {
        this.updateChatRead(this.logs[this.logs.length - 1] as ChatLogEntity)
      }
    },
    getLogs() {
      if(this.room) {
        const db = firebase.database()
        db.ref(this.room)
          .orderByChild('createdAt')
          .limitToLast(10)
          .on("value", (data) => {
          if(data) {
            const obj = data.val()
            if(obj) {
              this.logs = Object.keys(obj).map(k => {
                const o = obj[k]
                return o
              })
            }
          }
        })
        if(this.show) {
          this.updateChatRead(this.logs[this.logs.length - 1] as ChatLogEntity)
        }
      }
    },
    async updateChatRead (log: ChatLogEntity) {
      this.chatRead = {
        room: this.room,
        timestamp: log.createdAt
      }
      this.chatStore.updateChatRead(this.chatRead)
    },

    postComment() {
      if(!this.comment) {
        return
      }
      if(this.room) {
        const db = firebase.database()
        db.ref(this.room).push({
          name: this.accountStore.account.name,
          comment: this.comment,
          createdAt: (new Date()).getTime()
        })
      }
      this.comment = ""
    },
    isMe(o:any): boolean {
      return o.name === this.accountStore.account.name
    }
  },
  computed: {
    accountStore() : AccountStore {
      return getModule(AccountStore, this.$store) as AccountStore
    },
    chatStore() : ChatStore {
      return getModule(ChatStore, this.$store) as ChatStore
    },

    showIconColor(): string {

      return this.show ? "accent" : "primary"
    },
    unreadCount(): number {
      const chatRead = this.chatRead
      if(chatRead) {
        return this.logs.filter((e:any) => e.createdAt > chatRead.timestamp).length
      }
      return 0
    }
  }
})
</script>
