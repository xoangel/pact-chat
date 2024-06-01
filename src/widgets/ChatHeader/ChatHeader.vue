<script setup lang="ts">
import { computed, ref } from 'vue';
import { useChatStore } from '../../helpers/stores/useChatStore';
import AvatarImage from '../../UI/AvatarImage.vue';
import ChatTitle from '../../UI/ChatTitle.vue';
import DropdownModal from './../../features/DropdownModal/DropdownModal.vue'
import VerificationFeature from '../../features/VerificationFeature/VerificationFeature.vue';

const chatStore = useChatStore();
const selectedUser = computed(()=>chatStore.selectedChat);
let searchField = ref(false);

const noRelease = ()=>alert("В ближайшем обновлении мы это сделаем!");
const moreActionsDropdown = ref(null);

const showMoreActions = () => {if(moreActionsDropdown.value) (moreActionsDropdown.value as any).showDropdown()}

</script>

<template>
    <div class="chat-header">
        <div class="chat-header__user-data">
            <div class="chat-header__avatar-container">
                <AvatarImage :user-avatar="selectedUser?.chat_with.photo"/>
            </div>
            <div class="chat-header__content">
                <div class="chat-header__title">
                    <ChatTitle 
                        :user-full-name="selectedUser?.chat_with.fullName()+''" 
                        :verified="selectedUser?.chat_with.verified || false"
                    />
                    <p class="chat-haeder__last-seen secondary">
                        Был в сети 5 минут назад
                    </p>
                </div>
            </div>
        </div>
        <div class="chat-header__actions">
            <div @click="searchField = !searchField" v-if="!searchField" class="chat-header__action-search">
                <div class="chat-header__action-search__icon action-icon"></div>
            </div>
            <!-- <input v-else class="search-input message-search" v-model="query" type="text" placeholder="Поиск..." @input="updateSearchQuery"> -->
            <div @click="noRelease" class="chat-header__action-call">
                <div class="chat-header__action-call__icon action-icon"></div>
            </div>
            <div @click.stop="showMoreActions" class="chat-header__action-more">
                <div class="chat-header__action-more__icon action-icon"></div>
                <DropdownModal ref="moreActionsDropdown">
                    <VerificationFeature class="dropdown-modal__element"/>
                </DropdownModal>
            </div>
        </div>
    </div>
</template>

<style>
@import "./ChatHeader.scss";
</style>