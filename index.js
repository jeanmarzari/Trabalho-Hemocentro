/*===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====*/
function menu(){
var opcao = Number( (prompt`
1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair`))

switch (opcao)
{
    case 1:
        cadastrarDoador();
        break
    case 2:
        listarDoadores();
        break
    case 3:
        buscarTipoSangue();
        break
    case 4:
        buscarPorData();
        break
    case 5:
        break
    }
}

var arrayDoadores = []


function cadastrarDoador() {
    nome = prompt("Digite seu nome")
    idade = Number(prompt("Idade"))
    peso = Number(prompt("peso"))
    tipoSanguineo = prompt("Tipo sanguineo")
    ultimaDoacao = prompt("Última doacao")

var doador = {
    nome: nome,
    idade: idade,
    peso: peso,
    tipoSanguineo: tipoSanguineo,
    ultimaDoacao: ultimaDoacao
}

arrayDoadores.push(doador)
menu()
}

function listarDoadores() {
    var listarDoadores = []
    for(var i=0; i < arrayDoadores.length; i++) {
        listarDoadores.push(`${arrayDoadores[i].nome}   |   ${arrayDoadores[i].idade}   |   ${arrayDoadores[i].peso}    |    ${arrayDoadores[i].tipoSanguineo}      |     ${arrayDoadores[i].ultimaDoacao}`) 
    } 
    var retornarDoadores = prompt(`nome | idade | peso | tipo sanguineo | última doação
    ${listarDoadores}
    Digite qualquer tecla para continuar:`)
    if (retornarDoadores !== null){
        menu();
    }

}

function buscarTipoSangue() {
    var tipo = prompt("Digite o tipo sanguine desejado")
    var doadoresDisponiveis = []
    for(var i=0; i < arrayDoadores.length; i++) {
        if (arrayDoadores[i].tipoSanguineo === tipo){
            doadoresDisponiveis.push(`${arrayDoadores[i].nome}   |   ${arrayDoadores[i].idade}   |   ${arrayDoadores[i].peso}    |    ${arrayDoadores[i].tipoSanguineo}      |     ${arrayDoadores[i].ultimaDoacao}`) 
            var retornarDoadores = prompt(`nome | idade | peso | tipo sanguineo | última doação
            ${doadoresDisponiveis}
            Digite qualquer tecla para continuar:`)
            if (doadoresDisponiveis !== null){
                menu();
            }  
         }
         else {
            menu();
         }

        }
    }
   
function buscarPorData() {
    var data = prompt("Digite a data desejada (dd/mm/aaaa)");
    let trechosData = data.split("/");
    let comparadorData = [trechosData[2], trechosData[1], trechosData[0]].join("-");
    var doadoresDisponiveis = []

    for (i = 0; i < arrayDoadores.length; i++) {
        let trechosArray = arrayDoadores[i].ultimaDoacao.split("/");
        let comparadorArray = [trechosArray[2], trechosArray[1], trechosArray[0]].join("-");
    
        if (comparadorArray <= comparadorData)
            doadoresDisponiveis.push(`${arrayDoadores[i].nome}   |   ${arrayDoadores[i].idade}   |   ${arrayDoadores[i].peso}    |    ${arrayDoadores[i].tipoSanguineo}      |     ${arrayDoadores[i].ultimaDoacao}`) 
            var retornarDoadores = prompt(`nome | idade | peso | tipo sanguineo | última doação
            ${doadoresDisponiveis} 
            Digite qualquer tecla para continuar:`)
           
         if (doadoresDisponiveis !== null){
                menu();
            }  
         
         else {
            menu();
         }

        }
}

menu();