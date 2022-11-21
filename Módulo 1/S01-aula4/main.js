new Vue ({
    el: '#app',
    data: {
        titulo: "Insira seu nome acima."
    },
    methods: {
        insereNome(e){
            this.titulo = "Olá " + e.target.value + " seja bem vindo"
        }
    },
})