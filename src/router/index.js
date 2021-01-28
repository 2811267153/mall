import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../veiws/Home/home')
const detail = () => import('../veiws/detail/detail')

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
     path: '/home', 
     component: Home
    },
    {
      path: '/detail/:iid',
      component: detail
    }
  ],
  mode:'history'
})
