<template>
    <div class="vue-photo-collage-wrapper">
        <photo-collage
            :disabled="disabled"
            :height="internalHeight"
            :layout="layout"
            :layoutNum="layoutNum"
            :layoutPhotoMaps="layoutPhotoMaps"
            :remainingNum="remainingNum"
            :showNumOfRemainingPhotos="showNumOfRemainingPhotos"
            :width="width"
            @itemClick="(data, i) => $emit('itemClick', data, i)"
        >
        </photo-collage>
    </div>
</template>

<script setup>
import PhotoCollage from "./PhotoCollage.vue";
import {computed, defineProps, onMounted, ref, watch} from "vue";

const props = defineProps({
    disabled: Boolean,
    width: {
        type: String,
        default: "800px",
    },
    height: Array,
    layout: {
        type: Array,
        default: () => [],
    },
    photos: {
        type: Array,
        default: () => [],
    },
    showNumOfRemainingPhotos: Boolean,
    gapSize: String,
    borderRadius: String,
});

const internalHeight = ref(
    props.height.length < props.layout.length
        ? Array(props.layout.length).fill("200px")
        : props.height
);

const layoutPhotoMaps = ref({});
const viewerIsOpen = ref(false);
const currentImage = ref(0);

const createPhotoIds = (photos) => {
    return photos.map((data, i) => {
        return {...data, id: i};
    });
};

const createLayoutPhotoMaps = (layout, photos) => {
    const newPhotos = createPhotoIds(photos);
    const newMaps = {};
    layout.reduce((accumulator, currentValue, currentIndex) => {
        newMaps[currentIndex] = newPhotos.slice(
            accumulator,
            accumulator + currentValue
        );
        return accumulator + currentValue;
    }, 0);
    return newMaps;
};

const setGapSize = () => {
    if (document) {
        document.documentElement.style.setProperty(
            "--vue-photo-grid-gap",
            props.gapSize
        );
    }
};

const setBorderRadius = () => {
    if (document) {
        document.documentElement.style.setProperty(
            "--vue-photo-grid-radius",
            props.borderRadius
        );
    }
};

const layoutNum = computed(() => {
    return props.layout.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
});

const remainingNum = computed(() => {
    return props.photos.length - layoutNum.value;
});

onMounted(() => {
    layoutPhotoMaps.value = createLayoutPhotoMaps(props.layout, props.photos);
    setGapSize();
    setBorderRadius();
});

watch(
    () => [props.layout, props.photos],
    () => {
        layoutPhotoMaps.value = createLayoutPhotoMaps(props.layout, props.photos);
    }
);
</script>

