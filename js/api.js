// arquivo que faz as requisições API 

export const api ={
    //função de buscar pensamentos 
    async buscarPensamentos(){
        try{
            const resposta = await fetch('http://localhost:3000/pensamentos')
            const pensamentos = await resposta.json()
            return pensamentos;
        } catch {
            alert('Erro ao buscar pensamentos')
        }
    }
}