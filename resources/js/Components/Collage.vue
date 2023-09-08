<template>
    <v-row class="vuetify-photo-collage" :cols="calculateColumns()">
        <v-col v-for="(image, index) in images" :key="index">
            <v-img :src="image" alt="Collage Image" />
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    images: Array, // Recibe un array de rutas de imágenes
});

const calculateColumns = () => {
    // Calcula el número de columnas en función del espacio disponible
    const containerWidth = document.querySelector(".vuetify-photo-collage")?.offsetWidth || 1;
    const minColumnWidth = 200; // Ancho mínimo de columna deseado
    const numColumns = Math.floor(containerWidth / minColumnWidth);

    return numColumns > 0 ? numColumns : 1;
};
</script>

<style scoped>
.vuetify-photo-collage {
    gap: 10px;
}
</style>
