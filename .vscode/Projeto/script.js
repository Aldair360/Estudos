// script.js

function enviar() {

const verificarUsuario = {nome: 'aldair', senha: '123456'}

let usuario = document.getElementById('nome');
let senha = document.getElementById('senha');
let usuarioRecebidoDaTela = {nome: nome, senha: senha}

if (verificarUsuario.nome === usuarioRecebidoDaTela.nome && verificarUsuario.senha === usuarioRecebidoDaTela.senha) {
    'envia para a próxima tela com push'

} else {
    'usuario não encontrado' 
}

}



// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Usuário e senha fixos para teste
    const storedUsername = 'admin';
    const storedPassword = '1234';

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica se o usuário e a senha correspondem aos armazenados
        if (username === storedUsername && password === storedPassword) {
            message.textContent = 'Login bem-sucedido!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Usuário ou senha incorretos.';
            message.style.color = 'red';
        }
    });
});
