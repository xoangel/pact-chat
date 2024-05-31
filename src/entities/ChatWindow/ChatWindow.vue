<script setup lang="ts">
import { computed, Ref } from 'vue'
import { useChatStore } from '../../helpers/stores/useChatStore';
import NoMessages from "./UI/NoMessages.vue";
import Message from '../../UI/Message.vue';
import ChatHeader from '../../widgets/ChatHeader/ChatHeader.vue';

const chatStore = useChatStore();
const selectedChat = computed(()=>chatStore.selectedChat);

const user = computed(()=>selectedChat.value?.chat_with);
const messageList = computed(()=>selectedChat.value ? chatStore.getChatById(selectedChat.value.id)?.messageList : [])

</script>

<template>
<div class="chat-window">
    <ChatHeader v-if="selectedChat" />
    <div class="chat-window__message-list">
        <Message v-for="message in messageList" :message="message" />
    </div>
    <NoMessages v-if="selectedChat && messageList?.length==0" :name="user?.fullName()" />
</div>
</template>

<style scoped lang="scss">
@import "./ChatWindow.scss";
</style>