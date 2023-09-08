<template>
    <div :class="[disabled && 'vue-photo-collage--disabled']"
         :style="photoCollageStyle"
         class="vue-photo-collage"
    >
        <row-photos
            v-for="(data, i) in layout"
            :key="i"
            :height="height[i]"
            :layoutNum="layoutNum"
            :photos="layoutPhotoMaps[i]"
            :remainingNum="remainingNum"
            :showNumOfRemainingPhotos="showNumOfRemainingPhotos"
            @itemClick="(data, i) => !disabled && $emit('itemClick', data, i)"
        ></row-photos>
    </div>
</template>

<script setup>
import RowPhotos from "./RowPhotos.vue";
import {computed} from 'vue';

const props = defineProps({
    disabled: Boolean,
    width: String,
    height: Array,
    layout: Array,
    layoutPhotoMaps: Object,
    layoutNum: Number,
    remainingNum: Number,
    showNumOfRemainingPhotos: Boolean,
});

const photoCollageStyle = computed(() => {
    return {
        width: props.width,
    };
});
</script>

<style lang="scss">
.vue-photo-collage {
    font-family: inherit;
}

.vue-photo-collage.vue-photo-collage--disabled {
    .vue-photo-grid, .vue-view-more {
        cursor: inherit;
    }
}
</style>
