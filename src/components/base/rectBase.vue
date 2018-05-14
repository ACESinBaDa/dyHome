<template>
  <div class="rectBase">
    <!-- <img src="http://image.tianjimedia.com/uploadImages/2013/221/U23HO054376Q.jpg" alt=""> -->
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
</template>
<script type="text/ecmascript-6">
export default {
  name: 'rectBase',
  data () {
    return {
    }
  },
  props: {

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
  // background pink
  background url('http://image.tianjimedia.com/uploadImages/2013/221/U23HO054376Q.jpg')
  background-position center
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
</style>
