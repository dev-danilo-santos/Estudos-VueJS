new Vue ({
    el: '#app',
    data: {
        contador : 0,
        X: 0,
        Y:0,

    },
    methods: {
       somar(){
        return this.contador++;
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