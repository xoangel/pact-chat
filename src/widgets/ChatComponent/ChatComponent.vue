<script setup lang="ts">
import { computed } from 'vue';
import { useChatStore } from '../../helpers/stores/useChatStore';
import IChat from '../../helpers/types/typeChat';
import IMessage from '../../helpers/types/typeMessage';
import IUser from '../../helpers/types/typeUser';
import AvatarImage from '../../UI/AvatarImage.vue';
import ChatTitle from '../../UI/ChatTitle.vue';
import UnreadMessages from './UI/UnreadMessages.vue';

    const chatStore = useChatStore()
    const props = defineProps<{
        chat: {
            chat: IChat,
            messageList: IMessage[]
        }
    }>();

    const days = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
    ];

    const chatWith: IUser = props.chat.chat.chat_with;
    const name = chatWith.fullName();
    const photo = chatWith.photo;
    const verified = computed(()=>chatWith.verified);
    
    let lastMessage = computed(()=>chatStore.getLastMessage(props.chat.chat.id));
    let lastMessageTime = computed(()=>lastMessage.value?.time);
    let lastMessageText = computed(()=>lastMessage.value?.text);
    let unreadMessagesCount = computed(()=>chatStore.getUnreadMessagesCount(props.chat.chat.id));

    const lastMessageTimeString = computed(()=>{
        const now = new Date();
        if(lastMessageTime.value){
            return lastMessageTime.value.getDay() == now.getDay() &&
            lastMessageTime.value.getMonth() == now.getMonth() &&
            lastMessageTime.value.getMonth() == now.getMonth() ?
            `${lastMessageTime.value?.getHours() < 10 ? '0'+lastMessageTime.value?.getHours(): lastMessageTime.value?.getHours()}:${lastMessageTime.value?.getMinutes() < 10 ? '0'+lastMessageTime.value?.getMinutes(): lastMessageTime.value?.getMinutes()}` :
            days[lastMessageTime.value.getDay()];
        }
    })

</script>

<template>
    <div class="chat-component">
        <div class="chat-component__avatar-container">
            <AvatarImage :user-avatar="photo"/>
        </div>
        <div class="chat-component__content">
            <div class="chat-component__title">
                <ChatTitle 
                    :user-full-name="name" 
                    :verified="verified"
                />
                <span class="last-message-time secondary">{{  lastMessageTimeString }}</span>
            </div>
            <div class="chat-component__last-message">
                <p class="chat-component__last-message__text secondary">{{ lastMessage && !lastMessage?.incoming ? "Вы: " : "" }} {{ lastMessageText }} </p>
                <UnreadMessages v-if="unreadMessagesCount" :count="unreadMessagesCount"/>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@import "./ChatComponent.scss";
</style>