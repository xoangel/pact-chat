<script setup lang="ts">
    defineProps({
        count: Number
    })
</script>

<template>
    <span class="unread-messages">
        {{ count }}
    </span>
</template>

<style scoped lang="scss">
@import "./UnreadMessages.scss";
</style>

