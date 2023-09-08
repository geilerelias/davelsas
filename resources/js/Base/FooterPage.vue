<script setup>
import {computed, ref} from "vue";
import {useTheme} from 'vuetify';
import logoDark from '../../images/logo-dark.png'
import logoLight from '../../images/logo-light.png'
import {useLinksStore} from '@/stores/links'; // Ajusta la ruta según tu configuración
import {useServicesStore} from '@/stores/services'; // Ajusta la ruta según tu configuración

const showDialog = ref(false);


const linksStore = useLinksStore();
const links = linksStore.links;
const servicesStore = useServicesStore();
const services = computed(() => servicesStore.services);


const theme = useTheme()


const icons = [
    {icon: "mdi-facebook", url: 'https://facebook.com/'},
    {icon: "mdi-twitter", url: 'https://twitter.com/'},
    {icon: "mdi-whatsapp", url: 'https://api.whatsapp.com/'},
    {icon: "mdi-linkedin", url: 'https://linkedin.com/'},
    {icon: "mdi-instagram", url: 'https://www.instagram.com/'}
];

const isDarkTheme = computed(() => {
    return theme.global.current.value.dark
});

function getTitlesOfServices() {
    const titles = [];
    services.value.forEach((category) => {
        category.servicios.forEach((service) => {
            titles.push(service.title);
        });
    });
    return titles;
}
</script>
<template>
    <section>
        <v-footer class="bg-secondary pa-0">
            <v-row no-gutters>
                <v-col cols="12">
                    <v-container>
                        <v-row align="center" justify="start">
                            <v-col cols="12" md="auto">
                                <p>¡Conéctate con nosotros en nuestras redes sociales!</p>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col class="d-flex justify-center" cols="12" md="auto">
                                <v-btn v-for="(item, i) in icons" :key="i"
                                       :href="item.url"
                                       :icon="item.icon "
                                       class="mr-1"
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
                    <a class="" href="/#home">
                        <v-img :src="!isDarkTheme?logoLight:logoDark" max-height="300"></v-img>
                    </a>
                </v-col>
                <v-col :class="!isDarkTheme?'bg-grey-lighten-4':'bg-secondary-darken-1'" cols="12" md="9">
                    <v-container>
                        <v-row class="pb-7 mt-5">
                            <v-col cols="12" md="4">
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
                            <v-col cols="12" md="4">
                                <v-list class="bg-transparent">
                                    <v-list-subheader class="font-weight-bold text-primary">
                                        Servicios
                                    </v-list-subheader>

                                    <v-list-item
                                        v-for="(item, i) in getTitlesOfServices().slice(0, Math.ceil(getTitlesOfServices().length / 2))"
                                        :key="i"
                                        :value="item"
                                        class="bg-transparent"
                                        color="primary"
                                        rounded="xl"
                                    >
                                        <v-list-item-title class="text-lowercase" v-text="item"></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-list class="bg-transparent">
                                    <v-list-subheader class="font-weight-bold text-primary">

                                    </v-list-subheader>

                                    <v-list-item
                                        v-for="(item, i) in getTitlesOfServices().slice(Math.ceil(getTitlesOfServices().length / 2))"
                                        :key="i"
                                        :value="item"
                                        class="bg-transparent"
                                        color="primary"
                                        rounded="xl"
                                    >
                                        <v-list-item-title class="text-lowercase" v-text="item"></v-list-item-title>
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

                <v-col class="bg-primary" cols="12">
                    <v-container>
                        <p class="text-white float-right d-sm-inline white--text">
                            <a class="text-body-1 mx-auto text-grey text-left mb-0" @click="showDialog = true">
                                Términos y Condiciones
                            </a>
                            <span>|</span>
                            <a class="base-body text-body-1 mx-auto text-grey text-left mb-0"> Políticas de
                                Privacidad
                            </a>
                            <span> | &nbsp; </span>
                            Diseñado por
                            <a class="text-decoration-none" href="mailto:geilerelias@gmail.com"> Geiler Elias Radillo
                                Sarmiento </a>
                            © 2023
                        </p>
                    </v-container>
                </v-col>
            </v-row>
        </v-footer>
    </section>

    <v-dialog
        v-model="showDialog"
        :scrim="false"
        fullscreen
        transition="dialog-bottom-transition"
    >
        <v-card>
            <v-toolbar
                color="primary"
                dark
            >
                <v-btn
                    dark
                    icon
                    @click="showDialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                    Términos y Condiciones
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                        variant="text"
                        @click="showDialog = false"
                    >
                        cerrar
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <p>
                    Bienvenido a INGENIERIA Y CONSTRUCCION DAVEL SAS. Creada para ofrecer diversas soluciones de
                    construcción, mantenimiento y adecuación de obras civiles y arquitectónicas.
                </p>
                <p>
                    Contamos con personal comprometido, calificado y especializado para cada una de sus
                    necesidades,
                    brindando con honestidad un servicio de calidad y eficiencia a nuestros clientes.
                </p>
                <p>
                    Al utilizar nuestros servicios, usted acepta los siguientes términos y condiciones:
                </p>
                <ul>
                    <li> - Los precios y plazos están sujetos a cambios sin previo aviso.</li>
                    <li> - Nos reservamos el derecho de rechazar cualquier proyecto por cualquier motivo.</li>
                    <li> - Su satisfacción es nuestra prioridad.</li>
                </ul>
                <p>
                    Gracias por confiar en INGENIERIA Y CONSTRUCCION DAVEL SAS.
                </p>

            </v-card-text>
            <v-card-actions>
                <v-btn @click="showDialog = false">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>


</template>

