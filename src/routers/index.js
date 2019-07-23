import Vue from 'vue'
import Router from 'vue-router'
import movie from './Movie'
import cinema from './Cinema'
import mine from './Mine'
import admin from './Admin'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:"ilike",
  routes: [
    movie,
    cinema,
    mine,
    admin,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
})
