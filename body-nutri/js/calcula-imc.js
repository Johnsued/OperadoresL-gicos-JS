var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");
//Há várias formas de fazermos isso, e uma delas, bastante conhecida por todo mundo que já viu algo de lógica de programação é o loop for. 
//. Ele receberá três argumentos: a declaração da variável inicial, até onde queremos que essa variável cresça, e o que queremos fazer no fim de cada iteração.
for(var i= 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);// coném meu true ou false....
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
    console.log("Altura inválido");
    alturaEhValida = false;
    tdImc.textContent = "altura inválida!";
    paciente.classList.add("paciente-invalido");// adiciona lista do css da pagina
    }

    if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}



function calculaImc(peso,altura){//função criada para poder ser exportada para minha form.js e fazer o calculo do imc dos novos pacientes...
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
} 
    
    

   