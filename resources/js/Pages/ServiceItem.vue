<template>
    <v-app>
        <v-container>
            <div ref="parentContainer" class="parent-container">
                <v-row class="my-4">

                    <v-col class="col-12 my-4" cols="12">
                        <div class="text-left">
                            <h1 class="text-body-2 font-weight-bold mb-2 text-left">
                                {{ title }}
                            </h1>

                            <v-responsive class=" rounded-lg bg-secondary mr-auto " style="max-width: 100px;">
                                <v-divider class="pb-1 rounded-lg" light/>
                            </v-responsive>
                        </div>
                    </v-col>

                    <v-col class="text-justify" cols="12" md="8" v-html="description"></v-col>
                    <v-col ref="colWithCollage" cols="12" md="3">
                        <v-responsive>
                            <photo-collage-wrapper :height="height" :layout="layout" :photos="photos" :width="width"
                                                   v-bind="collage" @itemClick="itemClickHandler"/>
                        </v-responsive>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <v-overlay
            :model-value="dialog"
            class="align-center justify-center"
        >
            <div class="text-center">
                <v-dialog
                    v-model="dialog"
                    width="auto"
                >
                    <v-card>
                        <v-card-text>
                            <v-carousel v-model="currentImageIndex" cycle hide-delimiters>
                                <!-- Iteramos sobre las imágenes en collage.photos -->
                                <template v-for="(photo, index) in photos" :key="index">
                                    <v-carousel-item>
                                        <v-img
                                            :src="photo.source"
                                            class="bg-grey-lighten-2"
                                            cover
                                            height="80vh"
                                            width="100vw"
                                        ></v-img>
                                    </v-carousel-item>
                                </template>
                            </v-carousel>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="primary" @click="dialog = false">Cerrar vista previa</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-overlay>
    </v-app>
</template>

<script setup>
import {PhotoCollageWrapper} from "../Pages/Collage/index.js";
import {ref} from "vue";

const props = defineProps({
    item: Object, // Recibimos el objeto del ciclo v-for
    title: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
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
});

const overlay = ref(false)
const dialog = ref(false)

const parentContainer = ref(null);
const colWithCollage = ref(null);
let imagePreview = ref(null);
const collage = {
    gapSize: "0.5em",
    borderRadius: "0.5em",
    showNumOfRemainingPhotos: true,
};
const currentImageIndex = ref(0); // Índice de la imagen actual


const itemClickHandler = (data, column) => {
    dialog.value = true
    imagePreview.value = data.source;
    currentImageIndex.value = props.photos.findIndex(photo => photo.source === data.source);
    console.log(currentImageIndex.value)
    const item = Object.assign({}, data);
    console.log(`itemId=${item.id}, column=${column}`);
};


</script>

