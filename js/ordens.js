
const ordens = []

let proximoIdOrdem = 1

function cadastrarOrdemServico(clienteId, bicicletaId, servico, valor) {

    const clienteEncontrado = clientes.find(cliente => cliente.id === clienteId)

    const bicicletaEncontrada =  bicicletas.find(bicicleta => bicicleta.id === bicicletaId)


    if(!clienteEncontrado || !bicicletaEncontrada) {

        console.log("Cliente ou bicicleta não encontrada!")

        return
    }
    
    
    const novaOrdem = {
        
        id: proximoIdOrdem++,
        clienteId: clienteId,
        bicicletaId: bicicletaId,
        servico: servico,
        valor: valor,
        status: "Aberta"
    }

    ordens.push(novaOrdem)

    console.log("Ordem de servico aberta com sucesso!")
    console.log(novaOrdem)
}


function listarOrdensServicos() {

    ordens.forEach(ordem => {

        console.log(`ID: ${ordem.id} || Cliente: ${ordem.clienteId} || Bicicleta: ${ordem.bicicletaId} || Serviço: ${ordem.servico} || Valor: ${ordem.valor} || Status: ${ordem.status}`)
    })
}


function buscarOrdemServico(id) {

    const ordemEncontrada = ordens.find(ordem => ordem.id === id) 

    if(ordemEncontrada) {

        console.log("Ordem de Serviço encontrada")
        console.log(ordemEncontrada)
    
    } else {

        console.log("Ordem de Serviço não encontrada")
    }
}


function editarOrdemServico(id, novoServico, novoValor, novoStatus) {

    const ordemEncontrada = ordens.find(ordem => ordem.id === id) 

    if(ordemEncontrada) { 

        ordemEncontrada.servico = novoServico
        ordemEncontrada.valor = novoValor
        ordemEncontrada.status = novoStatus

        console.log("Ordem de Servico atualizada com sucesso")
    } else {

        console.log("Ordem não encontrada")
    }
}


function excluirOrdem(id) {

    const indiceOrdem = ordens.findIndex(ordem => ordem.id === id)
    
    if(indiceOrdem !== -1) {

        ordens.splice(indiceOrdem, 1)

        console.log("Ordem de Serviço excluida")
    } else {

        console.log("Ordem de Serviço não existente")
    }
}