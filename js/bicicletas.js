
const bicicletas = [] //array vazio que vai receber as informações de cada bicicleta 

const bicicletasSalvas = JSON.parse(localStorage.getItem("bicicletas"))

if(bicicletasSalvas) {
    bicicletas.push(...bicicletasSalvas)
}

window.addEventListener("load", function() {
    atualizarTabelaBicicletas()
})

const tabelaBicicletas = document.getElementById("tabelaBicicletas")
const botaoBicicleta =  document.getElementById("botaoBicicleta")

const formBicicleta = document.getElementById("formBicicleta")
const marca = document.getElementById("marca")
const modelo = document.getElementById("modelo")
const aro = document.getElementById("aro")
const chassi = document.getElementById("chassi")

let proximoIdBicicleta = 1 //incrementa o id da proxima bicicleta em mais 1, pra quando excluir nao usar o mesmo id 
let bicicletaEditando = null

formBicicleta.addEventListener("submit", function(event) {

    event.preventDefault()

    if(bicicletaEditando !== null) {

        editarBicicleta(
            bicicletaEditando,
            marca.value,
            modelo.value,
            aro.value,
            chassi.value
        )

        bicicletaEditando = null

    } else {
    
        cadastrarBicicleta(
        1,
        marca.value,
        modelo.value,
        aro.value,
        chassi.value
       )
    }
    
    atualizarTabelaBicicletas()

    formBicicleta.reset() 

    botaoBicicleta.textContent = "Cadastrar Bicileta"
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

    localStorage.setItem("bicicletas", JSON.stringify(bicicletas))
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

        localStorage.setItem("bicicletas", JSON.stringify(bicicletas))

        console.log("Bicicleta excluida com sucesso")

        atualizarTabelaBicicletas()

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

        localStorage.setItem("bicicletas", JSON.stringify(bicicletas))

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
                <button class="btn-editar" onclick="prepararEdicaoBicicleta(${bicicleta.id})">Editar</button>
                <button class="btn-excluir" onclick="excluirBicicleta(${bicicleta.id})">Excluir</button>    
             </td>
        `

        tabelaBicicletas.appendChild(linha)
    })
}

function prepararEdicaoBicicleta(id) {
    
    const bicicleta = bicicletas.find(bicicleta => bicicleta.id === id)

    if(!bicicleta) return 

    marca.value = bicicleta.marca
    modelo.value = bicicleta.modelo
    aro.value = bicicleta.aro
    chassi.value = bicicleta.chassi

    bicicletaEditando = id 
    botaoBicicleta.textContent = "Salvar Alteração"
}


window.excluirBicicleta = excluirBicicleta
window.prepararEdicaoBicicleta = prepararEdicaoBicicleta