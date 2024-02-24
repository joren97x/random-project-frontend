<script setup>

    import { useTodoStore } from "src/stores/todo-store"
    defineProps({ title: String, todos: Object })
    const todoStore = useTodoStore()

</script>

<template>
    <q-card class="q-mt-lg">
        <q-card-section class="bg-primary text-center text-white">
            <div class="text-h6">{{title}}</div>
        </q-card-section>
        <q-card-section>
            <q-list separator>
                <q-item :class="[todo.completed ? 'bg-green-2' : 'bg-blue-1']" clickable v-ripple @click="todo.completed = !todo.completed" v-for="(todo, index) in todos" :key="todo.id">
                    <q-checkbox v-model="todo.completed" />
                    <q-item-section :class="{'text-line' : todo.completed}">{{ todo.title }}</q-item-section>
                    <q-item-section side>
                        {{ todo.dueTime }}
                    </q-item-section>
                    <q-item-section side>
                        <div class="row">
                            <q-btn icon="edit" color="blue" flat @click.stop="todoStore.handleEdit(todo, index)">
                                <q-tooltip class="text-caption">
                                    Edit
                                </q-tooltip>
                            </q-btn>
                            <q-btn icon="delete" color="red" flat @click.stop="todoStore.handleDelete(todo, index)">
                                <q-tooltip class="text-caption">
                                    Delete
                                </q-tooltip>
                            </q-btn>
                        </div>
                    </q-item-section>
                </q-item>
                <q-item class="text-center" v-if="todos.length === 0">
                    <q-item-section>
                        No todos found
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>

<style scoped>

    .text-line {
        text-decoration: line-through;
    }

</style>
