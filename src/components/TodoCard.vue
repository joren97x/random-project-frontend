<script setup>

    defineProps({ title: String, todos: Object })

</script>

<template>
    <q-card>
        <q-card-section class="bg-primary text-center text-white">
            <div class="text-h6">{{title}}</div>
        </q-card-section>
        <q-card-section>
            <q-list separator>
                <q-item :class="[todo.completed ? 'bg-green-2' : 'bg-blue-1']" clickable v-ripple @click="todo.completed = !todo.completed" v-for="(todo, index) in todos" :key="todo.id">
                    <q-checkbox v-model="todo.completed" />
                    <q-item-section>{{ todo.title }}</q-item-section>
                    <q-item-section side>
                        {{ todo.dueTime }}
                    </q-item-section>
                    <q-item-section side>
                        <div class="row">
                            <q-btn icon="edit" color="blue" flat @click.stop="handleUpdate(todo, index)">
                                <q-tooltip class="text-caption">
                                    Edit
                                </q-tooltip>
                            </q-btn>
                            <q-btn icon="delete" color="red" flat @click.stop="handleDelete(todo, index)">
                                <q-tooltip class="text-caption">
                                    Delete
                                </q-tooltip>
                            </q-btn>
                        </div>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>