<template>
  <div class="joinUs">
    <!-- <div class="title">
      <scroll-font :textArr="textArr"></scroll-font>
    </div> -->
    <div class="rect">
      <rectBase></rectBase>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import ScrollFont from '../base/scrollFont'
import RectBase from '../base/rectBase'
export default {
  name: 'joinUs',
  components: {
    ScrollFont,
    RectBase
  },
  data () {
    return {
      textArr: [
        '关于大院',
        'About us',
        ''
      ]
    }
  },
  methods: {
    scroll (e) {
      if (e.wheelDeltaY > 0) {
        this.$router.push({ name: 'attitude' })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.joinUs
  position relative
  width 100%
  height 100%
  align-items center
  display flex
  .title
    position relative
    z-index 3
  .rect
    position absolute
    z-index 2
    left 0
    right 0
    margin 0 auto
    width 70%
    height 70%
    min-height 444px
    background pink
</style>
