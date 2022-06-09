var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// função que não deixa a pagina recarregar, prever comportamento padrão da função..
    
    var form = document.querySelector("#form-adiciona");//extrai informações do paciente

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    //adicionando paciente a tabela...
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();// reseta o formulário.....
});

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