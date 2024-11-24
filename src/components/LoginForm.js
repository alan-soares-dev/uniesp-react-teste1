import React, { useState } from 'react';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (login === '' || senha === '') {
            setMensagem('Preencha todos os campos.');
            return;
        }

        if (login === 'admin' && senha === 'admin') {
            setMensagem('Login realizado com sucesso.');
        } else {
            setMensagem('Login ou senha inválidos.');
        }

        console.log('login:', login);
        console.log('senha:', senha);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Entrar no sistema</h2>
            <div>
                <label htmlFor="login">Login:</label>
                <input
                    type="text"
                    id="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input
                    type="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Entrar</button>
            <p>{mensagem}</p>
        </form>
    );
};

export default LoginForm;