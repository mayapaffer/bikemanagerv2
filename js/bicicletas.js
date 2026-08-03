
const bicicletas = [] //array vazio que vai receber as informações de cada bicicleta 

const tabelaBicicletas = document.getElementById("tabelaBicicletas")

const formBicicleta = document.getElementById("formBicicleta")
const marca = document.getElementById("marca")
const modelo = document.getElementById("modelo")
const aro = document.getElementById("aro")
const chassi = document.getElementById("chassi")

let proximoIdBicicleta = 1 //incrementa o id da proxima bicicleta em mais 1, pra quando excluir nao usar o mesmo id 

formBicicleta.addEventListener("submit", function(event) {

    event.preventDefault()

    cadastrarBicicleta(
        1,
        marca.value,
        modelo.value,
        aro.value,
        chassi.value
    )
    
    atualizarTabelaBicicletas()

    formBicicleta.reset() 
})

function cadastrarBicicleta(clienteId, marca, modelo, aro, chassi) {

    const novaBicicleta = {

        id: proximoIdBicicleta++,
        cliente: clienteId,
        marca: marca,
        modelo: modelo,
        aro: aro,
        chassi: chassi
    }

    bicicletas.push(novaBicicleta)
} //cadastra uma bicicleta e coloca no array bicicletas


function listarBicicletas() { 
     
    bicicletas.forEach(bicicleta => {
    
        console.log(`ID: ${bicicleta.id} | Marca: ${bicicleta.marca} | Modelo: ${bicicleta.modelo} | Aro: ${bicicleta.aro} | Chassi: ${bicicleta.chassi}`)
    })
} //lista as bicicletas cadastradas no console 


function buscarBicicleta(id) {

    const bicicletaEncontrada = bicicletas.find(bicicleta => bicicleta.id === id) 

    if(bicicletaEncontrada) {

        console.log("Bicicleta encontrada")
        console.log(bicicletaEncontrada)
    } else {

        console.log("Bicicleta nao encontrada")
    }
} //procura a bicicleta no array bicicletas e compara com id, se existir bicicleta ele lista se nao existir ele da erro


function excluirBicicleta(id) {

    const indiceBicicleta = bicicletas.findIndex(bicicleta => bicicleta.id === id)

    if(indiceBicicleta !== -1) {
        
        bicicletas.splice(indiceBicicleta, 1) 

        console.log("Bicicleta excluida com sucesso")

    } else {

        console.log("Bicicleta não encontrada")
    }
} //procura a bicicleta pelo id se existir ele exclui e se nao existir da erro


function editarBicicleta(id, novaMarca, novoModelo, novoAro, novoChassi) {

    const bicicletaEncontrada = bicicletas.find(bicicleta => bicicleta.id === id)

    if(bicicletaEncontrada) {

        bicicletaEncontrada.marca = novaMarca
        bicicletaEncontrada.modelo = novoModelo
        bicicletaEncontrada.aro = novoAro
        bicicletaEncontrada.chassi = novoChassi

        console.log("Bicicleta editada com sucesso")
        console.log(bicicletaEncontrada)
    } else {

        console.log("Bicicleta não encontrada")
    }
} //procura no array bicicletas pelo id se existir ele altera marca modelo aro e chassi  

function atualizarTabelaBicicletas() {

    tabelaBicicletas.innerHTML = ""

    bicicletas.forEach(bicicleta => {

        const linha = document.createElement("tr")

        linha.innerHTML = `
        
             <td>${bicicleta.id}</td>
             <td>${bicicleta.marca}</td>
             <td>${bicicleta.modelo}</td>
             <td>${bicicleta.aro}</td>
             <td>${bicicleta.chassi}</td>
             <td>
                <button class="btn-editar">Editar</button>
                <button class="btn-excluir">Excluir</button>
             </td>
        `

        tabelaBicicletas.appendChild(linha)
    })
}