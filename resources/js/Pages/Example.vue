<template>
    <v-container>
        <div class="bg-red">
            <v-row>
                <template v-for="(image,imgIdx) in images" :key="imgIdx">
                    <v-col :cols="image.cols">
                        <v-img
                            :src="image.img"
                            alt=""
                            class="fill-height"
                            cover="">
                        </v-img>
                    </v-col>

                    <v-col v-if="image.children" :cols="image.cols" class="d-flex flex-column">
                        <v-row>
                            <v-col v-for="(children,childIdx) in image.children" :key="childIdx"
                                   :cols="children.cols">
                                <v-img
                                    :src="`${children.img}`"
                                    alt=""
                                    class="fill-height"/>
                            </v-col>
                        </v-row>
                    </v-col>
                </template>
            </v-row>
        </div>


        <div>
            <div class="image-container">
            </div>
        </div>
        <div>

            <div class="fill-height">
                <v-row class="fill-height">
                    <v-col class="text-justify" cols="12" md="8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores delectus dicta dolorum
                        eaque ipsum magnam nihil sed sint voluptatum! Accusantium commodi, cum dolorem et officiis
                        possimus quasi tenetur ut?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores
                        aspernatur assumenda cum ea et, fugiat inventore, libero nam odit optio provident qui rem
                        sapiente. Accusantium dicta maiores quasi. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A asperiores delectus dicta dolorum
                        eaque ipsum magnam nihil sed sint voluptatum! Accusantium commodi, cum dolorem et officiis
                        possimus quasi tenetur ut?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores
                        aspernatur assumenda cum ea et, fugiat inventore, libero nam odit optio provident qui rem
                        sapiente. Accusantium dicta maiores quasi. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A asperiores delectus dicta dolorum
                        eaque ipsum magnam nihil sed sint voluptatum! Accusantium commodi, cum dolorem et officiis
                        possimus quasi tenetur ut?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam asperiores
                        aspernatur assumenda cum ea et, fugiat inventore, libero nam odit optio provident qui rem
                        sapiente. Accusantium dicta maiores quasi.
                    </v-col>
                    <v-col class="fill-height" cols="12" md="4">
                        <v-responsive height="100%">
                            <v-row class="rounded-lg fill-height ">
                                <v-col class=" fill-height d-flex flex-column" cols="6">
                                    <v-img alt="Image" class="rounded-lg" cover="" height="100%"
                                           src="https://picsum.photos/500/300?image=3"/>
                                </v-col>
                                <v-col class="d-flex flex-column  fill-height" cols="6">
                                    <v-row class="fill-height">
                                        <v-col class="" cols="12" style="height: 50%">
                                            <v-img alt="Image" class="rounded-lg" cover="" height="100%"
                                                   src="https://picsum.photos/500/300?image=3"/>
                                        </v-col>
                                        <v-col class=" " cols="12" style="height: 50%">
                                            <v-img alt="Image" class="rounded-lg" cover height="100%"
                                                   src="https://picsum.photos/500/300?image=3"/>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-responsive>
                    </v-col>
                </v-row>
            </div>

            <div class="fill-height">
                <v-row class="fill-height">
                    <v-col>
                        <v-responsive height="100%">

                            <v-row>
                                <template v-for="(item,imgIdx) in images" :key="imgIdx">
                                    <v-col v-if="!item.children" :cols="item.cols" class="fill-height">
                                        <v-img :height="item.height" :src="item.img" alt="Image" class="rounded-lg"
                                               cover=""/>
                                    </v-col>
                                    <v-col v-if="item.children" :cols="item.cols"
                                           class="d-flex flex-column  fill-height">
                                        <v-row class="fill-height">
                                            <v-col v-for="(children,childIdx) in item.children" :key="childIdx"
                                                   :cols="children.cols">
                                                <v-img
                                                    :height="children.height"
                                                    :src="children.img"
                                                    alt=""
                                                    class="rounded-lg"
                                                    cover=""/>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </template>
                            </v-row>

                        </v-responsive>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>


    <v-container>
        <v-responsive>
            <v-row class="bg-red" style="height: 300px">
                <template v-for="(image, index) in images"
                          :key="index">
                    <v-col :cols="image.cols"
                           class="fill-height bg-blue"
                    >
                        <v-img
                            v-if="!image.children"
                            :height="image.height"
                            :src="image.img"
                            :style="{ height: image.height }"
                            class="rounded-lg"
                            cover=""
                        ></v-img>
                        <v-row v-if="image.children"
                               class="d-flex flex-column "
                               style="height: 100%">
                            <v-col
                                v-for="(child, childIndex) in image.children"
                                :key="childIndex"
                                :cols="child.cols"
                                :style="{ height: child.height }"
                            >
                                <v-img
                                    :height="child.height"
                                    :src="child.img"
                                    :style="{ height: child.height }"
                                    class="rounded-lg"
                                    cover=""
                                ></v-img>
                            </v-col>
                        </v-row>

                    </v-col>
                </template>
            </v-row>
        </v-responsive>
    </v-container>
</template>
<script setup>

import {ref} from "vue";

const images = ref([
    {img: 'https://picsum.photos/500/300?image=15', height: '100%', cols: 6},
    {
        cols: 6,
        children: [
            {img: 'https://picsum.photos/500/300?image=20', height: '50%', cols: 12},
            {img: 'https://picsum.photos/500/300?image=45', height: '50%', cols: 12},
        ]
    }
    // Agrega más imágenes aquí
]);

const imageLayout = [
    {
        cols: 4,
        img: 'https://picsum.photos/500/300?image='
    },
    {
        cols: 8,
        img: 'https://picsum.photos/500/300?image=',
        children: [{
            cols: 12,
            img: 'https://picsum.photos/500/300?image='
        }, {
            cols: 12,
            img: 'https://picsum.photos/500/300?image='
        }],
    },
    {
        cols: 6, img: 'https://picsum.photos/500/300?image='
    },
    {
        cols: 3, img: 'https://picsum.photos/500/300?image='
    },
    {
        cols: 9, img: 'https://picsum.photos/500/300?image='
    },
    {
        cols: 4, img: 'https://picsum.photos/500/300?image='
    },
    {
        cols: 8, img: 'https://picsum.photos/500/300?image='
    },
]
</script>


<style scoped>
.image-container {
    display: flex;
    width: 300px;
    height: 200px;
    overflow: hidden;
    margin: 10px;
}

.image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>
