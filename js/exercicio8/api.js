const express = require('express');
// import express from "express";
const app = express();
const port = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Middleware para analisar dados de formulários URL-encoded
app.use(express.urlencoded({ extended: true }));

var usuarios = [];
let books = [
    { title: "O Senhor dos Anéis", author: "J.R.R. Tolkien" },
    { title: "Fundação", author: "Isaac Asimov" },
    { title: "Duna", author: "Frank Herbert" }
];

// Rota que retorna um array de livros
app.get('/livros', (req, res) => {

    res.json(books);
});

// Rota que adiciona um livro ao array de livros { title: 'kdjskd', author: 'skldjsl'}
app.post('/livros', (request, response) => {
    const novoLivro = request.body
    books.push(novoLivro);
    response.json(books)
});

let location = {
    latitude: -23.550520,
    longitude: -46.633308
};

// Rota que retorna uma localização específica
app.get('/localizacao', (req, res) => {
    res.json(location);
});

// Rota que recebe a nova localização { latitude: askj, longitude: kjahsd }
app.post('/localizacao', (request, response) => {
    // Alterar a localização atual
    const { latitude, longitude } = request.body
    // const latitude = request.body.latitude
    // const longitude = request.body.longitude

    location.latitude = latitude
    location.longitude = longitude

    response.json(location)

});



// Rota de login 
app.post('/login', (req, res) => {

    const { email, password } = req.body; // desestruturação => { email: "teste@gmail.com", password: "123"}
    // const email = req.body.email;
    // const password = req.body.password;

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
        usuarios.push({ id: usuarios.length + 1, email, password });
        res.json({ status: 'Usuário criado com sucesso' });
    }
});

// Rota de editar de usuários 
app.put('/editar_usuario/:id', (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    let usuarioEncontrado = usuarios.find((u, index) => {
        if (u.id === id) {
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
    const usuarioIndex = usuarios.findIndex(u => u.id === id);
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
