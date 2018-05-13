<template>
  <div class="overview" @mousewheel="scroll">
    <scroll-font :textArr="textArr"></scroll-font>
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
      console.log(e)
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
  align-content center
  justify-content center
  color #ffffff
</style>
