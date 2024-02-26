<script setup>

    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '../../stores/auth-store.js'

    const router = useRouter()
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

    const submitLoginForm = async () => {
        submitLoading.value = true
        await authStore.login(loginForm)
        submitLoading.value = false
        router.push('/')
    }

    const submitRegisterForm = async () => {
        submitLoading.value = true
        await authStore.register(registerForm)
        submitLoading.value = false
        router.push('/')
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
                            <q-banner dense class="bg-red-5 q-mb-sm" v-if="authStore.loginError?.server">
                                <template v-slot:avatar>
                                    <q-icon name="error" />
                                </template>
                                    {{ authStore.loginError?.server }}
                            </q-banner>
                            <q-form @submit="submitLoginForm">
                                <q-input
                                    filled
                                    v-model="loginForm.email"
                                    label="Email"
                                    lazy-rules
                                    :error-message="authStore.loginError?.message"
                                    :error="authStore.loginError?.message ? true : false"
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
                            <q-banner dense class="bg-red-5 q-mb-sm" v-if="authStore.registerError?.server">
                                <template v-slot:avatar>
                                    <q-icon name="error" />
                                </template>
                                    {{ authStore.registerError?.server }}
                            </q-banner>
                            <q-form @submit="submitRegisterForm">
                                <q-input
                                    filled
                                    v-model="registerForm.email"
                                    label="Email"
                                    lazy-rules
                                    :error-message="authStore.registerError?.email"
                                    :error="authStore.registerError?.email ? true : false"
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                                />

                                <q-input
                                    filled
                                    v-model="registerForm.name"
                                    label="Name"
                                    lazy-rules
                                    :error-message="authStore.registerError?.name"
                                    :error="authStore.registerError?.name ? true : false"
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
                                        <q-btn label="Submit" type="submit" color="primary" :loading="submitLoading" />
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