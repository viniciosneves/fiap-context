import React, { createContext, useContext, useState } from 'react';

const LivrosContext = createContext();

export const LivrosProvider = ({ children, livros }) => {

    const [livroSelecionado, setLivroSelecionado] = useState(livros[1]);

    const verificarLivroSelecionado = (livro) => {
        return livro.id === livroSelecionado?.id;
    };

    const selecionarLivro = (livro) => {
        setLivroSelecionado(livro);
    };

    return (
        <LivrosContext.Provider value={{ livros, livroSelecionado, verificarLivroSelecionado, selecionarLivro }}>
            {children}
        </LivrosContext.Provider>
    );
};

// Hook personalizado para usar o contexto de livros
export const useLivros = () => useContext(LivrosContext);
