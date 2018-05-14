<template>
  <div class="home">
    <header>
      <nav-bar></nav-bar>
    </header>
    <section @mousewheel="timeOut">
      <div class="top">
        <scroll-font class="font" :textArr="textArr"></scroll-font>
        <navLine class="lines" v-if="$route.name!='overview'"></navLine>
      </div>
      <mouse class="mouse"></mouse>
      <div class="cont">
        <transition :name="slideName">
          <router-view class="move" />
        </transition>
      </div>
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
import NavLine from '../base/navLine'
export default {
  name: 'home',
  components: {
    NavBar,
    Foot,
    Mouse,
    ScrollFont,
    NavLine
  },
  data () {
    return {
      slideName: 'slide-up',
      time: '',
      textArr: [
        '数据科技智能让生活更美好',
        'Data technology',
        'intelligence makes life better'
      ]
    }
  },
  methods: {
    timeOut (e) {
      clearTimeout(this.time)
      this.time = setTimeout(this.scroll(e), 500)
    },
    scroll (e) {
      if (e.wheelDeltaY < 0) {
        this.slideName = 'slide-up'
        switch (this.$route.name) {
          case 'overview':
            this.$router.push({ name: 'newRetail' })
            break
          case 'newRetail':
            this.$router.push({ name: 'about' })
            break
          case 'about':
            this.$router.push({ name: 'attitude' })
            break
          case 'attitude':
            this.$router.push({ name: 'joinUs' })
            break
          default:
            break
        }
      } else if (e.wheelDeltaY > 0) {
        this.slideName = 'slide-down'
        switch (this.$route.name) {
          case 'newRetail':
            this.$router.push({ name: 'overview' })
            break
          case 'about':
            this.$router.push({ name: 'newRetail' })
            break
          case 'attitude':
            this.$router.push({ name: 'about' })
            break
          case 'joinUs':
            this.$router.push({ name: 'attitude' })
            break
          default:
            break
        }
      }
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
    .top
      flex 1
      display flex
      justify-content space-between
      padding 0 50px
      .font
        flex 1
        z-index 3
    .cont
      position absolute
      top 0
      bottom 0
      right 0
      left 0
      margin auto
      width 100%
      height 100%
      flex 1
      overflow hidden
    .mouse
      transform translateY(-50px)
    .lines
      position absolute
      height 200px
      right 50px
      top 0
      bottom 0
      margin auto 0
</style>
