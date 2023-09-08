<template>
    <v-app>
        <v-container>
            <div ref="parentContainer" class="parent-container">
                <v-row>
                    <v-col>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis iste iure modi
                        soluta vero! Alias amet atque cumque doloribus, error impedit ipsum, mollitia nulla, numquam
                        odit praesentium quasi veniam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque neque optio pariatur provident
                        quae reiciendis sint tempore? Accusantium adipisci asperiores dolorem nisi odio repudiandae sed!
                        Blanditiis cupiditate earum reprehenderit voluptates.
                    </v-col>
                    <v-col ref="colWithCollage">
                        <v-responsive>
                            <photo-collage-wrapper :layout="layout"
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
                                <template v-for="(photo, index) in collage.photos" :key="index">
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
});

const overlay = ref(false)
const dialog = ref(false)

const parentContainer = ref(null);
const colWithCollage = ref(null);
let imagePreview = ref(null);
const layout = [3, 2, 2];
const collage = {
    height: ['10vh', '20vh', '60vh'],
    gapSize: "0.5em",
    borderRadius: "0.5em",
    width: "100%",
    photos: [
        {
            source:
                "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80",
        },
        {
            source:
                "https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80",
        },
    ],
    showNumOfRemainingPhotos: true,
};
const currentImageIndex = ref(0); // Índice de la imagen actual


const itemClickHandler = (data, column) => {
    dialog.value = true
    imagePreview.value = data.source;
    currentImageIndex.value = collage.photos.findIndex(photo => photo.source === data.source);
    console.log(currentImageIndex.value)
    const item = Object.assign({}, data);
    console.log(`itemId=${item.id}, column=${column}`);
};


</script>

