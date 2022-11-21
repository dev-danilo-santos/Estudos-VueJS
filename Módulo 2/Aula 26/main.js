new Vue ({
    el: '#app',
    data: {
        contador : 0,
        X: 0,
        Y:0,

    },
    methods: {
       somar(passo, event){
        console.log(event)
        return this.contador+=passo;
       },
       zerar(){
        return this.contador = 0;
       },
       cordenadas(e) {
        this.X = e.clientX;
        this.Y = e.clientY;
        
       }
    },
})