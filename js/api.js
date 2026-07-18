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
    },
    //função de salvar pensamentos 
    async salvarPensamentos(pensamento){
        try{
            const resposta = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await resposta.json()
        } catch {
            alert('Erro ao buscar pensamentos')
        }
    }
}