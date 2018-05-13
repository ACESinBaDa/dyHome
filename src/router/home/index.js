import Main from '../main/index'

const index = () =>
  import(/* webpackChunkName: "index" */ '@/components/home/index')

const home = [{
  path: '/',
  component: index,
  name: 'index',
  meta: {
    title: '大院科技'
  },
  redirect: {
    name: 'overview'
  },
  children: [...Main]
}]

export default home
