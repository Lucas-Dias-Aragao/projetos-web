const listaFilmes = async () => {
    return fetch(`http://localhost:3000/filmes`)
        .then(resposta => {
            return resposta.json();
        })
}

export const criaFilme = (titulo, estreia, duracao, classificacao, idioma, orcamento, bilheteria, produtora, estudio,
    diretor, roteirista, atores, genero, sinopse) => {
    return fetch(`http://localhost:3000/filmes`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo, 
            estreia: estreia, 
            duracao: duracao, 
            classificacao: classificacao, 
            idioma: idioma, 
            orcamento: orcamento, 
            bilheteria: bilheteria, 
            produtora: produtora, 
            estudio: estudio,
            diretor: diretor, 
            roteirista: roteirista, 
            atores: atores, 
            genero: genero, 
            sinopse: sinopse
        })
    })
    .then( response => {
        return response.body;
    })
}

const removeFilme = (id) => {
    return fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'DELETE'

    })
}


// function editarFilme(idLinha) {
//     window.location.href = '../../views/filme/cadastro-filme.html';
// }

export const filmeService = {
    listaFilmes,
    criaFilme,
    removeFilme
}