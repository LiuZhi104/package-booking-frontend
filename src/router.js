import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import parcelStorage from './views/ParcelStorage'
import appointment from './views/Appointment'
import tableContent from './views/TableContent'

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
        { path: '/tableContent', name: 'tableContent', component: tableContent },
        { path: '/parcelStorage ', name: 'parcelStorage', component: parcelStorage },
        { path: '/appointment', name: 'appointment', component: appointment }
      ],
      redirect: '/tableContent'
    }
  ]  
})