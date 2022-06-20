var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// função que não deixa a pagina recarregar, prever comportamento padrão da função..
    
    var form = document.querySelector("#form-adiciona");//extrai informações do paciente

    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    //adicionando paciente a tabela...
    adicionaPacenteNaTabela(paciente);
    
 

    form.reset();// reseta o formulário.....
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";//resera formulario e limpa as mensagens de erros
});

function adicionaPacenteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
   
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));//Cria um novo elemento de parágrafo e adiciona-o ao final do documento
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    /*A diferença entre as funções nomeadas e as funções anônimas
A escutar eventos do browser com a função addEventListener()
Que a função criadora de elementos é .createElement()
A pegar o valor de um input por meio da propriedade .value
A acessar os input de um form por meio da propriedade .name
A adicionar elementos na página e dentro de outros elementos com a função appendChild()*/
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if ( paciente.nome.length == 0 ){
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if( paciente.gordura.length == 0 ){
        erros.push("Agordura não pode ser em branco");
    }

    if( paciente.peso.length == 0 ){
        erros.push("O peso não pode ser em branco");
    }

    if( paciente.altura.length == 0 ){
        erros.push("A altura não pode ser em branco");
    }
    
    return erros;
}
