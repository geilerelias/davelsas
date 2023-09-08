<script setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import {useDisplay, useTheme} from 'vuetify';
import logoDark from '../../images/logo-dark.png'
import logoLight from '../../images/logo-light.png'
import {useLinksStore} from '@/stores/links'; // Ajusta la ruta según tu configuración
import {useDrawerStore} from '@/stores/drawer'; // Asegúrate de ajustar la ruta correcta
import {useActiveSectionStore} from '@/stores/activeSection'; // Importa la tienda de activeSection


const drawerStore = useDrawerStore();
const activeSectionStore = useActiveSectionStore(); // Utiliza la tienda de activeSection

const toggleDrawer = () => {
    drawerStore.toggleDrawer();
};


const linksStore = useLinksStore();
const links = linksStore.links;


const theme = useTheme()


const target = ref(null);
const isScrolling = ref(true);

const {name, mdAndUp, smAndDown, smAndUp, xsOnly} = useDisplay()

let activeSection = computed(() => activeSectionStore.activeSection); // Utiliza la variable global de la tienda

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
            activeSectionStore.setActiveSection('#' + section.id);
            break; // Importante para detener la búsqueda después de encontrar la sección visible
        }
    }
};


const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
});


function isActive(route) {
    console.log('route ', route)
    console.log('activeSection ', activeSection.value)
    console.log('activeSectionStore ', activeSectionStore.activeSection)
    return route === activeSection.value;
}

function findActiveSectionName() {

    // Utiliza find() para encontrar el objeto que coincide con activeSection
    const matchingLink = linksStore.links.find(link => link.route === activeSection.value);

    // Verifica si se encontró un objeto que coincide
    if (matchingLink) {
        return matchingLink.name; // Devuelve el "name" del objeto encontrado
    } else {
        return null; // Si no se encuentra, devuelve null o un valor predeterminado
    }
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
        activeSectionStore.setActiveSection(idName);
        activeButtonIndex.value = idName;
    }


}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <v-app-bar
        v-scroll="onScroll"
        :class="isScrolling?'text-white':!isDarkTheme?'text-black':'text-secondary'"
        :color="isScrolling?'transparent':!isDarkTheme?'white':'primary'"
        :elevation="isScrolling?0:10"
    >

        <template v-slot:prepend>
            <div v-if="!isScrolling" class="text-center">
                <v-avatar :color="isDarkTheme?'black':''" :size="60" rounded="0">
                    <v-img :src="isDarkTheme?logoDark:logoLight" alt="logo"/>
                </v-avatar>
            </div>
        </template>

        <v-app-bar-title v-if="!isScrolling">
            <div v-if="smAndDown">
                {{ findActiveSectionName() }}
            </div>
            <div v-else>
                DAVEL SAS.
            </div>
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
        <!--  v-if="smAndDown"      -->
        <v-app-bar-nav-icon @click="toggleDrawer">
        </v-app-bar-nav-icon>
    </v-app-bar>
    <div>
        <v-btn
            v-if="!isScrolling"
            class="bg-primary position-fixed right-0 bottom-0 mb-10 mr-5 z-index1"
            icon="mdi-chevron-up"
            variant="elevated"
            @click="scrollToTop">
        </v-btn>
    </div>
</template>


<style scoped>
.bottom-0 {
    bottom: 0 !important;
}

.right-0 {
    right: 0 !important;
}

.z-index1 {
    z-index: 1000;
}

.position-fixed {
    position: fixed !important;
}

</style>
