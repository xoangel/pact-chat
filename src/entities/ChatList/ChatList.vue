<script setup lang="ts">
import ChatComponent from "./../../widgets/ChatComponent/ChatComponent.vue";
import { useChatStore } from "./../../helpers/stores/useChatStore";
import IChat from "../../helpers/types/typeChat";
import IMessage from "../../helpers/types/typeMessage";
import ChatSearchBar from "../../widgets/ChatSearchBar/ChatSearchBar.vue";
import { computed } from "vue";

const chatStore = useChatStore();
const chatList = computed(()=>chatStore.filteredList); 

type MessageChat = {
    chat: IChat,
    messageList: IMessage[]
}

function selectChat(chat: MessageChat){
    chatStore.selectedChat = chat.chat;
    console.log(chatStore.selectedChat)
}
</script>

<template>
    <div class="chat-list-container">
        <ChatSearchBar />
        <div class="chat-list">
            <ChatComponent v-for="chat in chatList" :key="chat.chat.id" :chat="chat" @click="selectChat(chat)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./ChatList.scss"
</style>