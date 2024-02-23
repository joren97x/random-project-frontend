<script setup>

    import { ref } from 'vue'



</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>

                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
                <router-link to="/">
                    <q-btn>Home</q-btn>
                </router-link>
                <router-link to="/login">
                    <q-btn>Login</q-btn>
                </router-link>
                <router-link to="/register">
                    <q-btn>Register</q-btn>
                </router-link>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>

    </q-layout>
</template>