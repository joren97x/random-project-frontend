import { defineStore } from "pinia"
import { api } from "src/boot/axios"
import { useAuthStore } from "./auth-store"

const authStore = useAuthStore()

export const useGroupchatStore = defineStore('groupchat', {
    state: () => ({
        messages: null,
        message: '',
        sendMessageBtn: false
    }),
    actions: {
        async getMessages() {
            try {
                await api.get('/group-chat').then((response) => {
                    this.messages = response.data
                })
            }
            catch(error) {
                console.error(error)
            }
        },
        async sendMessage() {
            this.sendMessageBtn = true
            try {
                await api.post('/group-chat', {
                    user_id: authStore.auth.id,
                    message: this.message
                }).then((res) => {
                    this.message = ''
                    this.getMessages()
                })
                this.sendMessageBtn = false
            }
            catch(error) {
                console.error(error)
                this.sendMessageBtn = false
            }
        }
    },
    getters: {

    }
})