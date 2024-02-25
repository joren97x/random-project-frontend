import { defineStore } from "pinia"
import { api } from "src/boot/axios"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        auth: null,
        error: {
            message: null
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
                    this.error = null
                })
            }
            catch(error) {
                if(error.response) {
                    this.error = error.response.data
                }
                else if(error.request) {
                    this.error.message = 'Server is not responding. Please try again later.'
                }
                else {
                    this.error.message = 'An unexpected error occurred. Please try again later.'
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