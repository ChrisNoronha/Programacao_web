const express = require('express');
const app = express();
app.use(express.json());

// Simulando um estoque de produtos
let estoque = [];

// Adicionar um novo produto ao estoque
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque.');
});

// Listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    res.json(estoque);
});

// Remover um produto do estoque
app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido do estoque.');
});

// Editar a quantidade de um produto no estoque
app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.forEach(produto => {
        if (produto.id === id) {
            produto.quantidade = parseInt(qtd);
        }
    });
    res.send('Quantidade do produto atualizada.');
});

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
