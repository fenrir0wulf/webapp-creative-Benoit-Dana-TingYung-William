import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChapterView from '../views/ChapterView.vue'
import EndingScreen from '../views/EndingScreen.vue'
import SavesView from '../views/SavesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/chapter/:id',
        name: 'chapter',
        component: ChapterView,
    },
    {
        path: '/ending/:id',
        name: 'ending',
        component: EndingScreen,
    },
    {
        path: '/saves',
        name: 'saves',
        component: SavesView,
    }
  ],
})

export default router
