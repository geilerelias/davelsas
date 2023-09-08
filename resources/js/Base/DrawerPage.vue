<script setup>
import {useDrawerStore} from '@/stores/drawer'; // Asegúrate de ajustar la ruta correcta
import {computed, ref} from "vue";
import {useTheme} from 'vuetify';
import logoDark from '../../images/logo-dark.png'
import logoLight from '../../images/logo-light.png'
import {useLinksStore} from '@/stores/links'; // Ajusta la ruta según tu configuración
import {useActiveSectionStore} from '@/stores/activeSection.js'; // Ajusta la ruta según tu configuración

const activeSectionStore = useActiveSectionStore();
let activeSection = computed(() => activeSectionStore.activeSection); // Utiliza la variable global de la tienda
const activeButtonIndex = ref(null);

const drawerStore = useDrawerStore();

const linksStore = useLinksStore();
const links = linksStore.links;


const theme = useTheme()

const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
});

function isActive(route) {
    return route === activeSection.value;
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

</script>

<template>
    <v-navigation-drawer v-model="drawerStore.isOpen" temporary>
        <!-- Contenido del Drawer -->
        <a class="bg-black" href="/#home">
            <v-img :src="!isDarkTheme?logoLight:logoDark" max-height="300"></v-img>
        </a>

        <v-divider></v-divider>

        <v-list color="secondary" nav>
            <v-list-subheader class="font-weight-bold text-primary">
                Enlaces rápido
            </v-list-subheader>

            <v-list-item
                v-for="(item, i) in links"
                :key="i"
                :active="isActive(item.route)"
                :value="item"
                color="secondary"
                @click="scrollToSection(item.route)"
            >
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>


