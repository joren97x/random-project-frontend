<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title> Random App </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header>
                    Essential Links
                </q-item-label>
                <EssentialLink v-for="link in linksList" :key="link.title" :link="link"/>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>

    import { ref } from 'vue'
    import EssentialLink from 'src/components/EssentialLink.vue'

    const leftDrawerOpen = ref(true)
    const linksList = 
    [
        {
            title: 'Todo',
            icon: 'list',
            link: '/todo'
        },
        {
            title: 'Settings',
            icon: 'settings',
            link: '/settings'
        }
    ]

</script>
