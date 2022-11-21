 new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            window.alert("Exibindo alerta");
        },
        armazena(e){
            this.valor= e.target.value; 
        }
    },
})