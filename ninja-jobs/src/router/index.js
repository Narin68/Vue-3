import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: AboutView
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/Jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
