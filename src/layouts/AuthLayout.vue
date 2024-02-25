<script setup>


</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>

                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
                    <q-btn to="/">Home</q-btn>
                    <q-btn to="/login">Login</q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>

    </q-layout>
</template>