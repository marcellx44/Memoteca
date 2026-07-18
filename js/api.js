// arquivo que faz as requisições API 

const URL_BASE = "http://localhost:3000"

export const api ={
    //função de buscar pensamentos 
    async buscarPensamentos(){
        try{
            const resposta = await fetch(`${URL_BASE}/pensamentos`)
            const pensamentos = await resposta.json()
            return pensamentos;
        } catch {
            alert('Erro ao buscar pensamentos')
        }
    },
    //função de salvar pensamentos 
    async salvarPensamentos(pensamento){
        try{
            const resposta = await fetch(`${URL_BASE}/pensamentos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await resposta.json()
        } catch {
            alert('Erro ao salvar pensamentos')
        }
    },

    //função de buscar pensamento pelo id
    async buscarPensamentoPorId(id){
        try{
            const resposta = await fetch(`${URL_BASE}/pensamentos/${id}`) 
            const pensamento = await resposta.json()
            return pensamento;
        } catch {
            alert('Erro ao buscar pensamento por id')
        }
    },

     //função de editar pensamentos 
    async editarPensamento(pensamento){
        try{
            const resposta = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await resposta.json()
        } catch {
            alert('Erro ao editar pensamentos')
        }
    },
    // função de excluir pensamento 
    async excluirPensamento (pensamento) {
        try{
            const resposta = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "DELETE",
            })
            return await resposta.json()
        } catch{
            alert('Erro ao excluir pensamento')
        }
    }
}