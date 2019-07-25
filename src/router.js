import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import parcelStorage from './views/ParcelStorage'
import appointment from './views/Appointment'
import table from './views/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/table', name: 'table', component:Table },
        { path: '/parcelStorage ', name: 'parcelStorage', component: ParcelStorage },
        { path: '/appointment', name: 'appointment', component: Appointment }
      ],
      redirect: '/table'
    }
  ]
})