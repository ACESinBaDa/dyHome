<template>
  <div class="navView">
    <div class="title">
      <scroll-font :textArr="textArr"></scroll-font>
    </div>
    <div class="rect">
      <img src="" alt="">
      <ul class="list">
        <li>
          <i></i>
          <span>
            <em>新零售</em>
            <br />
            <em>补充性小字文案</em>
          </span>
        </li>
        <li>
          <i></i>
          <span>
            <em>人工智能</em>
            <br />
            <em>补充性小字文案</em>
          </span>
        </li>
        <li>
          <i></i>
          <span>
            <em>电商服务</em>
            <br />
            <em>补充性小字文案</em>
          </span>
        </li>
      </ul>
    </div>
    <div class="tabs">
      <div class="nums">
        <h4>01/04</h4>
      </div>
      <ul class="lines">
        <li :class="{'long': (index+2)%3===0}" v-for="index in 10" :key="index">
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import ScrollFont from '../base/scrollFont'
export default {
  name: 'navView',
  components: {
    ScrollFont
  },
  data () {
    return {
      textArr: [
        '数据科技智能让生活更美好',
        'Data technology',
        'intelligence makes life better'
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.navView
  position relative
  width 100%
  height 100%
  align-items center
  display flex
  justify-content space-between
  .title
    position relative
    z-index 3
  .rect
    position absolute
    z-index 2
    left 0
    right 0
    margin 0 auto
    width 860px
    height 444px
    background pink
    img
      position absolute
      width 100%
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
  .tabs
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
