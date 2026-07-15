
const bicicletas = []

let proximoIdBicicleta = 1

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
}


function listarBicicletas() { 
     
    bicicletas.forEach(bicicleta => {
    
        console.log(`ID: ${bicicleta.id} | Marca: ${bicicleta.marca} | Modelo: ${bicicleta.modelo} | Aro: ${bicicleta.aro} | Chassi: ${bicicleta.chassi}`)
    })
}


function buscarBicicleta(id) {

    const bicicletaEncontrada = bicicletas.find(bicicleta => bicicleta.id === id) 

    if(bicicletaEncontrada) {

        console.log("Bicicleta encontrada")
        console.log(bicicletaEncontrada)
    } else {

        console.log("Bicicleta nao encontrada")
    }
}


function excluirBicicleta(id) {

    const indiceBicicleta = bicicletas.findIndex(bicicleta => bicicleta.id === id)

    if(indiceBicicleta !== -1) {
        
        bicicletas.splice(indiceBicicleta, 1) 

        console.log("Bicicleta excluida com sucesso")

    } else {

        console.log("Bicicleta não encontrada")
    }
}


function editarBicicleta(id, novamMarca, novoModelo, novoAro, novoChassi) {

    const bicicletaEncontrada = bicicletas.find(bicicleta => bicicleta.id === id)

    if(bicicletaEncontrada) {

        bicicletaEncontrada.marca = novamMarca
        bicicletaEncontrada.modelo = novoModelo
        bicicletaEncontrada.aro = novoAro
        bicicletaEncontrada.chassi = novoChassi

        console.log("Bicicleta editada com sucesso")
        console.log(bicicletaEncontrada)
    } else {

        console.log("Bicicleta não encontrada")
    }
}