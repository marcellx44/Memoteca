import { api } from "./api.js"

export const preencherFormulario = async (pensamentoId) => {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)

    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value= pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria
}


// função para excluir pensamento
export const excluirPensamento = async (pensamento) => {
    await api.excluirPensamento(pensamento)
    renderizarPensamentos()
}

// função para adicionar pensamento na lista 

export const adicionarPensamentoNaLista = (pensamento) => {
    const listaPensamentos = document.getElementById('lista-pensamentos')
    const li = document.createElement("li")
    li.setAttribute("data-id", pensamento.id)
    li.classList.add("li-pensamento")

    const iconeAspas = document.createElement("img")
    iconeAspas.src = "assets/imagens/aspas-azuis.png"
    iconeAspas.alt = "Aspas azuis"
    iconeAspas.classList.add("icone-aspas")

    const pensamentoConteudo = document.createElement("div")
    pensamentoConteudo.textContent = pensamento.conteudo
    pensamentoConteudo.classList.add("pensamento-conteudo")

    const pensamentoAutoria = document.createElement("div")
    pensamentoAutoria.textContent = pensamento.autoria
    pensamentoAutoria.classList.add("pensamento-autoria")

    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("botao-editar")
    botaoEditar.addEventListener("click", ()=> {preencherFormulario(pensamento.id)})

    const iconeEditar = document.createElement("img")
    iconeEditar.src = "assets/imagens/icone-editar.png"
    iconeEditar.alt = "Ícone editar"

    botaoEditar.appendChild(iconeEditar)
    
    const botaoExcluir = document.createElement("button")
    botaoExcluir.classList.add("botao-excluir")
    botaoExcluir.addEventListener("click", ()=> {excluirPensamento(pensamento)})

    const iconeExcluir = document.createElement("img")
    iconeExcluir.src = "assets/imagens/icone-excluir.png"
    iconeExcluir.alt = "Ícone Excluir"

    botaoExcluir.appendChild(iconeExcluir)

    const icones = document.createElement("div")
    icones.classList.add("icones")
    icones.appendChild(botaoEditar)
    icones.appendChild(botaoExcluir)

    li.appendChild(iconeAspas)
    li.appendChild(pensamentoConteudo)
    li.appendChild(pensamentoAutoria)
    li.appendChild(icones)

    listaPensamentos.appendChild(li)
}

//função para renderizar os pensamentos na tela

export const renderizarPensamentos = async () => {
    const listaPensamentos = document.getElementById('lista-pensamentos')
    try {
        const pensamentos = await api.buscarPensamentos()
        listaPensamentos.innerHTML = ''
        pensamentos.forEach(adicionarPensamentoNaLista)
    } catch {
        alert('Erro ao renderizar pensamento')
    }
}

// função para cancelar pensamento 

export const cancelarPensamento = () => {
    document.getElementById("pensamento-conteudo").value = '';
    document.getElementById("pensamento-autoria").value = '';
}