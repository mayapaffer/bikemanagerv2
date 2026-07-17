
const ordens = []

let proximoIdOrdem = 1

const STATUS_ABERTA = "Aberta"
const STATUS_ANDAMENTO = "Em andamento"
const STATUS_FINALIZADA = "Finalizada"

function cadastrarOrdemServico(clienteId, bicicletaId, servico, valor) {

    const clienteExiste = clientes.find(cliente => cliente.id === clienteId)

    const bicicletaExiste =  bicicletas.find(bicicleta => bicicleta.id === bicicletaId)


    if(!clienteExiste || !bicicletaExiste) {

        console.log("Cliente ou bicicleta não encontrada!")

        return
    }
    
    
    const novaOrdem = {
        
        id: proximoIdOrdem++,
        clienteId,
        bicicletaId,
        servico,
        valor,
        status: STATUS_ABERTA
    }

    ordens.push(novaOrdem)

    console.log(`Nova ordem #${novaOrdem.id} aberta com sucesso`)
}


function listarOrdensServicos() {

    ordens.forEach(ordem => {mostrarOrdemServico(ordem)})
}


function buscarOrdemServico(id) {

    const ordemEncontrada = ordens.find(ordem => ordem.id === id) 
 
    if(ordemEncontrada) {

        mostrarOrdemServico(ordemEncontrada)
    
    } else {

        console.log("Ordem de Serviço não encontrada")
    }
}


function editarOrdemServico(id, novoServico, novoValor, novoStatus) {

    const ordemEncontrada = ordens.find(ordem => ordem.id === id) 

    if (!ordemEncontrada) {

        console.log("A ordem de Serviço não existe")
        return
    }

    if(
        novoStatus !== STATUS_ABERTA &&
        novoStatus !== STATUS_ANDAMENTO &&
        novoStatus !== STATUS_FINALIZADA
    ) { 
        console.log("Status invalido")
        return
    }


    if(ordemEncontrada.status === STATUS_FINALIZADA) {

        console.log("Esta ordem de serviço ja foi finalizada")
        return
    }

        ordemEncontrada.servico = novoServico
        ordemEncontrada.valor = novoValor
        ordemEncontrada.status = novoStatus

        console.log(`Ordem de Serviço #${ordemEncontrada.id} foi atualizada com sucesso`)
}
   

  


function excluirOrdem(id) {

    const indiceOrdem = ordens.findIndex(ordem => ordem.id === id)
    
    if(indiceOrdem !== -1) {

        ordens.splice(indiceOrdem, 1)

        console.log(`Ordem de Serviço #${id} excluida com sucesso`)
    } else {

        console.log("Ordem de Serviço não existente")
    }
}


function alterarStatusOs(id, novoStatus) {

    const ordemEncontrada = ordens.find(ordem => ordem.id === id)

    if(!ordemEncontrada) {
        
        console.log("Ordem não encontrada")
        return
    }

    if(
        novoStatus !== STATUS_ABERTA &&
        novoStatus !== STATUS_ANDAMENTO && 
        novoStatus !== STATUS_FINALIZADA        
    ) { 
    
        console.log("Status não permitido")
        return
    }

    if(ordemEncontrada.status === STATUS_FINALIZADA) {

        console.log("Esta ordem de serviço ja foi finalizada")
        return
    }

    ordemEncontrada.status = novoStatus

    console.log(`A Ordem de Serviço #${ordemEncontrada.id} foi alterada com sucesso`)
}


function mostrarOrdemServico(ordem) {

    const clienteDaOrdem = clientes.find(cliente => cliente.id === ordem.clienteId)
    const bicicletaDaOrdem = bicicletas.find(bicicleta => bicicleta.id === ordem.bicicletaId)

    if(!clienteDaOrdem || !bicicletaDaOrdem) {

        console.log("Cliente ou bicicleta não existe")
        return
    }

    console.log(`ID: ${ordem.id} || Cliente: ${clienteDaOrdem.nome} || Bicicleta ${bicicletaDaOrdem.marca} ${bicicletaDaOrdem.modelo} || Serviço: ${ordem.servico} || Valor: ${ordem.valor} || Status: ${ordem.status}`)

}