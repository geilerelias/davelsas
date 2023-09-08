<script setup>
import {useServicesStore} from '../stores/services.js';
import ServiceItem from "@/Pages/ServiceItem.vue";

const services = useServicesStore().services;

</script>

<template>
    <section id="services" class="section">
        <v-container>
            <v-row class="px-sm-12">
                <v-col class="text-center" cols="12">
                    <v-avatar class="mb-4 bg-primary text-center" size="60 ">
                        <v-icon class="text--white" color="white">mdi-cogs</v-icon>
                    </v-avatar>
                    <h1
                        class="text-center text-uppercase text-h5 font-weight-bold mb-2  animate__animated animate__zoomIn"
                    >
                        Nuestros servicios
                    </h1>
                    <v-responsive class=" rounded-lg bg-secondary mx-auto mb-6" style="max-width: 100px;">
                        <v-divider class="pb-1 rounded-lg" light/>
                    </v-responsive>
                </v-col>


                <div v-for="(cat , index) in services" :key="cat.clasificacion">
                    <div>
                        <v-row>
                            <v-col class="text-left mt-8" cols="12">
                                <div class="d-flex justify-start align-center">
                                    <v-avatar class="mb-4 mr-4 bg-primary text-center" size="40 ">
                                        <v-icon class="text--white" color="white" icon="cat.icono">{{
                                                cat.icono
                                            }}
                                        </v-icon>
                                    </v-avatar>
                                    <h1
                                        class="text-left font-weight-bold mb-2  animate__animated animate__zoomIn"
                                    >
                                        {{ cat.clasificacion }}
                                    </h1>
                                </div>
                                <v-responsive class=" rounded-lg bg-secondary text-left mb-6">
                                    <v-divider class=" rounded-lg" light/>
                                </v-responsive>
                            </v-col>
                        </v-row>
                        <div v-for="servicio in cat.servicios" :key="servicio.title">
                            <service-item :description="servicio.description"
                                          :height="servicio.height"
                                          :layout="servicio.layout"
                                          :photos="servicio.photos"
                                          :title="servicio.title "
                                          width="100%"></service-item>
                        </div>
                        <div></div>
                    </div>
                </div>


            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
/* Estilos para las categorías */
.bg-grey {
    background-color: #f2f2f2;
}

.bg-white {
    background-color: #ffffff;
}
</style>
