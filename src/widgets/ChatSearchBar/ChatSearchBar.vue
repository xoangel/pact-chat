<script setup lang="ts">
import {ref } from 'vue'
import { useChatStore } from "./../../helpers/stores/useChatStore";

const query = ref('');
const chatStore = useChatStore();

const updateSearchQuery = () => {
  chatStore.setSearchQuery(query.value);
};
</script>

<template>
    <div class="chat-search-bar">
        <div @click="$emit('collapseMenu')" class="chat-search-bar__collapse">
            <img src="/chat/collapse.svg" alt="">
        </div>
        <div class="chat-search-bar__search">
            <div class="search-input__wrapper">
                <input class="search-input" v-model="query" type="text" placeholder="Поиск..." @input="updateSearchQuery">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "./ChatSearchBar.scss";
    @import "./../../assets/css/searchInput";
</style>