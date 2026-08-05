
const clientes = [] //array clientes que vai receber todos os clientes                   01 / petardo / 192318301   02 / maya / 192318301   03 / jonas / 192318301

const clientesSalvos = JSON.parse(localStorage.getItem("clientes"))

if(clientesSalvos) {
    clientes.push(...clientesSalvos)
}

const formCliente = document.getElementById("formCliente")
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")

formCliente.addEventListener("submit", function(event) {
    
    event.preventDefault()

    if(clienteEditando !== null) { 
        
        editarCliente(

            clienteEditando,
            nome.value,
            telefone.value
        )

        clienteEditando = null
    } else { 
        
        cadastrarCliente(nome.value, telefone.value)
    }

    atualizarTabelaClientes()

    formCliente.reset() 
})

let clienteEditando = null
let proximoId = 1 //incrementa o id do cliente em mais um para que nao duplique id quando algum cliente for excluido

function cadastrarCliente(nome, telefone) {

    const novoCliente = {

        id: proximoId++,
        nome: nome,
        telefone: telefone
    }

    clientes.push(novoCliente)

    localStorage.setItem("clientes", JSON.stringify(clientes))
}  //cadastra o cliente com id nome e telefone e salva no array clientes 

function atualizarTabelaClientes () {

    const tabelaClientes = document.getElementById("tabelaClientes")

    tabelaClientes.innerHTML = ""

    clientes.forEach(cliente => {

        const linha = document.createElement("tr")

        linha.innerHTML = `
        
             <td>${cliente.id}</td>
             <td>${cliente.nome}</td>
             <td>${cliente.telefone}</td>
             <td>
                <button class="btn-editar" onclick="prepararEdicaoCliente(${cliente.id})">Editar</button>
                <button class="btn-excluir" onclick="excluirCliente(${cliente.id})">Excluir</button>
             </td>
        `

            tabelaClientes.appendChild(linha)
    })
}

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
       
        localStorage.setItem("clientes", JSON.stringify(clientes))

        console.log("Cliente excluído com sucesso")

        atualizarTabelaClientes()
    } else {
        
        console.log("Cliente não encontrado")
    }

} //busca o cliente pelo id se existir ele exclui se não ele diz cliente não encontrado 


function editarCliente(id, novoNome, novoTelefone) { 

    const clienteEncontrado = clientes.find(cliente => cliente.id === id) 

    if(clienteEncontrado) { 

        clienteEncontrado.nome = novoNome
        clienteEncontrado.telefone = novoTelefone

        localStorage.setItem("clientes", JSON.stringify(clientes))

        console.log("Cliente atualizado com sucesso")
        console.log(clienteEncontrado)

        atualizarTabelaClientes()
    } else {

        console.log("Cliente não encontrado")
    }
} //busca o cliente pelo id e se existir ele altera o nome e o telefone 

function prepararEdicaoCliente(id) {

    const cliente = clientes.find(cliente => cliente.id === id)

    if(!cliente) return 

    nome.value = cliente.nome
    telefone.value = cliente.telefone

    clienteEditando = id
}

atualizarTabelaClientes()

window.excluirCliente = excluirCliente
window.editarCliente = editarCliente
window.prepararEdicaoCliente = prepararEdicaoCliente