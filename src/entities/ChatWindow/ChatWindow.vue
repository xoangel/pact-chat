<script setup lang="ts">
import { ref, computed } from 'vue'
import { useChatStore } from '../../helpers/stores/useChatStore';
import NoMessages from "./UI/NoMessages.vue";
import Message from '../../UI/Message.vue';
import ChatHeader from '../../widgets/ChatHeader/ChatHeader.vue';
import ChatInput from '../../widgets/ChatInput/ChatInput.vue';

const chatStore = useChatStore();
const selectedChat = computed(()=>chatStore.selectedChat);

const user = computed(()=>selectedChat.value?.chat_with);
const query = ref('');

const messageList = computed(() => 
    selectedChat.value ? chatStore.getChatById(selectedChat.value.id)?.messageList : []
);

const filteredMessages = computed(() => {
    if (!query.value) return messageList.value;
    return messageList.value?.filter(item => item.text.toLowerCase().includes(query.value.toLowerCase()));
});

const searchMessages = (newQuery: string) => {
    query.value = newQuery;
};

</script>

<template>
<div class="chat-window">
    <ChatHeader @search-messages="searchMessages" v-if="selectedChat" />
    <div class="chat-window__message-list">
        <Message v-for="message in filteredMessages" :key="message.time.toLocaleString()" :message="message" />
    </div>
    <NoMessages v-if="selectedChat && messageList?.length==0" :name="user?.fullName()" />
    <ChatInput />
</div>
</template>

<style scoped lang="scss">
@import "./ChatWindow.scss";
</style>