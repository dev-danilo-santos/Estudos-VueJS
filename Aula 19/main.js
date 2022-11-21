new Vue ({
    el: '#app',
    data: {
        titulo : "Utilizando Vue JS",
       nome:'',
       link : 'https://google.com.br'
    },
    methods: {
        inserir(e) {
            //this.titulo = e.target.value
            this.nome = e.target.value
        },
        saudacao: function(){
            return "Boa semana " + this.nome + "."
        }
    },
})