<template>
    <div :style="{ height: rowHeight }" class="vue-photo-row">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    rowHeight: String,
});
</script>


<style lang="scss" scoped>
.vue-photo-row {

    display: flex;
    box-sizing: border-box;

    & + & {
        margin-top: var(--vue-photo-grid-gap);
    }

}
</style>
