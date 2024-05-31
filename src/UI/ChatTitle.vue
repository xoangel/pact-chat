<script setup lang="ts">

defineProps({
    userFullName: {type: String, required: true},
    verified: {type: Boolean, required: true}
})

</script>

<template>
    <div class="chat-title-container">
        <h2 class="chat-title-container__title">{{ userFullName }}</h2>
        <img v-if="verified" src="/user/verified.svg" class="chat-title-container__verification" alt="">
    </div>
</template>

<style scoped lang="scss">
    .chat-title-container{
        display: flex;
        gap: 16px;
    }
</style>