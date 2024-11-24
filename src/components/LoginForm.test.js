import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renderiza campos de entrada e botão', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});


test('renderiza mensagem de erro ao submeter formulário vazio', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
    expect(screen.getByText(/Preencha todos os campos./i)).toBeInTheDocument();
});

test('renderiza mensagem de sucesso ao submeter formulário com login e senha corretos', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/login/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'admin' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
    expect(screen.getByText(/Login realizado com sucesso./i)).toBeInTheDocument();
});


test('renderiza mensagem de erro ao submeter formulário com login e senha incorretos', () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/login/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
    expect(screen.getByText(/Login ou senha inválidos./i)).toBeInTheDocument();
});

