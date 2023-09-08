<template>
    <div :style="thumbStyle" class="vue-photo-thumb">
        <slot></slot>
    </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    thumb: String,
});

const thumbStyle = computed(() => ({
    'background-image': `url(${props.thumb})`,
}));
</script>


<style lang="scss" scoped>
.vue-photo-thumb {
    flex: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: var(--vue-photo-grid-radius);
}
</style>
