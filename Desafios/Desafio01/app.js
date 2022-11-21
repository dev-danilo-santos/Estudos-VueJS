new Vue ({
    el: "#desafio",
    data: {
        nome: "Danilo Santos",
        idade: "23",
        caminhoImg: "https://picsum.photos/200/300",
        
    },
    methods: {
        idadeMult(){
            return this.idade * 3
        },
        aleatorio(){
            return Math.random()*1;
        },
    },
})