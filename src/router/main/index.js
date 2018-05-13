const overview = () =>
  import(/* webpackChunkName: "overview" */ '@/components/home/overview')
const newRetail = () =>
  import(/* webpackChunkName: "newRetail" */ '@/components/home/newRetail')
const about = () =>
  import(/* webpackChunkName: "about" */ '@/components/home/about')
const attitude = () =>
  import(/* webpackChunkName: "attitude" */ '@/components/home/attitude')
const joinUs = () =>
  import(/* webpackChunkName: "joinUs" */ '@/components/home/joinUs')
const navView = () =>
  import(/* webpackChunkName: "navView" */ '@/components/home/navView')

const main = [{
  path: '/index',
  component: overview,
  name: 'overview',
  meta: {
    title: '大院科技'
  }
},
{
  path: '/navView',
  component: navView,
  name: 'navView',
  meta: {
    title: '大院科技'
  }
},
{
  path: '/newRetail',
  component: newRetail,
  name: 'newRetail',
  meta: {
    title: '电商与新零售'
  }
},
{
  path: '/about',
  component: about,
  name: 'about',
  meta: {
    title: '关于我们'
  }
},
{
  path: '/attitude',
  component: attitude,
  name: 'attitude',
  meta: {
    title: '大院态度'
  }
},
{
  path: '/joinUs',
  component: joinUs,
  name: 'joinUs',
  meta: {
    title: '加入大院'
  }
}
]

export default main
