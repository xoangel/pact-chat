<script setup lang="ts">

defineProps({
    userFullName: {type: String, required: true},
    verified: {type: Boolean, required: true}
})

</script>

<template>
    <div class="chat-title-container">
        <p class="chat-title-container__title">{{ userFullName }}</p>
        <img v-if="verified" src="/user/verified.svg" class="chat-title-container__verification" alt="">
    </div>
</template>

<style scoped lang="scss">
    .chat-title-container{
        display: flex;
        gap: 8px;
    }

    .chat-title-container__title{
        font-size: 16px;
        font-weight: 600;
        text-wrap: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>