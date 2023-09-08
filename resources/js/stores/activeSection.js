// activeSectionStore.js
import {defineStore} from 'pinia';

export const useActiveSectionStore = defineStore('activeSection', {
    state: () => ({
        activeSection: null,
    }),
    actions: {
        setActiveSection(section) {
            this.activeSection = section;
        },
    },
});
