import {defineStore} from 'pinia';

export const useDrawerStore = defineStore({
    id: 'drawer',
    state: () => ({
        isOpen: false,
    }),
    actions: {
        toggleDrawer() {
            this.isOpen = !this.isOpen;
        },
    },
});
