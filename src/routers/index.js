import Vue from 'vue'
import Router from 'vue-router'
import movie from './Movie'
import cinema from './Cinema'
import mine from './Mine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movie,
    cinema,
    mine,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
