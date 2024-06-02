<script setup lang="ts">
// @ts-ignore
import EmojiPicker from "./../../features/EmojiPicker/EmojiPicker.vue"
import { ref } from "vue";

const inputMessage = ref('');
const showEmojiPicker = ref(false);
const addEmoji = (emoji: any) => {
  inputMessage.value += emoji;
};

</script>

<template>
    <div class="message-input">
        <div class="emoji-picker__container">
            <Transition name="fade">
                <EmojiPicker v-if="showEmojiPicker" @emoji_click="addEmoji" />
            </Transition>
            <div @click="showEmojiPicker = !showEmojiPicker" class="emoji-picker__icon"></div>
        </div>
        <input v-model="inputMessage" placeholder="Напишите сообщение" class="message-input-element" type="text">
        <button @click="$emit('send-message', inputMessage)" class="send-message"></button>
    </div>
</template>

<style scoped lang="scss">
@import "./../../assets/css/fade";
@import "./ChatInput.scss";
</style>