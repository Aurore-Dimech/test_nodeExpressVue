import { createRouter, createWebHistory } from 'vue-router'
import Index from "../views/Index.vue"
import Create from "../views/Create.vue"
import Edit from "../views/Edit.vue"
import SingleAsso from "../views/SingleAsso.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: Index,
    },
    {
      name: 'Create',
      path: '/create',
      component: Create,
    },
    {
      name: 'Edit',
      path: '/edit/:id',
      component: Edit,
    },
    {
      name: 'SingleAsso',
      path: '/association/:id',
      component: SingleAsso,
    },
  ]
})

export default router
