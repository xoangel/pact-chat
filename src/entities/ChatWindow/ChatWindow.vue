<script setup lang="ts">
import { ref, computed } from 'vue'
import { useChatStore } from '../../helpers/stores/useChatStore';
import NoMessages from "./UI/NoMessages.vue";
import MessageCard from '../../UI/MessageCard.vue';
import ChatHeader from '../../widgets/ChatHeader/ChatHeader.vue';
import ChatInput from '../../widgets/ChatInput/ChatInput.vue';
import Message from '../../helpers/models/Message';

const chatStore = useChatStore();
const selectedChat = computed(()=>chatStore.selectedChat);

const user = computed(()=>selectedChat.value?.chat_with);
const query = ref('');
const sentIncoming = ref(false);

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

const sendMessage = (message: String) => {
    if(chatStore.selectedChat && message){
        const chat = chatStore.getChatById(chatStore.selectedChat.id);
        chat?.messageList.push(new Message(message, chatStore.selectedChat.id, sentIncoming.value));
        sentIncoming.value = !sentIncoming.value;
    }
}

</script>

<template>
<div class="chat-window">
    <ChatHeader @search-messages="searchMessages" v-if="selectedChat" />
    <!-- <div class="chat-window__message-list"> -->
    <transition-group name="transform" tag="div" class="chat-window__message-list">
        <MessageCard v-for="message in filteredMessages" :key="message.time.toLocaleString()" :message="message" />
    </transition-group>
    <!-- </div> -->
    <NoMessages v-if="selectedChat && messageList?.length==0" :name="user?.fullName()" />
    <ChatInput v-if="selectedChat" @send-message="sendMessage" />
</div>
</template>

<style scoped lang="scss">
@import "./../../assets/css/transform";
@import "./ChatWindow.scss";
</style>