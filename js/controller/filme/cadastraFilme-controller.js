import { filmeService } from "../../service/filme/filme-service.js";

const formularioDeFilme = document.querySelector('[data-cadFilme]');

formularioDeFilme.addEventListener('submit',(e) => {
    e.preventDefault();

    const titulo = e.target.querySelector('.titulo').value;
    const estreia = e.target.querySelector('.estreia').value; 
    const duracao = e.target.querySelector('.duracao').value;
    const classificacao = e.target.querySelector('.classificacao').value;
    const idioma = e.target.querySelector('.idioma').value;
    const orcamento = e.target.querySelector('.orcamento').value;
    const bilheteria = e.target.querySelector('.bilheteria').value;
    const produtora = e.target.querySelector('.produtora').value;
    const estudio = e.target.querySelector('.estudio').value;
    const diretor = e.target.querySelector('.diretor').value;
    const roteirista = e.target.querySelector('.roteirista').value;
    const atores = e.target.querySelector('.atores').value;
    // const genero = e.target.querySelector('.genero').value;
    const sinopse = e.target.querySelector('.sinopse').value;

    filmeService.criaFilme(titulo, estreia, duracao, classificacao, idioma, orcamento, bilheteria, produtora, estudio,
        diretor, roteirista, atores, sinopse)
        .then(() => {
            alert('deu bom');
        })
})