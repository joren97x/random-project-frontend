import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                id: 1,
                title: 'Drink water',
                completed: false,
                dueTime: '6:00'
            },
            {
                id: 2,
                title: 'Eat bread',
                completed: false,
                dueTime: '11:00'
            },
        ],
        selectedTodo: null,
        editDialog: false,
        deleteDialog: false,
        addDialog: false,
        todoForm: {
            id: null,
            title: null,
            completed: false,
            dueTime: null
        }
    }),
    getters: {
        getTodos: (state) => {
            return state.todos.filter(todo => todo.completed === false)
        },
        getCompleted: (state) => {
            return state.todos.filter(todo => todo.completed === true)
        }
    },
    actions: {
        insertTodo() {
            this.todoForm.id = this.todos.length+1
            console.log(this.todos)
            console.log(this.todoForm)
            this.todos.push({...this.todoForm})
            console.log(this.todos)
            console.log(this.todoForm)
            this.resetForm()
            this.addDialog = false
        },
        resetForm() {
            this.todoForm.id = null
            this.todoForm.title = null
            this.todoForm.dueTime = null
            this.todoForm.completed = false
        },
        handleDelete(todo, index) {
            this.selectedTodo = todo
            this.deleteDialog = true
        },
        handleEdit(todo, index) {
            this.selectedTodo = todo
            this.editDialog = true
        },
        closeDialog() {
            this.editDialog = false
            this.deleteDialog = false
        }
    },
})
