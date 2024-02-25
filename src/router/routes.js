
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('src/pages/authenticated/IndexPage.vue') },
        ]
    },
    {
        path: '/about',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/AboutPage.vue') },
        ]
    },
    {
        path: '/todo',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('src/pages/authenticated/TodoPage.vue') }
        ]
    },
    {
        path: '/settings',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('src/pages/authenticated/SettingsPage.vue') }
        ]
    },
    {
        path: '/login',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('pages/auth/LoginPage.vue') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
