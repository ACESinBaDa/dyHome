<template>
  <div class="scrollFont">
    <h1>{{ textArr[0] }}</h1>
    <h3>{{ textArr[1] }}</h3>
    <h3>{{ textArr[2] }}</h3>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'scrollFont',
  data () {
    return {
    }
  },
  props: {
    textArr: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/index'
.scrollFont
  color #ffffff
  display flex
  flex-direction column
  justify-content center
  h1
    position relative
    font-size 60px
    line-height 84px
    font-weight bold
    margin-bottom 32px
    &:after
      content ''
      position absolute
      left 0
      bottom -10px
      width 80px
      height 8px
      border-radius 4px
      background $color
  h3
    font-size 28px
    line-height 40px
</style>
