<script setup>

    import { useTodoStore } from 'src/stores/todo-store.js'
    import TodoCard from 'src/components/TodoCard.vue'
    import {useQuasar} from 'quasar'

    const todoStore = useTodoStore()
    const $q = useQuasar()

    function addTodo() {
        todoStore.insertTodo()
        $q.notify('Todo added')
    }

    function deleteTodo() {
        todoStore.deleteTodo()
        $q.notify('Todo deleted')
    }

    function updateTodo() {
        todoStore.updateTodo()
        $q.notify('Todo updated')
    }

</script>

<template>
    <q-page padding class="bg-grey-3">
        <TodoCard :title="'Todos'" :todos="todoStore.getTodos" /> 
        <TodoCard :title="'Completed'" :todos="todoStore.getCompleted" /> 

        <div class="fixed-bottom text-center q-mb-xl">
            <q-btn icon="add" @click="todoStore.addDialog = true" round size="lg" color="primary">
                <q-tooltip class="text-caption">
                    Add new todo
                </q-tooltip>
            </q-btn>
        </div>

        <q-dialog v-model="todoStore.deleteDialog" transition-show="scale" transition-hide="scale">
            <q-card class="bg-red text-white" style="width: 80vw">
                <q-card-section>
                    <div class="text-h6">Delete task</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Are you sure you want to delete <strong>{{ todoStore.selectedTodo.title }}</strong>?
                </q-card-section>

                <q-card-actions align="right" class="bg-white">
                    <q-btn flat label="Cancel" color="black" v-close-popup />
                    <q-btn flat label="Delete" color="red" @click="deleteTodo"  v-close-popup/>
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="todoStore.editDialog" transition-show="scale" transition-hide="scale">
            <q-card style="width: 80vw;">
                <q-toolbar>
                    <q-avatar icon="edit_note" font-size="40px" square></q-avatar>
                    <q-toolbar-title>
                        <span class="text-weight-bold">Edit task</span> 
                    </q-toolbar-title>
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                    <q-input filled v-model="todoStore.todoForm.title" label="Title"></q-input>
                    <q-input class="q-mt-md" label="Due time" v-model="todoStore.todoForm.dueTime" filled type="time" hint="Native time" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn square color="secondary" no-caps v-close-popup>Cancel</q-btn>
                    <q-btn square color="primary" no-caps @click="updateTodo" v-close-popup>Update</q-btn>
                </q-card-actions>

            </q-card>
        </q-dialog>

        <q-dialog v-model="todoStore.addDialog">
            <q-card style="width: 80vw;">
                <q-toolbar>
                    <q-avatar icon="note_add" font-size="40px" square></q-avatar>
                    <q-toolbar-title>
                        <span class="text-weight-bold">Add task</span>  
                    </q-toolbar-title>
                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>
                <q-card-section>
                    <q-input filled  label="Title" v-model="todoStore.todoForm.title"></q-input>
                    <q-input class="q-mt-md" label="Due time" v-model="todoStore.todoForm.dueTime" filled type="time" hint="Native time" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn square color="secondary" no-caps v-close-popup>Cancel</q-btn>
                    <q-btn square color="primary" no-caps @click="addTodo()">Add</q-btn>
                </q-card-actions>

            </q-card>
        </q-dialog>

    </q-page>
</template>

