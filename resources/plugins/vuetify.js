// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//icons
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#0a0a0a',
                    'primary-darken-1': '#282828',
                    'primary-darken-2': '#212021',
                    secondary: '#EDC315',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                }
            },
            dark: {
                colors: {
                    primary: '#EDC315',
                    'primary-darken-1': '#efb810',
                    'primary-darken-2': '#d4a413',
                    secondary: '#1f1f1f',
                    'secondary-darken-1': '#282828',
                    'secondary-darken-2': '#212021',
                    error: '#f44336',
                    warning: '#ff9800',
                    info: '#00bcd4',
                    success: '#4caf50',
                }
            },

        },
    },
});

export default vuetify;



