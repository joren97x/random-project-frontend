<script setup>

    import { ref, reactive, onMounted } from 'vue'
    import { api } from 'src/boot/axios'
    import { useAuthStore } from '../../stores/auth-store.js'

    const authStore = useAuthStore()
    const tab = ref('login')
    const submitLoading = ref(false)
    const loginForm = reactive({
        email: null,
        password: null
    })

    const registerForm = reactive({
        email: null,
        name: null,
        password: null
    })

    onMounted(async () => {
        authStore.fetchAuth()
    })

    const submitLoginForm = async () => {
        submitLoading.value = true
        await authStore.login(loginForm)
        submitLoading.value = false
        authStore.fetchAuth()

    }

    const submitRegisterForm = () => {
        alert('register the user bruh')
    }

</script>


<template>
    <q-page class="q-ma-xl">
        {{ authStore.getAuth }}
        <q-card>
            <q-tabs v-model="tab" active-bg-color="primary" align="justify" narrow-indicator>
                <q-tab name="login" label="Login" />
                <q-tab name="register" label="Register" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login">
                    <div class="row">
                        <div class="col q-mr-xl">
                            <div class="text-h6 q-mb-sm">Login to continue</div>
                            <q-form @submit="submitLoginForm">
                                <q-input
                                    filled
                                    v-model="loginForm.email"
                                    label="Email"
                                    lazy-rules
                                    :error-message="authStore.error?.message"
                                    :error="authStore.error?.message ? true : false"
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />

                                <q-input
                                    filled
                                    type="password"
                                    v-model="loginForm.password"
                                    label="Password"
                                    lazy-rules
                                    :rules="[
                                    val => val !== null && val !== '' || 'Please type your password',
                                    val => val.length > 3 || 'Please type a strong password'
                                    ]"
                                />

                                <div align="end" class="row">
                                    <div class="col">
                                        <q-btn label="Submit" type="submit" :loading="submitLoading" color="primary"/>
                                    </div>
                                </div>
                            </q-form>
                        </div>
                        <div class="col">
                            <q-card class="flex flex-center" flat>
                                <img
                                    class="q-ma-xl"
                                    alt="Quasar logo"
                                    src="~assets/quasar-logo-vertical.svg"
                                    style="width: 200px; height: 200px"
                                >
                            </q-card>
                        </div>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="register">
                    <div class="row">
                        <div class="col">
                            <q-card class="flex flex-center" flat>
                                <img
                                    class="q-ma-xl"
                                    alt="Quasar logo"
                                    src="~assets/quasar-logo-vertical.svg"
                                    style="width: 200px; height: 200px"
                                >
                            </q-card>
                        </div>
                        <div class="col">
                            <div class="text-h6 q-mb-sm">Register account</div>
                            <q-form @submit="submitRegisterForm">
                                <q-input
                                    filled
                                    v-model="registerForm.email"
                                    label="Email"
                                    lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />

                                <q-input
                                    filled
                                    v-model="registerForm.name"
                                    label="Name"
                                    lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please input your name bruh']"
                                />

                                <q-input
                                    filled
                                    type="password"
                                    v-model="registerForm.password"
                                    label="Password"
                                    lazy-rules
                                    :rules="[
                                    val => val !== null && val !== '' || 'Please type your password',
                                    val => val.length > 3 || 'Please type a strong password'
                                    ]"
                                />

                                <div align="end" class="row">
                                    <div class="col">
                                        <q-btn label="Submit" type="submit" color="primary"/>
                                    </div>
                                </div>
                            </q-form>
                        </div>
                        
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </q-page>
</template>