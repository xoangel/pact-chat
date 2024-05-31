<script setup lang="ts">
    defineProps<{
        name: String | undefined
    }>()
</script>

<template>
    <div class="no-messages-banner">
        <p v-if="name">Напишите пользователю {{ name }} первым!</p>
        <p v-else>Напишите первым!</p>
    </div>
</template>

<style scoped lang="scss"> 
    .no-messages-banner{
        display: flex;
        padding: 32px 64px;
        max-width: 450px;
        margin: auto;
        background-color: #12121250;
        border-radius: 16px;
        place-content: center;
        place-items: center;
    }

    .no-messages-banner{
        p{
            font-size: 24px;
            text-align: center;
            color: white;
        }
    }
</style>