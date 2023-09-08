// services.js
import {defineStore} from 'pinia';

import imagen1 from '../../images/services/imagen1.jpg';
import imagen2 from '../../images/services/imagen2.jpg';
import imagen3 from '../../images/services/imagen3.jpg';
import imagen4 from '../../images/services/imagen4.jpg';
import imagen5 from '../../images/services/imagen5.jpg';
import imagen6 from '../../images/services/imagen6.jpg';
import imagen7 from '../../images/services/imagen7.jpg';
import imagen8 from '../../images/services/imagen8.jpg';
import imagen9 from '../../images/services/imagen9.jpg';
import imagen10 from '../../images/services/imagen10.jpg';
import imagen11 from '../../images/services/imagen11.jpg';
import imagen12 from '../../images/services/imagen12.jpg';
import imagen13 from '../../images/services/imagen13.jpg';
import imagen14 from '../../images/services/imagen14.jpg';
import imagen141 from '../../images/services/imagen14.1.jpg';
import imagen142 from '../../images/services/imagen14.2.jpg';
import imagen15 from '../../images/services/imagen15.jpg';
import imagen151 from '../../images/services/imagen15.1.jpg';
import imagen152 from '../../images/services/imagen15.2.jpg';


export const useServicesStore = defineStore('services', {
    state: () => ({
        services: [
            {
                "clasificacion": "Energías Renovables y Eficiencia Energética",
                "icono": "mdi-solar-power",
                "servicios": [
                    {
                        "title": "SUMINISTRO E INSTALACIÓN DE SISTEMAS DE CONVERSIÓN DE ENERGÍA SOLAR PARA BOMBEO DE AGUA EN ZONAS NO INTERCONECTADAS",
                        "description": "<p>Nuestra empresa desarrolla todas las etapas de proyectos con transparencia, calidad y excelencia orientando a los usuarios durante todo el proceso, desde el inicio hasta la puesta en marcha de los equipos de energía eólica o solar. El tiempo de vida útil de los sistemas de conversión de energías renovables se ve sustentado en un buen estudio de viabilidad de la instalación. La cuantificación del recurso, simulación de las condiciones ambientales, selección de equipos, planeación y control de los sistemas nos permiten cumplir con las expectativas de nuestros clientes.</p>"
                        , 'photos': [{
                            source: imagen1
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "INSTALACIÓN DE SISTEMAS DE CONVERSIÓN DE ENERGÍA RENOVABLE",
                        "description": "<p>Cubriendo todas las expectativas de nuestros clientes ofrecemos un soporte técnico en la instalación de los sistemas de conversión eólicos y solares en cualquier lugar, brindando la mayor seguridad y cumplimiento a todos los servicios que tiene en capacidad de ofrecer DAVEL SAS. Con el propósito de diseño confiable y seguro nos percatamos de hacer un dimensionamiento de los recursos meteorológicos (viento y radiación solar) a través de la instalación de mástiles medición. Una buena campaña de medición de los recursos asegura el éxito del proyecto sin sacrificar el presupuesto dispuesto para el emplazamiento.</p>"
                        , 'photos': [{
                            source: imagen2
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "INGENIERÍA, SUMINISTRO Y MANTENIMIENTO",
                        "description": "<p>Este servicio está asociado a los Sistemas de Conversión de Energía Eólica y Sistemas de bombeo por ser equipos dinámicos caracterizados por elementos mecánicos que se ven sometidos a fatiga y deterioro con el tiempo. El mantenimiento predictivo de las turbinas eólicas, motobombas y electrobombas es acompañado de un sistema de monitoreo integral que registra a través de un software el comportamiento de la máquina.</p>",
                        'photos': [{
                            source: imagen3
                        }, {
                            source: imagen4
                        }],
                        'layout': [1, 1],
                        'height': ['25vh', '25vh']
                    },
                    {
                        "title": "PROSPECCIÓN Y PREDICCIÓN DE RECURSOS RENOVABLES",
                        "description": "<p>Nuestra empresa desarrolla todas las etapas de proyectos con transparencia, calidad y excelencia orientando a los usuarios durante todo el proceso, desde el inicio hasta la puesta en marcha de los equipos de energía eólica o solar. El tiempo de vida útil de los sistemas de conversión de energías renovables se ve sustentado en un buen estudio de viabilidad de la instalación. La cuantificación del recurso, simulación de las condiciones ambientales, selección de equipos, planeación y control de los sistemas nos permiten cumplir con las expectativas de nuestros clientes.</p>"
                        , 'photos': [{
                            source: imagen5
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "SERVICIO POS-VENTA",
                        "description": "<p>El seguimiento de las condiciones de las turbinas eólicas, motobombas y electrobombas lo puede hacer directamente el usuario quien podrá reportar daños directamente a DAVEL SAS o informar la necesidad del mantenimiento. Nuestra compañía realiza la oportuna asistencia de las inquietudes de los usuarios a través de la web y visitas puntuales al lugar del emplazamiento.</p>"
                        , 'photos': [{
                            source: imagen6
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "SISTEMAS DE RESPALDO DE ENERGÍA ELECTRICA EN TELECOMUNICACIONES",
                        "description": "<p>Construcción de desarrollos tecnológicos en sostenibilidad y autonomía de energía eléctrica. Servicios de ingeniería para diseño de sistemas de conversión de energía solar y eólica. Inspección y asistencia técnica en campo. Servicios de campo para implantación de sistemas de respaldos de energía eléctrica convencionales y no convencionales. Integración de soluciones que abarcan múltiples tecnologías y fabricantes en Sistemas de Conversión de Energía Solar, Eólica, Cercas Eléctricas y Bioclimática. Elaboración de planes de mantenimiento preventivo para sistemas de suministro de energía eléctrica en zonas no interconectadas. Evaluación y supervisión de operación, inspección y verificación de garantías. Mediciones, pruebas, optimización y certificación. Optimización en el uso de recursos renovables para la generación de energía. Suministro, configuración e instalación de pequeñas centrales de energía eléctrica haciendo uso de recursos renovables.</p>"
                        , 'photos': [{
                            source: imagen7
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    }
                ]
            },
            {
                "clasificacion": "Ingeniería y Construcción",
                "icono": "mdi-hard-hat",
                "servicios": [
                    {
                        "title": "DISEÑO Y EJECUCIÓN DE TODA OBRA CIVIL EN GENERAL.",
                        "description": "<p>Dentro de nuestro servicio, se encuentra la rama de las construcciones civiles, tales como: DISEÑO Y CONSTRUCCION DE CASAS Y EDIFICACIONES, DISEÑO Y CONSTRUCCION DE PUENTES Y VIAS, REDES DE RIEGO, DISEÑO DE ALCANTARILLADOS, DISEÑOS DE ACUEDUCTOS, CONSTRUCCION DE PISCINAS, EMBOTELLADORAS DE AGUA CON OZONO Y LUZ ULTRAVIOLETA, DISEÑOS Y CONSTRUCCION HIDROSANITARIOS PARA VIVIENDA, CLINICAS Y HOSPITALES, DISEÑOS Y CONSTRUCCION DE RED CONTRA INCENDIO, PERFORACIÓN DE POZOS, PLANTAS DE TRATAMIENTO DE AGUAS RESIDUALES, PLANTAS DE TRATAMIENTO DE AGUA POTABLE, INTERVENTORIAS EN OBRAS HIDRAULICAS Y CIVILES, OBRAS CIVILES EN GENERAL, ESTUDIOS DE SUELOS Y PRUEBAS DE MATERIALES, SUMINISTRO DE TUBERÍA PVC Y ACCESORIOS (ALCANTARILLADOS ACUEDUCTOS Y ELECTRICOS), GEOSISTEMAS (GEOMEMBRANAS, GEOTEXTILES, GEOMALLAS), PRUEBAS HIDROSTATICAS (REDES ACUEDUCTO, ALCANTARILLADO, GAS), CONSULTORIA TÉCNICA EN GENERAL, SUMINISTRO E INSTALACION DE HIDROPANELES QUE CONVIERTE EL AIRE EN AGUA POTABLE.</p>"
                        , 'photos': [{
                            source: imagen8
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "HIDROPANELES",
                        "description": "<p>La energía solar alimenta el panel completamente fuera de la red. Los ventiladores aspiran el aire del ambiente y lo dirigen a un material absorbente higroscópico que atrapa el vapor de agua del aire. El vapor de agua se extrae y se condensa pasivamente en un líquido que se almacena en el depósito. Se agregan minerales para hacer un agua potable perfecta.</p>"
                        , 'photos': [{
                            source: imagen9
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "DISEÑOS Y CONSULTORÍA",
                        "description": "<p>Nuestra empresa, cuenta con profesionales especializados y laboratorio para desarrollar las actividades de consultoría y diseño, estamos en capacidad de ofrecer los siguientes servicios: Estudios Geotécnicos, Diseños Arquitectónicos, Diseños Estructurales, Diseños Hidráulicos, Diseños de Cimentación, Diseños de Pavimento, Diseños de Vías. Contamos con nuestro propio laboratorio para realizar los ensayos de suelos, agregados, concretos y mezcla asfálticas según normatividad vigente. Lo anterior se cotizará de acuerdo a la complejidad del proyecto y a sus especificaciones. <br>" +
                            "<br>CONDICIONES COMERCIALES." +
                            "<br>" +
                            "• Aceptar por escrito la propuesta técnica y comercial presentada por INGENIERIA Y CONSTRUCCION DAVEL, formalizando el servicio a través de una orden de compra, orden de servicio o contrato. \n" +
                            "<br>" +
                            "• La forma de pago: de acuerdo a condiciones comerciales establecidas por el cliente e INGENIERIA Y CONSTRUCCION DAVEL." +
                            "<br>" +
                            "• Disponibilidad una vez legalizada la orden de servicio entre el cliente e INGENIERIA Y CONSTRUCCION DAVEL.</p>"
                        , 'photos': [{
                            source: imagen10
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    }
                ]
            },
            {
                "clasificacion": "Servicios Eléctricos y Comunicaciones",
                "icono": "mdi-flash",
                "servicios": [
                    {
                        "title": "CONDICIONES COMERCIALES.",
                        "description": "<p>Aceptar por escrito la propuesta técnica y comercial presentada por INGENIERIA Y CONSTRUCCION DAVEL, formalizando el servicio a través de una orden de compra, orden de servicio o contrato. La forma de pago: de acuerdo a condiciones comerciales establecidas por el cliente e INGENIERIA Y CONSTRUCCION DAVEL. Disponibilidad una vez legalizada la orden de servicio entre el cliente e INGENIERIA Y CONSTRUCCION DAVEL.</p>"
                        , 'photos': [{
                            source: imagen11
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "SERVICIOS ELECTRICOS CONVENCIONALES",
                        "description": "<p>Comercialización de energía eléctrica en el mercado de energía mayorista y la bolsa de energía nacional los sistemas de Agencia y corretaje. Desarrollo y/o gerencia de proyectos y diseños de generación, comercialización y distribución de energía eléctrica. Diseño, Construcción y operación de plantas de generación de energía eléctrica.(Cogeneración y Autogeneración) Estructuración y gerencia de financieras para proyectos de generación, comercialización y distribución de energía eléctrica. Asesoría técnica, operativa, financiera, administrativa y jurídica en proyectos de ingeniería eléctrica. Actividades de interventora, consultaría, asesoría general y gestión empresarial en obras de generación, comercialización, distribución y construcción de redes de energía eléctrica. Comercializar toda clase de productos relacionados directa o indirectamente con las actividades de generación de energía eléctrica. Diseño y desarrollo de obras de modernización, expansión, operación y mantenimiento de sistemas de alumbrado público y privado, redes eléctricas, electrificación rural, alumbrados especiales y navideños. Diagnósticos de sistemas de alumbrado público, redes de distribución eléctrica en alta, media y baja tensión e instalaciones internas residenciales industriales y especiales. Construcción, Administración, Operación, Mantenimiento, y remodelación de Activos Eléctricos en Generación, transmisión, distribución Alumbrado Público E Instalaciones Internas.</p>"
                        , 'photos': [{
                            source: imagen12
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "EFICIENCIA ENERGETICA",
                        "description": "<p>La Eficiencia Energética (EE) es el conjunto de acciones que permiten optimizar la relación entre la cantidad de energía consumida y los productos y servicios finales obtenidos. Por eso, ser eficientes con el uso de la energía significa “hacer más con menos”. DAVEL SAS incentiva a usar la energía de manera eficiente nos permite realizar todas nuestras actividades y ahorrar dinero. En Beneficios se presentan las ventajas en términos económicos y medioambientales, sumadas a los beneficios a nivel país y la reducción del impacto ambiental. Realizada la simulación de potencia en iluminarias led con respecto a las iluminarias convencionales se refleja un ahorro mayor al 55% en consumo total de la simulación. Por lo tanto es urgente el cambio de las iluminarias, ya que tendrán beneficios tanto económicos, de salud y legales con la ley 1715.</p>"
                        , 'photos': [{
                            source: imagen13
                        }],
                        'layout': [1],
                        'height': ['50vh']
                    },
                    {
                        "title": "ILUMINACION ZONAS COMUNES Y VÍAS",
                        "description": "<p>DAVEL SAS comprometido con la Eficiencia Energética (EE) de nuestro país, ha desarrollado proyectos en pro a contribuir con el desarrollo social y mitigar el impacto tanto económico como ambiental de nuestro entorno. Por tal razón se ha desarrollado proyectos en los cuales se han instalados sistemas híbridos (energía convencional – energía fotovoltaica) para las zonas comunes de conjuntos residenciales, dando prioridad a la red solar.</p>"
                        , 'photos': [{
                            source: imagen14
                        }, {
                            source: imagen141
                        }, {
                            source: imagen142
                        }],
                        'layout': [2, 1],
                        'height': ['20vh', '30vh']
                    },
                    {
                        "title": "DISEÑO Y EJECUCIÓN DE CABLEADO ESTRUCTURADO VOZ Y DATOS",
                        "description": "<p>DAVEL SAS comprometido con la comunicación, y entendiendo la importancia de una comunicación en tiempo real, presenta la solución para hacer más efectivas las comunicaciones, mediante cableado estructurado de diferentes categorías, y la implementación de voz IP.</p>"
                        , 'photos': [{
                            source: imagen15
                        }, {
                            source: imagen151
                        }, {
                            source: imagen152
                        }],
                        'layout': [1, 2],
                        'height': ['30vh', '20vh']
                    }
                ]
            }
        ]
    })
});
