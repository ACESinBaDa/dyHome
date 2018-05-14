<template>
  <div class="navLine">
    <div class="nums">
      <h4>{{ navLine[$route.name].index }}/04</h4>
    </div>
    <ul class="lines">
      <li @click="goWhere(index)" :class="{'long': (index+2)%3===0, 'active': navLine[$route.name].id==index}" v-for="index in 10" :key="index">
        <span></span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import { NavLine } from '../../assets/js/common'
export default {
  name: 'navLine',
  data () {
    return {
      navLine: NavLine
    }
  },
  methods: {
    goWhere (index) {
      switch (index) {
        case 1:
          this.$router.push({ name: 'newRetail' })
          break
        case 4:
          this.$router.push({ name: 'about' })
          break
        case 7:
          this.$router.push({ name: 'attitude' })
          break
        case 10:
          this.$router.push({ name: 'joinUs' })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.navLine
  position relative
  z-index 3
  display flex
  justify-content flex-end
  .nums
    margin-right 25px
    h4
      position relative
      font-size 32px
      color #ffffff
      line-height 45px
      font-weight bold
      &:after
        content ''
        position absolute
        bottom -20px
        left -50px
        width 80px
        height 4px
        background #ffffff
  .lines
    width 30px
    li
      line-height 16px
      cursor pointer
      text-align right
      width 24px
      span
        display inline-block
        height 1px
        width 10px
        background rgba(255, 255, 255, 0.4)
        transition all 0.3s
    .long
      span
        width 15px
      &:hover
        span
          width 24px
          background rgba(255, 255, 255, 1)
    .active
      span
        width 24px
        background rgba(255, 255, 255, 1)
</style>
