<template>
    <photo-row :rowHeight="height">
        <photo-grid v-for="(data, i) in photos" :key="i" @click="$emit('itemClick', data, i)">
            <template v-if="showNumOfRemainingPhotos && remainingNum > 0 && data.id === (layoutNum - 1)">
                <photo-mask></photo-mask>
                <view-more>
                    <num-of-remaining>{{ remainingNum }}</num-of-remaining>
                </view-more>
            </template>
            <photo-thumb :thumb="data.source"></photo-thumb>
        </photo-grid>
    </photo-row>
</template>

<script setup>
import PhotoGrid from "./PhotoGrid.vue"
import PhotoRow from "./PhotoRow.vue"
import PhotoMask from "./PhotoMask.vue"
import ViewMore from "./ViewMore.vue"
import NumOfRemaining from "./NumOfRemaining.vue"
import PhotoThumb from './PhotoThumb.vue'

const props = defineProps({
    height: String,
    photos: Array,
    layoutNum: Number,
    remainingNum: Number,
    showNumOfRemainingPhotos: Boolean,
});
</script>
