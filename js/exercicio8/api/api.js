const express = require('express');
const app = express();
const port = 8000;

// Middleware para analisar JSON
app.use(express.json());

// Middleware para analisar dados de formulários URL-encoded
app.use(express.urlencoded({ extended: true }));

var usuarios = [];

// Rota que retorna um array de livros
app.get('/livros', (req, res) => {
    const books = [
        { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien" },
        { title: "Fundação", author: "Isaac Asimov" },
        { title: "Duna", author: "Frank Herbert" }
    ];
    res.json(books);
});

// Rota que retorna uma localização específica
app.get('/localizacao', (req, res) => {
    const location = {
        latitude: -23.550520,
        longitude: -46.633308
    };
    res.json(location);
});

// Rota de login 
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(400).json({ erro: "Usuário ou senha incorretos" });
    }
});

// Rota de criação de usuários 
app.post('/criar_usuario', (req, res) => {
    const { email, password } = req.body;
    if (usuarios.find(u => u.email === email)) {
        res.status(400).json({ erro: "Email já está em uso" });
    } else {
        usuarios.push({ email, password });
        res.json({ status: 'Usuário criado com sucesso' });
    }
});

// Rota de editar de usuários 
app.put('/editar_usuario/:id', (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    let usuarioEncontrado = usuarios.find((u, index) => {
        if (u.email === email) {
            usuarios[index] = { email, password };
            return true;
        }
    });

    if (usuarioEncontrado) {
        res.json({ status: 'Usuário atualizado com sucesso' });
    } else {
        res.status(404).json({ erro: 'Usuário não encontrado' });
    }
});

// Rota de exclusão de usuários
app.delete('/excluir_usuario/:id', (req, res) => {
    const { id } = req.params;
    const usuarioIndex = usuarios.findIndex(u => u.email === id);
    if (usuarioIndex > -1) {
        usuarios.splice(usuarioIndex, 1);
        res.json({ status: 'Usuário excluído com sucesso' });
    } else {
        res.status(404).json({ erro: 'Usuário não encontrado' });
    }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
