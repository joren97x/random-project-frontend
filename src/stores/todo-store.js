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
        ]
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
        
    },
})
