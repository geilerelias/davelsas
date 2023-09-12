<script setup>

import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import Swal from 'sweetalert2'

const mail = useForm({
    name: '',
    email: '',
    subject: '',
    content: ''
})

const smAndUp = ref(null)


function enviar(mail) {
    mail.post("/send-mail", {
        preserveScroll: true,

        onSuccess: () => {
            Swal.fire(
                "Mensaje Enviado Exitosamente",
                "Su mensaje ha sido enviado con éxito. Agradecemos su contacto y responderemos a la brevedad posible.",
                "success"
            );
            mail.reset()
        },
        onError: errors => {
            let errorsMessage = Object.values(errors).join("<br>");

            Swal.fire({
                icon: "error",
                title: "Ups...",
                html: errorsMessage,
            });
        },

    })
}

</script>

<template>

    <section id="contact" class="section">
        <v-container>
            <v-row class="px-sm-12">
                <v-col class="text-center" cols="12">
                    <v-avatar class="mb-4 bg-primary text-center" size="60 ">
                        <v-icon class="text--white" color="white">mdi-email</v-icon>
                    </v-avatar>
                    <h1
                        class="text-center text-uppercase text-h5 font-weight-bold mb-2  animate__animated animate__zoomIn"
                    >
                        contáctanos
                    </h1>
                    <v-responsive class=" rounded-lg bg-secondary mx-auto mb-6" style="max-width: 100px;">
                        <v-divider class="pb-1 rounded-lg" light/>
                    </v-responsive>
                </v-col>

                <v-col class="cols-12" cols="12">
                    <div class="text-left my-12">
                        <h1 class="text-h6 font-weight-bold mb-2 text-left">
                            MANTENTE EN CONTACTO CON NOSOTROS
                        </h1>

                        <v-responsive class=" rounded-lg bg-secondary mr-auto mb-3" style="max-width: 100px;">
                            <v-divider class="pb-1 rounded-lg" light/>
                        </v-responsive>
                    </div>
                </v-col>

                <v-col cols="12" md="5">
                    <div>
                        <div class="pt-2 mb-0 d-flex">
                            <div class="d-inline-flex mb-3 align-self-start">
                                <v-avatar class="grey lighten-2" size="72">
                                    <v-icon color="secondary " size="36">mdi-map-marker</v-icon>
                                </v-avatar>
                            </div>
                            <div class="d-flex justify-center align-center">
                                <div class="d-inline ml-3">
                                    <h4 class="text-left text-h6  mb-1 secondary--text">Visítanos</h4>
                                    <p class="text-body-1  grey--text text--darken-1 text-left mb-0">
                                        Calle 41B N° 30 - 11 Ofc. 407
                                        <br>Barrio la Grama, V/cio – Meta.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <v-divider class="my-2"></v-divider>
                        <div class="pt-2 mb-0 d-flex">
                            <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                <!---->
                                <v-avatar class="grey lighten-2" size="72">
                                    <v-icon color="secondary " size="36">mdi-cellphone</v-icon>
                                </v-avatar>
                            </div>

                            <div class="d-flex flex-column justify-center align-center">
                                <div class="d-inline ml-3">
                                    <h4 class="text-left text-h6  mb-1 secondary--text">Llámanos</h4>
                                    <a class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                       href="tel:3132953949">+57 313 295 39 49</a>
                                    <br>
                                    <a class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                       href="tel:3165773803">+57 316 577 38 03</a>
                                    <br>
                                    <a class="base-body text-body-1 mx-auto grey--text text--darken-1 text-left mb-0"
                                       href="tel:3104885559 ">+57 310 488 55 59 </a>
                                </div>
                            </div>
                        </div>
                        <hr aria-orientation="horizontal" class="my-2 v-divider theme--light" role="separator"/>
                        <div class="pt-2 mb-0 d-flex align-center">
                            <div class="base-avatar d-inline-flex mb-3 align-self-start">
                                <v-avatar class="grey lighten-2" size="72">
                                    <v-icon color="secondary " size="36">mdi-email</v-icon>
                                </v-avatar>
                            </div>
                            <div class="d-flex flex-column justify-center  align-center">
                                <div class="d-inline ml-3">
                                    <h4 class="text-left text-h6  mb-1 secondary--text">Escríbenos</h4>
                                    <a class="text-body-1 grey--text text--darken-1 mb-0"
                                       href="mailto:comercial1@davelsas.com">comercial1@davelsas.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>

                <v-col class="" cols="12" md="7">
                    <v-card class="map-responsive" outlined>
                        <iframe
                            allowfullscreen=""
                            height="400"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15917.525924063613!2d-73.63892195276635!3d4.145150333257551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalle%2041B%20N%C2%B0%2030%20-%2011%20Ofc.%20407%20Barrio%20la%20Grama%2C%20V%2Fcio%20%E2%80%93%20Meta.!5e0!3m2!1ses-419!2sco!4v1693090858331!5m2!1ses-419!2sco"
                            style="border:0;"
                            width="100%">
                        </iframe>
                    </v-card>
                </v-col>

                <v-col class="d-flex justify-center">
                    <div>
                        <v-container class=" pa-0" space="4">
                            <v-row class=" justify-start" no-gutters>
                                <v-col>
                                    <div class="text-left my-12">
                                        <h1 class="text-h6 font-weight-bold mb-2 text-left">
                                            ENVÍENOS SU MENSAJE
                                        </h1>

                                        <v-responsive class=" rounded-lg bg-secondary mr-auto mb-3"
                                                      style="max-width: 100px;">
                                            <v-divider class="pb-1 rounded-lg" light/>
                                        </v-responsive>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>

                        <v-responsive></v-responsive>
                        <v-card max-width="600" outlined>
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    :lazy-validation="false"
                                    class="pa-5"
                                    @submit.prevent="enviar(mail)"
                                >

                                    <v-row>
                                        <v-col>
                                            <v-text-field v-model="mail.name"
                                                          :error-messages="mail.errors.name"
                                                          dense
                                                          label="Nombre"
                                                          variant="outlined"
                                                          @blur="mail.clearErrors('name')"

                                            />
                                        </v-col>
                                        <v-col>
                                            <v-text-field v-model="mail.email"
                                                          :error-messages="mail.errors.email"
                                                          dense
                                                          label="Email"
                                                          variant="outlined"
                                                          @blur="mail.clearErrors('email')"
                                            />
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field v-model="mail.subject"
                                                          :error-messages="mail.errors.subject"
                                                          dense
                                                          label="Asunto"
                                                          variant="outlined"
                                                          @blur="mail.clearErrors('subject')"

                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <v-textarea v-model="mail.content"
                                                        :error-messages="mail.errors.content"
                                                        dense
                                                        label="Descripción del mensaje"
                                                        variant="outlined"
                                                        @blur="mail.clearErrors('content')"
                                            />
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="d-flex justify-center">
                                                <v-btn :disabled="mail.processing"
                                                       :loading="mail.processing"
                                                       class="font-weight-bold "
                                                       color="primary" dark
                                                       @click="enviar(mail)">
                                                    Enviar mensaje
                                                </v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>

</style>
