<template>
  <div>
    <share-network v-for="(o, i) in networks" :key="i"
      :network="o.network"
      :url="url"
      :title="title"
      :description="description"
    >
      <v-icon>{{o.icon}}</v-icon> {{o.name}}
    </share-network>
  </div>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      networks: [
        { network: "email", icon: "mdi-email", name: "Email" },
        { network: "facebook", icon: "mdi-facebook", name: "Facebook" },
        { network: "twitter", icon: "mdi-twitter", name: "twitter" },
        { network: "line", icon: "mdi-share", name: "LINE" },
      ],
      url: "https://kaku3.github.io/e1-math-plus-10/frontend/dist/",
      title: "小１からのさんすうゲーム",
      description: "小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。"
    }
  }
})
</script>
