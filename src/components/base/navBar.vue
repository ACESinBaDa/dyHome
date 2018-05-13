<template>
  <div class="navBar">
    <div class="logo">
      <img class="dy" src="" alt="">
    </div>
    <ul class="navTab">
      <li v-for="(item, index) in navArr" :key="index" @click="goWhere(item.route)" :class="{'active': $router.name==item.route}">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'navBar',
  data () {
    return {
      navArr: [
        {
          name: '电商与新零售',
          route: 'newRetail'
        },
        {
          name: '关于大院',
          route: 'about'
        },
        {
          name: '大院态度',
          route: 'attitude'
        },
        {
          name: '加入大院',
          route: 'joinUs'
        }
      ]
    }
  },
  methods: {
    goWhere (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/index'
.navBar
  height 100px
  line-height 100px
  padding 0 45px
  display flex
  justify-content space-between
  .logo
    align-self center
    .dy
      width 150px
      height 50px
      background orange
  .navTab
    display flex
    li
      position relative
      margin-left 50px
      cursor pointer
      font-size 14px
      color #ffffff
      font-family ArialHebrew
      &:hover
        &:after
          width 40px
          transition all 0.3s ease-in
      &:after
        content ''
        position absolute
        width 0
        height 4px
        border-radius 2px
        background $color
        right 0
        bottom 20px
        transition all 0.3s ease-out
    .active
      &:after
        width 40px
</style>
