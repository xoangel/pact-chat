<script setup lang="ts">
import ChatList from "./entities/ChatList/ChatList.vue";
import ChatWindow from "./entities/ChatWindow/ChatWindow.vue"
</script>

<template>
  <div class="main-wrapper">
    <ChatList />
    <ChatWindow />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import "./assets/css/global.scss"; 
.main-wrapper{
  display: flex;
}
</style>