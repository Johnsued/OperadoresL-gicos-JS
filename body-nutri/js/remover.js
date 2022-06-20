var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;//onde o evento é escutado e encaminhado para remover no target.
   
    setTimeout(function(){//setTimeout é usado para segurar meio segundo até a linha sumir....
        paiDoAlvo.remove();//remove o elemento dentro do alvopai...
    },800);
   
   
});


