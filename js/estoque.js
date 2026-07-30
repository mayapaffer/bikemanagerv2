
const pecas = []

let proximaPeca = 1 

let pecaEditando = null 

const formEstoque = document.getElementById("formEstoque")

const nomePeca = document.getElementById("nomePeca")
const quantidadePeca = document.getElementById("quantidadePeca")
const valorPeca = document.getElementById("valorPeca")
const statusPeca = document.getElementById("statusPeca")
const botaoEstoque =  document.getElementById("botaoEstoque")

const tabelaEstoque =  document.getElementById("tabelaEstoque")


formEstoque.addEventListener("submit", function(event) { 
    
    event.preventDefault()

    cadastrarPeca()
})


function cadastrarPeca() {

    if(pecaEditando !== null) {
        
        const peca = pecas.find(peca => peca.id === pecaEditando)

        peca.nome = nomePeca.value
        peca.quantidade = Number(quantidadePeca.value)
        peca.valor = Number(valorPeca.value)
        peca.status = statusPeca.value

    } else { 
            
        
        const novaPeca = {
        
        id: proximaPeca++,
        nome: nomePeca.value,
        quantidade: Number(quantidadePeca.value),
        valor: Number(valorPeca.value),
        status: statusPeca.value
    }

        pecas.push(novaPeca)

    }
    atualizarPeca()

    formEstoque.reset()

    pecaEditando = null

    botaoEstoque.textContent = "Cadastrar Peça"
}

function atualizarPeca() {

    tabelaEstoque.innerHTML = ""

    pecas.forEach(peca => {

        tabelaEstoque.innerHTML += `
            <tr>
                <td>${peca.id}</td>
                <td>${peca.nome}</td>
                <td>${peca.quantidade}</td>
                <td>R$ ${peca.valor.toFixed(2)}</td>
                <td>${peca.status}</td>

                <td>
                    <button 
                        class="btn-editar"
                        onclick="editarPeca(${peca.id})">
                        Editar
                    </button>

                    <button 
                        class="btn-excluir"
                        onclick="excluirPeca(${peca.id})">
                        Excluir
                    </button>
                </td>

            </tr>
        `
    })
}

function editarPeca(id) {

    const peca =  pecas.find(peca => peca.id === id)

    if(!peca) return

    nomePeca.value = peca.nome
    quantidadePeca.value = peca.quantidade
    valorPeca.value = peca.valor
    statusPeca.value = peca.status
    
    pecaEditando = id

    botaoEstoque.textContent = "Salvar Alteração"
}


function excluirPeca(id) { 

    const indice = pecas.findIndex(peca => peca.id === id)

    if (indice === -1) return
    
    pecas.splice(indice, 1)

    atualizarPeca()
}



window.pecas = pecas
window.atualizarPeca = atualizarPeca