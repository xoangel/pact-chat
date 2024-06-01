<script setup lang="ts">
import { ref } from 'vue';

let dropdownVisible = ref(false);
const showDropdown = () => dropdownVisible.value = !dropdownVisible.value;

defineExpose({
  showDropdown
});
</script>

<template>
    <Transition name="fade">
        <div v-if="dropdownVisible" class="dropdown-modal">
            <slot></slot>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
@import "./../../assets/css/fade";

    .dropdown-modal{
        position: absolute;
        top: 120%;
        right: 0;
        min-height: 48px;
        border-radius: 16px;
        background: white;
        box-shadow: 4px 4px 4px #3a3a3a25;
        padding: 12px;
        display: flex;
        flex-direction: column;
    }

</style>