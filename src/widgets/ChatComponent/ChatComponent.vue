<script setup lang="ts">
import IUser from "./../../helpers/types/typeUser";
import AvatarImage from "../../UI/AvatarImage.vue";
    
    const props = defineProps({
        chat: {type: Object, reqired: true}
    });

    const user: IUser = props.user;
    
    const userAvatar = user?.photo;
    const verified = user?.verified;
    const userFullName = user?.fullName();

</script>

<template>
    <div class="chat-component">
        <div class="avatar__container">
            <AvatarImage :userAvatar="this.userAvatar" />
        </div>
        <div class="chat-component__content">
            <div class="chat-component__title-container">
                <h2 class="chat-component__title">{{ this.userFullName }}</h2>
                <img v-if="this.verified" src="/chat/verified.svg" alt="">
            </div>
            <p class="chat-component__last-message">{{ this.lastMessage }}</p>
        </div>
    </div>
</template>