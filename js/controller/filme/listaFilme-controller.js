import { filmeService } from "../../service/filme/filme-service.js";

const criaNovaLinha = (id, titulo, estreia, duracao, classificacao, idioma, orcamento, bilheteria, produtora, estudio,
    diretor, roteirista, atores, genero, sinopse
) => {
    const linhaNovoFilme = document.createElement('tr')
    const conteudo = `
        <td class="td" data-td>${id}</td>
        <td>${titulo}</td>
        <td>${estreia}</td>
        <td>${duracao}</td>
        <td>${classificacao}</td>
        <td>${idioma}</td>
        <td>${orcamento}</td>
        <td>${bilheteria}</td>
        <td>${estudio}</td>
        <td>${diretor}</td>
        <td>${atores}</td>
        <td>${genero}</td>
        <td>
            <button class="btn-editar" onclick="editarFilme()"><i
                    class="bi bi-pencil-square"></i></button>
            <button class="btn-excluir"><i
                    class="bi bi-trash3-fill"></i></button>
        </td>
    
    `
    linhaNovoFilme.innerHTML = conteudo;
    linhaNovoFilme.dataset.id = id;
    console.log(linhaNovoFilme);
    return linhaNovoFilme
}

const tabela = document.querySelector('[data-filmes]');

tabela.addEventListener('click', (e) => {
    let botaoDeletar = e.target.className === 'btn-excluir';

    if(botaoDeletar) {
        const linhaFilme = e.target.closest('[data-id]');
        let id = linhaFilme.dataset.id;
        filmeService.removeFilme(id)
        .then( ()=> {
            linhaFilme.remove();
        })
    }
})

filmeService.listaFilmes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.id, elemento.titulo, elemento.estreia, elemento.duracao, elemento.classificacao, elemento.idioma, elemento.orcamento, elemento.bilheteria, elemento.produtora, elemento.estudio,
                elemento.diretor, elemento.roteirista, elemento.atores, elemento.genero, elemento.sinopse));
        })
    })