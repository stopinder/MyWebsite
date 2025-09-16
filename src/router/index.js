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
    // Use BASE_URL so it works under subpaths too (e.g., Vercel previews)
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: async (to, from, savedPosition) => {
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
        const behavior = prefersReduced ? 'auto' : 'smooth'

        if (savedPosition) {
            return { ...savedPosition, behavior }
        }

        const offset = getHeaderOffset()

        if (to.hash) {
            // allow DOM to render the target after route change
            await new Promise((r) => setTimeout(r, 0))
            const selector = decodeURIComponent(to.hash)
            const target = document.querySelector(selector)
            if (target) {
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset
                return { left: 0, top, behavior }
            }
        }

        return { left: 0, top: 0, behavior }
    },
})

export default router
