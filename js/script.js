const app = Vue.createApp({
    data() {
        return {
            titulo: 'Paradigmas de programacion - Vue',
            instrucciones: [
                'Crear una aplicacion en Vue js que haga el efecto de prendido y apagado de un foco',
                'En estatus apagado (imagen gris) al hacer click cambiar de estatus a "prendido" (imagen color) y viceversa',
                'Utilizar las imagenes que se adjuntan',
                'Compartir el LINK del repositorio'
            ],
            alumno: 'Bernardo Alfonso Borunda Jaquez',
            matricula: '314788',
            focoEncendido: false
        }
    },
    methods: {

    },
    computed: {

    }
});

const vm = app.mount('#app');