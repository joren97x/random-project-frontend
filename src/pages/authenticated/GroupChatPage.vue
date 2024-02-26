<script setup>

    import { ref } from 'vue'

    const text = ref('')

</script>

<template>
    <q-card class="q-ma-md">
        <q-toolbar class="bg-green-2 glossy">
            <q-avatar color="primary" text-color="white">GC</q-avatar>
            <q-toolbar-title>
                Group chat
                <span class="text-caption text-negative">Most of the buttons doesnt work</span>
            </q-toolbar-title>
            <q-btn icon="call" flat round>
                <q-tooltip>
                    Start a voice call
                </q-tooltip>
            </q-btn>
            <q-btn icon="video_call" flat round>
                <q-tooltip>
                    Start a video call
                </q-tooltip>
            </q-btn>
            <q-btn icon="more_horiz" flat round>
                <q-tooltip>
                    Conversation information
                </q-tooltip>
            </q-btn>
        </q-toolbar>

        <q-scroll-area style="height: 72vh; max-width: 100vw;" class="q-px-lg q-py-sm">
            <q-chat-message bg-color="primary" stamp="4 hours ago" name="Me" :text="['Hello mga ferson']" sent></q-chat-message>
            <q-chat-message bg-color="secondary" stamp="3 hours ago" name="Brent Faiyaz" :text="[`boom shi boom imo lobot lagom`]"/>
            <q-chat-message bg-color="secondary" stamp="3 hours ago" name="Daniel Caesar" :text="['🥺🥀']"></q-chat-message>
            <q-chat-message bg-color="secondary" stamp="2 hours ago" name="Daniel Caesar" :text="['Daniel Caesar unsint a message.', 'Daniel Caesar unsint a message.']"></q-chat-message>
            <q-chat-message bg-color="primary" sent name="Me" size="9" :text="[`imagine nasa elevator ka habang nakikinig sa new jeans tapos may katabi kang babae tapos sinabi na
i love new jeans tapos sabi mo what?? tapos sabi niya i said, I love new jeans tapos bigla siyang kumanta im super shy super shy but wait a minute while i make u mine make u mine ackkkkkk❤️🐻`, 'what is bro yappin about']" stamp="52 minutes ago"/>
            <q-chat-message bg-color="secondary" stamp="40 minutes ago" name="Daniel Caesar" :text="['Ooohhh you got powerss, superpowerss']"></q-chat-message>
        </q-scroll-area>

        <q-card-actions align="left">
            <q-input filled class="" style="width: 100%;" dense v-model="text" autogrow label="Aa">
                <template v-slot:before>
                    <q-btn size="md" round icon="add_circle" flat color="blue">
                        <q-tooltip anchor="top middle" self="center middle">
                            Open more actions
                        </q-tooltip>
                    </q-btn>
                    <q-btn size="md" round icon="image" flat color="blue">
                        <q-tooltip anchor="top middle" self="center middle">
                            Attach a file
                        </q-tooltip>
                    </q-btn>
                    <q-btn size="md" round icon="gif_box" flat color="blue">
                        <q-tooltip anchor="top middle" self="center middle">
                            Choose a gif
                        </q-tooltip>
                    </q-btn>
                </template>
                <template v-slot:after>
                    <q-btn icon="send" round size="md" flat color="blue">
                        <q-tooltip anchor="top middle" self="center middle">
                            Press enter to send a message
                        </q-tooltip>
                    </q-btn>
                </template>
                <template v-slot:append>
                    <q-btn icon="mood" round size="md" flat color="blue">
                        <q-tooltip anchor="top middle" self="center middle">
                            Choose an emoji
                        </q-tooltip>
                    </q-btn>
                </template>
            </q-input>
        </q-card-actions>
    </q-card>
</template>