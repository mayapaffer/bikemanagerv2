
const clientes = []

let proximoId = 1

function cadastrarCliente(nome, telefone) {

    const novoCliente = {

        id: proximoId++,
        nome: nome,
        telefone: telefone
    }

    clientes.push(novoCliente)
}

function listarClientes() {
    
    clientes.forEach(cliente => {

        console.log(`ID: ${cliente.id} | Nome: ${cliente.nome} | Telefone: ${cliente.telefone}`)
    })
}

function buscarCliente(id) {

    const clienteEncontrado = clientes.find(cliente => cliente.id === id)

    if (clienteEncontrado) { 
        console.log("Cliente Encontrado")
        console.log(clienteEncontrado)
    } else { 
        console.log("Cliente não cadastrado")
    }
}


function excluirCliente(id) {

    const indiceCliente = clientes.findIndex(cliente => cliente.id === id)

    if(indiceCliente !== -1) {
        
        clientes.splice(indiceCliente, 1)

        console.log("Cliente excluído com sucesso")
    } else {
        
        console.log("Cliente não encontrado")
    }

}


function editarCliente(id, novoNome, novoTelefone) { 

    const clienteEncontrado = clientes.find(cliente => cliente.id === id) 

    if(clienteEncontrado) { 

        clienteEncontrado.nome = novoNome
        clienteEncontrado.telefone = novoTelefone

        console.log("Cliente atualizado com sucesso")
        console.log(clienteEncontrado)
    } else {

        console.log("Cliente não encontrado")
    }
}