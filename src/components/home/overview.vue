<template>
  <div class="overview">
    <!-- <scroll-font :textArr="textArr"></scroll-font> -->
  </div>
</template>
<script type="text/ecmascript-6">
import ScrollFont from '../base/scrollFont'
export default {
  name: 'overview',
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
  },
  methods: {
    scroll (e) {
      if (e.wheelDeltaY < 0) {
        this.$router.push({ name: 'newRetail' })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.overview
  width 100%
  height 100%
  display flex
  flex-direction column
  align-items flex-start
  // align-content flex-start
  justify-content center
  color #ffffff
</style>
