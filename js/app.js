

cadastrarCliente("Maya", "39103")
cadastrarCliente("Predo", "39103")
cadastrarCliente("Fred", "39103")
cadastrarCliente("Joao", "39103")


listarClientes()
excluirCliente(2)
listarClientes()
editarCliente(1, "Gostoso", "34923480")
listarClientes()

cadastrarBicicleta(1, "Caloi", "Elite", 29, "ABC123")
cadastrarBicicleta(1, "Sense", "Move", 27, "XYZ789")

listarBicicletas()

buscarBicicleta(6)

listarBicicletas()

excluirBicicleta(5)

listarBicicletas()

editarBicicleta(6, "Caloi", "Vulcan", 29, "NOVO123")

listarBicicletas()

listarOrdensServicos()

cadastrarOrdemServico(1, 6, "Revisão Geral", 120)

buscarOrdemServico(1)

editarOrdemServico(1, "Troca de relação", 250, "Em andamento")

listarOrdensServicos()

excluirOrdem()

listarOrdensServicos()

buscarOrdemServico(4)

editarOrdemServico(1, "Troca de relação", 250, STATUS_FINALIZADA)

listarOrdensServicos()

alterarStatusOs(1, STATUS_ANDAMENTO)

listarOrdensServicos()