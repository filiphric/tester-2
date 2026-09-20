import { defineRoutesSetup } from '@slidev/types'

export default defineRoutesSetup(routes => [
  ...routes,
  { path: '/live', name: 'live', component: () => import('../pages/live.vue') },
  { path: '/sources', name: 'sources', component: () => import('../pages/sources.vue') },
])
