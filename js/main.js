import { cancelarPensamento, renderizarPensamentos } from "./ui.js"
import {api} from "./api.js"

document.addEventListener('DOMContentLoaded', () => {
    renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
})

// Cancelar conteúdo 

document.getElementById("botao-cancelar").addEventListener("click", cancelarPensamento)

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try{
        await api.salvarPensamentos({conteudo, autoria})
        renderizarPensamentos()
    }
    catch{
        alert("Erro ao salvar pensamentos")
    }
}