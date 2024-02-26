
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { 
                path: '',
                component: () => import('src/pages/authenticated/IndexPage.vue')
            },
            { 
                path: '/about', 
                component: () => import('pages/AboutPage.vue')
            },
            { 
                path: '/todo', 
                component: () => import('src/pages/authenticated/TodoPage.vue')
            },
            { 
                path: '/chat', 
                component: () => import('src/pages/authenticated/ChatPage.vue')
            },
            {
                path: '/group-chat',
                component: () => import('src/pages/authenticated/GroupChatPage.vue')
            },
            { 
                path: '/settings', 
                component: () => import('src/pages/authenticated/SettingsPage.vue')
            }
        ],
        meta: { requiresAuth: true }
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
