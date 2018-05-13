<template>
  <div class="home">
    <header>
      <nav-bar></nav-bar>
    </header>
    <section>
      <div class="cont">
        <!-- <scroll-font :textArr="textArr"></scroll-font> -->
        <router-view/>
      </div>
      <mouse class="mouse"></mouse>
    </section>
    <footer>
      <foot></foot>
    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
import ScrollFont from '../base/scrollFont'
import NavBar from '../base/navBar'
import Foot from '../base/foot'
import Mouse from '../base/mouse'
export default {
  name: 'home',
  components: {
    NavBar,
    Foot,
    Mouse,
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
.home
  position relative
  z-index 2
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content space-around
  section
    flex 1
    position relative
    display flex
    flex-direction column
    .cont
      flex 1
      padding 0 50px
    .mouse
      transform translateY(-50px)
</style>
