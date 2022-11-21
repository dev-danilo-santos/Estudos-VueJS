new Vue ({
    el: '#app',
    data: {
        titulo : "Utilizando Vue JS"
    },
    methods: {
        inserir(e) {
            this.titulo = e.target.value
        }
    },
})