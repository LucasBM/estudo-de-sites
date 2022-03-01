const itens = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'camiseta.png',
        quantidade: 0,
    },
    
    {
        id: 1 ,
        nome: 'short',
        img: 'camiseta.png',
        quantidade: 0,

    },
    
    {
        id: 2 ,
        nome: 'sapato',
        img:'camiseta.png',
        quantidade: 0,

    },
]

inicializar_loja = () => {
    var ContainerProdutos = document.getElementById("produtos");
    itens.map((val)=>{
        //ContainerProdutos.innerHTML+=`
        
        //<div class="produto_single">
        //    <img scr="`+val.img+`" />
        //   <p>`+val.nome+`</p>
        //    <a key="`+val.id+`" #href="">Adicionar ao carrinho!<a/>
        //</div>
        
        //`;
        console.log()
    })
}

inicializar_loja();