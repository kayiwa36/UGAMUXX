import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Member from '../views/Member.vue'
import MemberDetails from '../views/MemberDetails.vue'
import Login from '../views/admin/Login.vue'
import Register from '../views/admin/Register.vue'
import RegisterArtist from '../views/admin/RegisterArtist.vue'
import RegisterBand from '../views/admin/RegisterBand.vue'
import RegisterClerk from '../views/admin/RegisterClerk.vue'
import RegisterLabel from '../views/admin/RegisterLabel.vue'
import Edit from '../views/admin/Edit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/member/:id',
    name: 'MemberDetails',
    component: MemberDetails
  },
  {
    path: '/admin/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin/registerartist',
    name: 'RegisterArtist',
    component: RegisterArtist
  },
  {
    path: '/admin/registerband',
    name: 'RegisterBand',
    component: RegisterBand
  },
  {
    path: '/admin/registerclerk',
    name: 'RegisterClerk',
    component: RegisterClerk
  },
  {
    path: '/admin/registerlabel',
    name: 'RegisterLabel',
    component: RegisterLabel
  },
  {
    path: '/admin/edit',
    name: 'Edit',
    component: Edit
  },
  //Catch All
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
