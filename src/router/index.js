import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../veiws/Home/home')

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
     path: '/home', 
     component: Home
    }
  ],
  mode:'history'
})
