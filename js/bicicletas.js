
const bicicletas = [] //array vazio que vai receber as informações de cada bicicleta 

let proximoIdBicicleta = 1 //incrementa o id da proxima bicicleta em mais 1, pra quando excluir nao usar o mesmo id 

function cadastrarBicicleta(clienteId, marca, modelo, aro, chassi) {

    const novaBicicleta = {

        id: proximoId++,
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