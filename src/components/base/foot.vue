<template>
  <div class="foot">
    <ul class="info">
      <li v-for="(item, index) in infoArr" :key="index" :class="{'isLink': item.link}">
        <i :class="[item.icon]"></i>
        <span>{{ item.cont }}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'foot',
  data () {
    return {
      infoArr: [
        {
          icon: 'icon',
          cont: '88693780'
        },
        {
          icon: 'icon',
          cont: 'wangchang@xinglongdayuan.com'
        },
        {
          icon: 'icon',
          cont: '杭州市 余杭区 乐富海邦园 K座(11幢)702'
        },
        {
          icon: 'icon',
          link: 'dyDesign',
          cont: 'DY Densign'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.foot
  .info
    display flex
    justify-content space-around
    height 100px
    line-height 100px
    padding 0 50px
    li
      font-size 12px
      color #ffffff
      opacity 0.8
      i
        margin-right 12px
    .isLink
      cursor pointer
</style>
