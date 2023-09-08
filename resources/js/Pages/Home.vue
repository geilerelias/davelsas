<script setup>
import {Head} from '@inertiajs/vue3';

import About from "@/Pages/About.vue";
import Team from "@/Pages/Team.vue";
import Services from "@/Pages/Services.vue";
import Contact from "@/Pages/Contact.vue";

import {computed, onMounted, onUnmounted, ref} from "vue";
import {useLinksStore} from '@/stores/links'; // Ajusta la ruta según tu configuración
import bg from '../../images/bg-construccion-4.jpg'
import logoLight from '../../images/logo-light.png'
import logoDark from '../../images/logo-dark.png'
import {useDisplay, useTheme} from 'vuetify';

const {name, mdAndUp, smAndDown, smAndUp, xsOnly} = useDisplay()

const theme = useTheme()


const linksStore = useLinksStore();
const links = linksStore.links;

const target = ref(null);
const isScrolling = ref(true);


const icons = [
    {icon: "mdi-facebook", url: 'https://facebook.com/'},
    {icon: "mdi-twitter", url: 'https://twitter.com/'},
    {icon: "mdi-whatsapp", url: 'https://api.whatsapp.com/'},
    {icon: "mdi-linkedin", url: 'https://linkedin.com/'},
    {icon: "mdi-instagram", url: 'https://www.instagram.com/'}
];
const activeSection = ref(null);
const activeButtonIndex = ref(null);


onMounted(() => {
    window.addEventListener('scroll', findVisibleSection);
    findVisibleSection();
});

onUnmounted(() => {
    window.removeEventListener('scroll', findVisibleSection);
});

const findVisibleSection = () => {
    const sections = document.querySelectorAll('.section');

    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            activeSection.value = '#' + section.id;
            break; // Importante para detener la búsqueda después de encontrar la sección visible
        }
    }
};

function isActive(route) {
    return route === activeSection.value;
}

function onScroll() {
    const scrollTop = window.scrollY;
    isScrolling.value = scrollTop <= 100;
}

function scrollToSection(idName) {
    // Cambia esto al ID de la sección a la que deseas desplazarte
    const targetSection = document.getElementById(idName.slice(1));
    console.log(targetSection)
    if (targetSection) {
        const targetOffset = targetSection.offsetTop;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
        // Agregar el fragmento de la URL (el #nombre)
        history.pushState(null, null, idName);
        activeSection.value = idName;
        activeButtonIndex.value = idName;
    }


}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}


const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
});
</script>

<template>
    <v-app>
        <Head>
            <title>INICIO</title>
        </Head>
        <v-app-bar
            v-scroll="onScroll"
            :class="isScrolling?'text-white':!isDarkTheme?'text-black':'text-secondary'"
            :color="isScrolling?'transparent':!isDarkTheme?'white':'primary'"
            :elevation="isScrolling?0:10"
            app
        >

            <template v-slot:prepend>
                <div v-if="!isScrolling" class="text-center">
                    <v-avatar :color="isDarkTheme?'black':''" :size="60" rounded="0">
                        <v-img :src="isDarkTheme?logoDark:logoLight" alt="logo"/>
                    </v-avatar>
                </div>
            </template>

            <v-app-bar-title v-if="!isScrolling">
                DAVEL SAS.
            </v-app-bar-title>

            <v-spacer></v-spacer>

            <div v-for="link in links" v-if="mdAndUp" class="d-flex">
                <div>
                    <v-btn
                        :color="isActive(link.route)?'secondary':''"
                        @click="scrollToSection(link.route)">
                        {{ link.name }}
                    </v-btn>
                    <v-responsive v-show="isActive(link.route)" class="rounded-lg bg-secondary mx-auto">
                        <v-divider class="pb-1 rounded-lg" light/>
                    </v-responsive>
                </div>
            </div>

            <v-btn icon @click="toggleTheme">
                <v-icon :icon="$vuetify.theme.name === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
            </v-btn>
            <v-app-bar-nav-icon v-if="smAndDown">
            </v-app-bar-nav-icon>
        </v-app-bar>

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
            <contact></contact>
        </v-main>

        <v-btn
            v-if="!isScrolling"
            class="bg-primary position-fixed right-0 bottom-0 mb-10 mr-5 z-index1"
            icon="mdi-chevron-up"
            variant="elevated"
            @click="scrollToTop">
        </v-btn>


        <section>
            <v-footer class="bg-secondary pa-0">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-container>
                            <v-row align="center" justify="start">
                                <v-col>
                                    <p>¡Conéctate con nosotros en nuestras redes sociales!</p>
                                </v-col>
                                <v-col v-for="(item, i) in icons" :key="i"
                                       cols="auto">
                                    <v-btn
                                        :href="item.url"
                                        :icon="item.icon "
                                        color="primary"
                                        density="comfortable"
                                        target="_blank"
                                    >
                                    </v-btn>

                                </v-col>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col :class="!isDarkTheme?'bg-white':'bg-secondary-darken-2'" cols="12" md="3">
                        <a class="" href="/">
                            <v-img :src="!isDarkTheme?logoLight:logoDark" max-height="300"></v-img>
                        </a>
                    </v-col>
                    <v-col :class="!isDarkTheme?'bg-grey-lighten-4':'bg-secondary-darken-1'" cols="12" md="9">
                        <v-container>
                            <v-row class="pb-7 mt-5">
                                <v-col>
                                    <v-list class="bg-transparent">
                                        <v-list-subheader class="font-weight-bold text-primary">Enlaces rápido
                                        </v-list-subheader>

                                        <v-list-item
                                            v-for="(item, i) in links"
                                            :key="i"
                                            :value="item"
                                            class="bg-transparent"
                                            color="transparent"
                                            rounded="xl"
                                        >
                                            <template v-slot:prepend>
                                                <v-icon :icon="item.icon"></v-icon>
                                            </template>

                                            <v-list-item-title v-text="item.name"></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col>
                                    <v-list class="bg-transparent">
                                        <v-list-subheader class="font-weight-bold text-primary">Enlaces rápido
                                        </v-list-subheader>

                                        <v-list-item
                                            v-for="(item, i) in links"
                                            :key="i"
                                            :value="item"
                                            class="bg-transparent"
                                            color="transparent"
                                            rounded="xl"
                                        >
                                            <template v-slot:prepend>
                                                <v-icon :icon="item.icon"></v-icon>
                                            </template>

                                            <v-list-item-title v-text="item.name"></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-col>

                    <v-col cols="12">
                        <div class="text-center pa-3">
                            davel sas. © 2023
                            — Todos los derechos reservados.
                        </div>

                    </v-col>
                </v-row>
            </v-footer>
        </section>
    </v-app>
</template>

<style scoped>
.bottom-0 {
    bottom: 0 !important;
}

.right-0 {
    right: 0 !important;
}

.z-index1 {
    z-index: 2;
}

.position-fixed {
    position: fixed !important;
}

</style>
