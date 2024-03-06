import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import PaginaPrincipal from './PaginaPrincipal';

jest.mock('axios');

describe("Quando feita a requisição", () => {
    test("Renderizar informações da API", async () => {
        const mockData = [
            { name: 'Rick' },
            { name: 'Morty' },
            { name: 'Summer' }
        ];

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });

        render(<PaginaPrincipal />);

        await waitFor(() => {
            expect(screen.getByText('Rick')).toBeInTheDocument();
          });
    })
})