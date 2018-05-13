<template>
  <div class="mouse">
    <div class="round">
      <span class="long"></span>
      <span class="short"></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'mouse',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mouse
  width 100%
  display flex
  justify-content center
  .round
    position relative
    width 18px
    height 26px
    border 1px solid #ffffff
    border-radius 13px
    &:before
      content ''
      position absolute
      top 7px
      left 7px
      width 4px
      height 4px
      background #ffffff
      border-radius 50%
    span
      position absolute
      top 35px
      width 1px
      background rgba(255, 255, 255, 0.6)
      overflow hidden
      &:before
        content ''
        position absolute
        width 100%
        height 100%
        background #ffffff
.long
  left 5px
  height 29px
  &:before
    animation cross 2.4s cubic-bezier(0.86, 0, 0.07, 1) infinite
.short
  left 12px
  height 16px
  &:before
    animation cross 2.4s 0.2s cubic-bezier(0.86, 0, 0.07, 1) infinite
@keyframes cross
  0%
    transform translateY(-100%)
  30%
    transform translateY(0)
  70%
    transform translateY(0)
  100%
    transform translateY(100%)
</style>
