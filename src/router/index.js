import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', component: Home },
]

// Measure current sticky header height (with a small gap)
const getHeaderOffset = () => {
    const el = document.querySelector('header.sticky')
    return (el?.offsetHeight ?? 72) + 8
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: async (to, from, savedPosition) => {
        if (savedPosition) return { ...savedPosition, behavior: 'smooth' }

        const offset = getHeaderOffset()

        if (to.hash) {
            // allow DOM to render the target after route change
            await new Promise((r) => setTimeout(r, 0))
            const target = document.querySelector(to.hash)
            if (target) {
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset
                return { top, behavior: 'smooth' }
            }
        }

        return { top: 0, behavior: 'smooth' }
    },
})

export default router
