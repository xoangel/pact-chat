<script setup lang="ts">
import ChatComponent from "./../../widgets/ChatComponent/ChatComponent.vue";
import { useChatStore } from "./../../helpers/stores/useChatStore";

const chatStore = useChatStore();
const chatList = chatStore.chatList; 
</script>

<template>
    <div class="chat-list">
        <ChatComponent v-for="chat in chatList" :key="chat.chat.id" :chat="chat" />
    </div>
</template>

<style scoped lang="scss">
@import "./ChatList.scss"
</style>