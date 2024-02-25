import { defineStore } from "pinia"
import { api } from "src/boot/axios"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: null,
        loginError: {
            message: null,
            server: null
        },
        registerError: {
            email: null,
            name: null,
            server: null
        }
    }),
    getters: {
        getAuth: (state) => {
            return state.auth
        }
    },
    actions: {
        async login(credentials) {
            try {
                await api.post('/authenticate', credentials)
                .then((response) => {
                    this.auth = response.data.user
                    this.loginError = null
                })
            }
            catch(error) {
                if(error.response) {
                    this.loginError = error.response.data
                }
                else if(error.request) {
                    this.loginError.server = 'Server is not responding. Please try again later.'
                }
                else {
                    this.loginError.server = 'An unexpected error occurred. Please try again later.'
                }
            }
        },
        async register(credentials) {
            try {
                await api.post('/register', credentials)
                .then((response) => {
                    this.auth = response.data.user
                    this.registerError = null
                })
            }
            catch(error) {
                console.log(error)
                if(error.response) {
                    this.registerError.email = error.response.data.errors?.email[0]
                    // this.registerError.name = error.response.data?.errors?.name[0]
                }
                else if(error.request) {
                    this.registerError.server = 'Server is not responding. Please try again later.'
                }
                else {
                    this.registerError.server = 'An unexpected error occurred. Please try again later.'
                }
            }
        },
        async fetchAuth() {
            try {
                await api.get('/getAuth')
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            catch(error) {

            }
        }
    }
})