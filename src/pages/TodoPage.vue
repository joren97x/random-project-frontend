<script setup>

    import { useTodoStore } from 'src/stores/todo-store.js'
    import TodoCard from 'src/components/TodoCard.vue'
    import {ref} from 'vue'
    const todoStore = useTodoStore()

    const deleteTodoDialog = ref(false)
    const addTaskDialog = ref(false)
    const selectedTodo = ref(null)
    const editTodoDialog = ref(false)

    function handleDelete(todo, index) {
        selectedTodo.value = todo
        deleteTodoDialog.value = true
    }

    function handleUpdate(todo, index) {
        selectedTodo.value = todo
        editTodoDialog.value = true
    }

</script>

<template>
    <q-page padding>
        <div class="absolute-bottom text-center q-mb-xl">
            <q-btn icon="add" @click="addTaskDialog = true" round size="lg" color="primary">
                <q-tooltip class="text-caption">
                    Add new todo
                </q-tooltip>
            </q-btn>
        </div>

        <TodoCard :title="'Todos'" :todos="todoStore.getTodos" /> 
        <TodoCard :title="'Completed'" :todos="todoStore.getCompleted" /> 

        <q-dialog v-model="deleteTodoDialog" transition-show="scale" transition-hide="scale">
            <q-card class="bg-red text-white" style="width: 80vw">
                <q-card-section>
                    <div class="text-h6">Delete task</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Are you sure you want to delete <strong>{{ selectedTodo.title }}</strong>?
                </q-card-section>

                <q-card-actions align="right" class="bg-white">
                    <q-btn flat label="Cancel" color="black" v-close-popup />
                    <q-btn flat label="Delete" color="red" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="editTodoDialog" transition-show="scale" transition-hide="scale">
            <q-card style="width: 80vw;">
                <q-toolbar>
                    <q-avatar icon="edit_note" font-size="40px" square></q-avatar>
                    <q-toolbar-title>
                        <span class="text-weight-bold">Edit task</span> 
                    </q-toolbar-title>
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <q-input filled  label="Title"></q-input>
                    <q-input class="q-mt-md" label="Due time" v-model="time" filled type="time" hint="Native time" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn square color="secondary" no-caps v-close-popup>Cancel</q-btn>
                    <q-btn square color="primary" no-caps>Add</q-btn>
                </q-card-actions>

            </q-card>
        </q-dialog>

        <q-dialog v-model="addTaskDialog">
            <q-card style="width: 80vw;">
                <q-toolbar>
                    <q-avatar icon="note_add" font-size="40px" square></q-avatar>
                    <q-toolbar-title>
                        <span class="text-weight-bold">Add task</span> 
                    </q-toolbar-title>
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <q-input filled  label="Title"></q-input>
                    <q-input class="q-mt-md" label="Due time" v-model="time" filled type="time" hint="Native time" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn square color="secondary" no-caps v-close-popup>Cancel</q-btn>
                    <q-btn square color="primary" no-caps>Add</q-btn>
                </q-card-actions>

            </q-card>
        </q-dialog>

    </q-page>
</template>

<style scoped>

    .text-line {
        text-decoration: line-through;
    }

</style>
