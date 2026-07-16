import {api} from "./api.js"
//função para renderizar os pensamentos na tela

export const renderizarPensamentos = async () => {
    const listaPensamentos = document.getElementById('lista-pensamentos')
    try {
        const pensamentos = await api.buscarPensamentos()
        pensamentos.forEach(
            pensamento => {
                listaPensamentos.innerHTML += `
                <li class="li-pensamento" data-id="${pensamento.id}"> 
                <img src= "assets/imagens/aspas-azuis.png" alt="Imagem de aspas azuis" class="icone-aspas">  
                <div class="pensamento-conteudo">${pensamento.conteudo}</div>             
                <div class="pensamento-autoria">${pensamento.autoria}</div>    
                </li>         
                `
            }
        )
    } catch {
        alert('Erro ao renderizar pensamento')
    }
}