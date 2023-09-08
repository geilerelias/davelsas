import {defineStore} from 'pinia';

export const useLinksStore = defineStore('links', {
    state: () => ({
        links: [

            {
                "name": "Inicio",
                "route": "#home",
                "icon": "mdi-home"
            },
            {
                "name": "Nosotros",
                "route": "#about-us",
                "icon": "mdi-account-question"
            },
            {
                "name": "Servicios",
                "route": "#services",
                "icon": "mdi-cogs"
            },

            {
                "name": "Equipo",
                "route": "#team",
                "icon": "mdi-account-group"
            },
            {
                "name": "Contacto",
                "route": "#contact",
                "icon": "mdi-email"
            },

        ],
    }),
});
