<template>
  <div class="rectBase" :style="'background:url(' + imgUrl + ') no-repeat;background-size:100% 100%;'">
    <ul class="list">
      <li v-for="(item, index) in info" :key="index">
        <i class="item.icon"></i>
        <span>
          <em>{{ item.tip[0] }}</em>
          <br />
          <em>{{ item.tip[1] }}</em>
        </span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import { ContArr } from '../../assets/js/common.js'
export default {
  name: 'rectBase',
  data () {
    return {
      info: []
    }
  },
  computed: {
    imgUrl () {
      let url = ''
      let routeName = this.$route.name
      url = ContArr[routeName].url
      return url
    }
  },
  created () {
    this.info = ContArr[this.$route.name].infoArr
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.rectBase
  position absolute
  width 100%
  height 100%
  z-index 2
  left 0
  right 0
  margin 0 auto
  background-size 100% 100%
  img
    position absolute
    top 0
    left 0
    right 0
    margin 0 auto
    height 100%
  .list
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    display flex
    flex-direction column
    justify-content space-around
    li
      text-align right
      padding-right 70px
      i
        display inline-block
        width 80px
        height 80px
        background orange
        font-size 80px
        color #ffffff
        vertical-align middle
        margin-right 24px
      span
        display inline-block
        vertical-align middle
        em
          font-size 14px
          color #ffffff
          line-height 40px
          display inline-block
          width 100px
</style>
