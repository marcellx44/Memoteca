import { api } from "./api.js"

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

    li.appendChild(iconeAspas)
    li.appendChild(pensamentoConteudo)
    li.appendChild(pensamentoAutoria)

    listaPensamentos.appendChild(li)
}

//função para renderizar os pensamentos na tela

export const renderizarPensamentos = async () => {
    const listaPensamentos = document.getElementById('lista-pensamentos')
    try {
        const pensamentos = await api.buscarPensamentos()
        pensamentos.forEach(adicionarPensamentoNaLista())
    } catch {
        alert('Erro ao renderizar pensamento')
    }
}