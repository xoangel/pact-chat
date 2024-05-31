<script setup lang="ts">
import IMessage from '../helpers/types/typeMessage';

const props = defineProps<{
    message: IMessage
}>()

const time = `${props.message.time.getHours() < 10 ? '0'+props.message.time.getHours() : props.message.time.getHours()} : ${props.message.time.getMinutes() < 10 ? '0'+props.message.time.getMinutes() : props.message.time.getMinutes()}`;

</script>

<template>
<div class="message-line">
    <div class="message-line__message" :style="`background-color: ${props.message.incoming? 'white' : '#78E378'}; margin: ${props.message.incoming? '0 0 0 auto' : '0 0 auto 0'}`">
        <p class="message__text">{{ props.message.text }}</p>
        <div class="message__data">
            <div class="message__data__time" :style="`color: ${props.message.incoming? 'black' : 'white'}`">{{ time }}</div>
            <img src="/public/chat/check.svg" :style="`${props.message.incoming ? {} : 'filter: invert(1)'}`" alt="" class="message__data__check">
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

    .message-line{
        display: flex;
    }

    .message-line__message{
        padding: 4px 12px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        max-width: 350px;
    }

    .message__text{
        margin-right: 16px;
    }

    .message__data{
        display: flex;
        justify-content: flex-end;
        gap: 4px;
    }

    .message__data{
        &__time{
            font-size: 12px;
        }
    }
</style>