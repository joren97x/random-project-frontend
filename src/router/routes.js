
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            { path: '2', component: () => import('pages/Index2Page.vue') }
        ]
    },
    {
        path: '/about',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/AboutPage.vue') },
            { path: 'wow', component: () => import('pages/WowPage.vue') },
            { path: 'wtf', component: () => import('pages/WtfPage.vue') }
        ]
    },
    {
        path: '/todo',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/TodoPage.vue') }
        ]
    },
    {
        path: '/settings',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/SettingsPage.vue') }
        ]
    },
    {
        path: '/login',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('pages/LoginPage.vue') }
        ]
    },
    {
        path: '/register',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('pages/RegisterPage.vue') }
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
