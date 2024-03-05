import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe("Testar componente Header", () => {
    test("Validar texto inserido no titulo do componente", () => {
        render(<Header />);

        const titulo = screen.getByText("Projeto de API do Rick and Morty");

        expect(titulo).toBeInTheDocument();
    })
})