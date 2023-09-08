<script setup>

import arpidio from '../../images/team/arpidio.png';
import henry from '../../images/team/henry.png';
import diego from '../../images/team/diego.png';

const group = [
    {
        img: henry,
        name: 'JHON VÉLEZ',
        role: 'CEO & FUNDADOR',
        occupation: "Ingeniero civil",
        perfil: 'Ingeniero civil, con experiencia de mas de 10 años como profesional capacitado para contribuir en diseño, planeación, control y mantenimiento de obras y proyectos de infraestructuras, utilizando diferentes tecnologías para el desarrollo de las obras, tanto urbanas como rurales.'
    }, {
        img: diego,
        name: 'Diego Davila',
        role: 'CEO & FUNDADOR',
        occupation: "Ingeniero electrónico",
        perfil: 'Ingeniero electrónico con especialización en alta gerencia y diplomados en competitividad, transformación digital, energías renovables entre otros. Sus 12 años de experiencia, le han permitido fortalecer sus capacidades administrativas y operativas, permitiendo desarrollar los proyectos con calidad y cumplimiento de las metas pactadas.'
    },
    {
        img: arpidio,
        name: 'Arpidio Goyeneche',
        role: 'DIRECTOR DE OPERACIONES',
        occupation: "Técnico certificado",
        perfil: 'Arpidio Goyeneche,  llanero residenciado en Villavicencio Meta, técnico certificado en energias renovables, para manejo, diseño y operacion fotovoltaica. Certificado por la Super Intendencia de Industria y Comercio para la conversion de automotores a 100 % electricos.\n' +
            'Amplia experiencia en el manejo y administración de maquinaria amarilla para obras civiles y arquitectónicas.\n' +
            'Elaboración de pozos para la piscicultura'
    }
]
</script>

<template>
    <section id="team" class="mb-12 section">

        <div class="text-center py-9 grey lighten-5 mb-4">
            <v-avatar class="mb-4 bg-primary" size="60 ">
                <v-icon class="text--white" color="white">mdi-account-group-outline</v-icon>
            </v-avatar>

            <h1
                class="text-center text-uppercase text-h5 font-weight-bold mb-2  animate__animated animate__zoomIn"
            >
                Nuestro equipo
            </h1>
            <v-responsive class=" rounded-lg bg-secondary mx-auto mb-2" style="max-width: 100px;">
                <v-divider class="pb-1 rounded-lg" light/>
            </v-responsive>

            <p class="pb-3 px-16">
                En nuestro equipo, contamos con profesionales apasionados y altamente capacitados en diversas
                disciplinas. Cada miembro aporta su experiencia única y conocimientos especializados para abordar los
                desafíos más exigentes. Trabajamos en conjunto con un objetivo común: ofrecer soluciones innovadoras y
                de alta calidad que superen las expectativas de nuestros clientes. Juntos, estamos comprometidos con la
                excelencia y la creación de un impacto positivo en cada proyecto que abordamos.
            </p>
        </div>

        <v-container>

            <v-row align="center" class="d-flex justify-center align-center" justify="center">
                <v-col
                    v-for="(item, index) in group"
                    :key="index"
                    class="mx-auto d-flex flex-column align-center justify-center"

                >
                    <div>
                        <v-hover v-slot="{ isHovering, props }">
                            <v-responsive class="mx-auto mx-md-0 " width="250">
                                <v-card
                                    class="pa-0 ma-0 "
                                    v-bind="props"

                                >
                                    <v-img :src="item.img" class="ma-0 pa-0 fill-height">

                                        <v-expand-transition>
                                            <div
                                                v-if="isHovering"
                                                class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal "
                                                style="height: 100%;"
                                            >
                                                <v-card class="overflow-auto bg-transparent" elevation="0" height="300">
                                                    <v-card-text class="text-justify"
                                                                 v-text="item.perfil"></v-card-text>
                                                </v-card>
                                            </div>
                                        </v-expand-transition>
                                    </v-img>

                                </v-card>
                            </v-responsive>
                            <div class="text-center text-md-left">
                                <p class="font-weight-bold mt-1 text-uppercase">{{ item.name }}</p>
                                <p class="font-weight-light mt-1 text-uppercase">{{ item.role }}</p>
                                <p class="font-weight-bold  text-gray-500">{{ item.occupation }}</p>
                            </div>
                        </v-hover>
                    </div>
                </v-col>
            </v-row>
        </v-container>

    </section>

</template>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}
</style>
