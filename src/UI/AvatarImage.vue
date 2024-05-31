<script setup lang="ts">

defineProps({
    userAvatar: String
})
</script>

<template>
    <div class="avatar__image" :style="`background-image: url(${userAvatar})`"></div>
</template>

<style scoped lang="scss">
    .avatar__image{
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

