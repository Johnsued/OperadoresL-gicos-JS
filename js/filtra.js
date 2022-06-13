var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");// Vamos adicionar um novo evento nele, o evento de input que é responsável por detectar quando o usuário começar a digitar no campo

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressão = new RegExp(this.value,"i");
    
            if (!expressão.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");//Sabemos que o que foi digitado pelo usuário pode ser acessado através do this.value, afinal o this neste caso é o <input> e podemos ter acesso ao seu contéudo com a propriedade .value. Se detectarmos algo escrito no campo, vamos esconder todos os pacientes da tabela colocando a classe .invisivel, caso contrário, vamos remover a classe invisivel e exibi-los novamente
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
  
});