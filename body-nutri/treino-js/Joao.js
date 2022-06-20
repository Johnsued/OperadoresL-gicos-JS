var produtos = document.querySelectorALL(".produtos");

for( var i = 0 ; i < produtos.length ; i++){
    var produto  = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}