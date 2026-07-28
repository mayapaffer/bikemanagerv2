
const clientes = [] //array clientes que vai receber todos os clientes                   01 / petardo / 192318301   02 / maya / 192318301   03 / jonas / 192318301

let proximoId = 1 //incrementa o id do cliente em mais um para que nao duplique id quando algum cliente for excluido

function cadastrarCliente(nome, telefone) {

    const novoCliente = {

        id: proximoId++,
        nome: nome,
        telefone: telefone
    }

    clientes.push(novoCliente)
}  //cadastra o cliente com id nome e telefone e salva no array clientes 

function listarClientes() {
    
    clientes.forEach(cliente => {

        console.log(`ID: ${cliente.id} | Nome: ${cliente.nome} | Telefone: ${cliente.telefone}`)
    })
} //lista os clientes no console com id nome e telefone 

function buscarCliente(id) {

    const clienteEncontrado = clientes.find(cliente => cliente.id === id)

    if (clienteEncontrado) { 
        console.log("Cliente Encontrado")
        console.log(clienteEncontrado)
    } else { 
        console.log("Cliente não cadastrado")
    }
} //busca cliente pelo id no array clientes e se o cliente for encontrado ele mostra o id nome e telefone e se nao tiver ele diz que nao existe 


function excluirCliente(id) {

    const indiceCliente = clientes.findIndex(cliente => cliente.id === id)

    if(indiceCliente !== -1) {
        
        clientes.splice(indiceCliente, 1)

        console.log("Cliente excluído com sucesso")
    } else {
        
        console.log("Cliente não encontrado")
    }

} //busca o cliente pelo id se existir ele exclui se não ele diz cliente não encontrado 


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
} //busca o cliente pelo id e se existir ele altera o nome e o telefone 