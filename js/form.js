var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// função que não deixa a pagina recarregar, prever comportamento padrão da função..
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;//serve para chamar o conteúdo e o valor dos inputs
    var peso = form.peso.value;//serve para chamar o conteúdo e o valor dos inputs
    var altura = form.altura.value;//serve para chamar o conteúdo e o valor dos inputs
    var gordura = form.gordura.value;//serve para chamar o conteúdo e o valor dos inputs

    var pacienteTr = document.createElement("tr");//pega qualquer tag do HTML

    var nomeTd = document.createElement("td");//serve para criar um dado em cada Tr.
    var pesoTd = document.createElement("td");//serve para criar um dado em cada Tr.
    var alturaTd = document.createElement("td");//serve para criar um dado em cada Tr.
    var gorduraTd = document.createElement("td");//serve para criar um dado em cada Tr.
    var imcTd = document.createElement("td");//serve para criar um dado em cada Tr.
    
    nomeTd.textContent = nome;//serve para exibir o elememto na pagina
    pesoTd.textContent = peso;//serve para exibir o elememto na pagina
    alturaTd.textContent = altura;//serve para exibir o elememto na pagina
    gorduraTd.textContent = gordura;//serve para exibir o elememto na pagina

    pacienteTr.appendChild(nomeTd);//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(pesoTd);//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(alturaTd);//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(gorduraTd);//Cria um novo elemento de parágrafo e adiciona-o ao final do documento

    /*A diferença entre as funções nomeadas e as funções anônimas
A escutar eventos do browser com a função addEventListener()
Que a função criadora de elementos é .createElement()
A pegar o valor de um input por meio da propriedade .value
A acessar os input de um form por meio da propriedade .name
A adicionar elementos na página e dentro de outros elementos com a função appendChild()*/
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});