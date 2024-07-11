const form = document.getElementById('formFilme');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const titulo = document.querySelector('.titulo').value.trim();
    const estreia = document.querySelector('.estreia').value.trim();
    const duracao = document.querySelector('.duracao').value.trim();
    const classificacao = document.querySelector('.classificacao').value.trim();
    const produtora = document.querySelector('.produtora').value.trim();
    const diretor = document.querySelector('.diretor').value.trim();

    const campos = {
        titulo: titulo,
        estreia: estreia,
        duracao: duracao,
        classificacao: classificacao,
        produtora: produtora,
        diretor: diretor
    };

    let camposPreenchidos = 0;
    for (const chave in campos) {
        if (campos[chave] !== '') {
            camposPreenchidos++;
        }
    }

    if(camposPreenchidos > 1) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    window.location.href = '../status/sucesso.html';
                } 
            }
        };
    
        // Envio dos dados como JSON
        xhr.send(JSON.stringify(campos));

    } else {
        window.location.href = '../status/401.html';
    }
});



