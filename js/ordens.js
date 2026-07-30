console.log("Ordens carregou")
console.log("Peças disponíveis:", window.pecas)

const ordens = [] //array que vai receber todas as OS

let proximoIdOrdem = 1 //iComeça o id em 1 para nao repetir quando exlcuir alguma OS

const STATUS_ABERTA = "Aberta" 
const STATUS_ANDAMENTO = "Em andamento"  //status da os 
const STATUS_FINALIZADA = "Finalizada"

const pecaOs = document.getElementById("pecaOs")
const quantidadeOs = document.getElementById("quantidadeOs")
const adicionarPecaOs = document.getElementById("adicionarPecaOs")

const pecasDaOs = []

adicionarPecaOs.addEventListener("click", function(){

    console.log("Botão adicionar peça funcionando")

    adicionarPecaNaOs()
})

function adicionarPecaNaOs() {

    const pecaSelecionada = pecas.find(peca => peca.id === Number(pecaOs.value))

    if(!pecaSelecionada) {

        console.log("Selecione uma peça")
        return
    }

    const quantidade = Number(quantidadeOs.value)

    if(quantidade >  pecaSelecionada.quantidade) {

        console.log("Quantidade indisponivel no estoque")
        return
    }

    const novaPecaOs = {

        pecaId: pecaSelecionada.id,
        nome: pecaSelecionada.nome,
        quantidade,
        valorUnitario: pecaSelecionada.valor,
        subtotal: quantidade * pecaSelecionada.valor
    }

    pecasDaOs.push(novaPecaOs)

    console.log(pecasDaOs)
}

function calcularValorTotal(valorServico,  pecas) {

        const valorPecas = pecas.reduce((total, peca) => {

            return  total + peca.subtotal
        }, 0)

        return valorServico + valorPecas
}


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
        valorServico: valor,
        pecas: [...pecasDaOs],
        valorTotal: calcularValorTotal(valor, pecasDaOs),
        status: STATUS_ABERTA
    }

    ordens.push(novaOrdem)

    console.log(`Nova ordem #${novaOrdem.id} aberta com sucesso`)
} //cadastra ordem de serviço com id da bicicleta e do cliente, verifica se existe cliente ou bicicleta se nao existir ele retorna se existir ele abre uma nova OS 


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

    console.log(`ID: ${ordem.id}`)
    console.log(`Cliente: ${clienteDaOrdem.nome}`)
    console.log(`Bicicleta: ${bicicletaDaOrdem.marca} ${bicicletaDaOrdem.modelo}`)
    console.log(`Serviço: ${ordem.servico}`)
    console.log(`Valor serviço: R$ ${ordem.valorServico.toFixed(2)}`)

    console.log("Peças utilizadas:")

    ordem.pecas.forEach(peca => {

        console.log(
            `${peca.nome} | Quantidade: ${peca.quantidade} | Subtotal: R$ ${peca.subtotal.toFixed(2)}`
        )
    })

    console.log(`Valor serviço: R$ ${ordem.valorServico.toFixed(2)}`)
    console.log(`Valor total: R$ ${ordem.valorTotal.toFixed(2)}`)
}


window.listarOrdensServicos = listarOrdensServicos