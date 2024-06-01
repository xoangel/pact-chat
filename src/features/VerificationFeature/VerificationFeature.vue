<script setup lang="ts">
import verify from './verify';
</script>

<template>
    <div @click="verify()" class="verify-user">
        <p>Верифицировать пользователя</p>
        <img src="./../../../public/user/verified.svg" alt="">
    </div>
</template>

<style scoped lang="scss">
    .verify-user{
        display: flex;
        gap: 16px;
    }
</style>