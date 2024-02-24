import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                id: 1,
                title: 'Drink water',
                completed: true,
                dueTime: '06:00'
            },
            {
                id: 2,
                title: 'Eat bread',
                completed: false,
                dueTime: '11:00'
            },
            {
                id: 3,
                title: 'Stare at the ceiling',
                completed: false,
                dueTime: '11:00'
            },
            {
                id: 4,
                title: 'WATCH K-DRAMA',
                completed: false,
                dueTime: '11:00'
            }
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
            this.todos.push({...this.todoForm})
            this.resetForm()
            this.addDialog = false
        },
        deleteTodo() {
            this.todos = this.todos.filter(todo => todo.id !== this.selectedTodo.id)
        },
        updateTodo() {
            const todoIndex = this.todos.findIndex(todo => todo.id === this.todoForm.id)
            this.todos[todoIndex] = {...this.todoForm}
        },
        resetForm() {
            this.todoForm.id = null
            this.todoForm.title = null
            this.todoForm.dueTime = null
            this.todoForm.completed = false
        },
        handleDelete(todo) {
            this.selectedTodo = todo
            this.deleteDialog = true
        },
        handleEdit(todo) {
            this.todoForm = {...todo}
            this.editDialog = true
        },
        closeDialog() {
            this.editDialog = false
            this.deleteDialog = false
        }
    },
})
