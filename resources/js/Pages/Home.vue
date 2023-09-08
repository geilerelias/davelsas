<script setup>
import {Head} from '@inertiajs/vue3';

import HeaderPage from "@/Base/HeaderPage.vue";
import FooterPage from "@/Base/FooterPage.vue";
import DrawerPage from "@/Base/DrawerPage.vue";

import About from "@/Pages/About.vue";
import Services from "@/Pages/Services.vue";
import Team from "@/Pages/Team.vue";
import Contact from "@/Pages/Contact.vue";
import {useLinksStore} from '@/stores/links'; // Ajusta la ruta según tu configuración
import bg from '../../images/bg-construccion-4.jpg'
import logoDark from '../../images/logo-dark.png'
import {useDisplay, useTheme} from 'vuetify';


const {name, mdAndUp, smAndDown, smAndUp} = useDisplay()

const theme = useTheme()


const linksStore = useLinksStore();
const links = linksStore.links;

</script>

<template>
    <v-app>
        <Head>
            <title>INICIO</title>
        </Head>
        <drawer-page></drawer-page>
        <HeaderPage/>

        <section id="home" class="section">
            <div ref="target" class="target">
                <v-img :src="bg"
                       cover=""
                       gradient="to right top, rgb(12 12 12 / 81%), rgb(255 235 59 / 18%)"
                       height="100vh"
                >

                    <div :class="smAndDown?'fill-height':''">
                        <div
                            :class="[mdAndUp?'float-left-logo mt-16 ml-16':'d-flex justify-center align-center',smAndDown?'fill-height':'']"
                            style="min-width: 100px">
                            <v-img :src="logoDark" height="300" width="300">
                            </v-img>
                        </div>
                    </div>
                    <v-row class=" mt-16 justify-center align-center">
                        <v-col class="d-flex flex-column justify-center align-center"
                               style="max-width: 40vw">
                            <p class="text-white font-weight-bold text-h5 text-center mb-5"> Creada para ofrecer
                                diversas soluciones de
                                construcción mantenimiento y adecuación de obras civiles y arquitectónicas.
                            </p>
                            <v-btn color="secondary">
                                contactanos
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-img>
            </div>

        </section>

        <v-main>
            <About></About>
            <Services></Services>
            <Team></Team>
            <Contact></Contact>
        </v-main>
        <FooterPage/>

    </v-app>
</template>

