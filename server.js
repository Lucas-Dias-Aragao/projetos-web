const http = require('http');
const fs = require('fs');

//const host = 'localhost';
const PORT = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }


    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            console.log(data);
            const conteudo = `Nome: ${data.titulo}\nEstreia: ${data.estreia}\nDuração: ${data.duracao}\nClassificação: ${data.classificacao}\n\n`;

            fs.writeFile('C:\\dev\\projects\\projeto-web-filme\\test.txt', conteudo, err => {
                if (err) {
                    console.error(err)
                    return
                }

                res.statusCode = 200;
                res.end('Dados salvos com sucesso!');
            });
        });
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
