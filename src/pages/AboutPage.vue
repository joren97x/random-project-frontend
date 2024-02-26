<script setup>

    import { ref } from 'vue'

    const check1 = ref(false)
    const check2 = ref(true)
    const check3 = ref(false)
    const check4 = ref(false)

</script>

<template>
    <div>
        <h1>About pageeeyyy</h1>
        <q-list>
            <q-item-label header>Todos</q-item-label>

            <q-item tag="label" v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="check1" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        Add more features or projects
                    </q-item-label>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="check2" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Connect backend and frontend</q-item-label>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="check4" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Buhata ang login ug register</q-item-label>
                </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
                <q-item-section side top>
                    <q-checkbox v-model="check3" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>
                        Watch see you in my 19th life episode 2
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        
    </div>
</template>