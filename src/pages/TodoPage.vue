<script setup>

    import { useTodoStore } from 'src/stores/todo-store.js'
    const todoStore = useTodoStore()

</script>

<template>
    <q-page padding>
        <h4>Todo  pageeeyyy</h4>
        <q-list bordered separator>
            <q-item :class="[todo.completed ? 'bg-green-2' : 'bg-orange-1']" clickable v-ripple @click="todo.completed = !todo.completed" v-for="todo in todoStore.todos" :key="todo.id">
                <q-checkbox v-model="todo.completed" />
                <q-item-section>{{ todo.title }}</q-item-section>
                <q-item-section side>
                    {{ todo.dueTime }}
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<style scoped>

    .text-line {
        text-decoration: line-through;
    }

</style>
