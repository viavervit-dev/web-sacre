import { render, screen } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
	it('muestra el titulo principal de la tienda', () => {
		render(<HomePage />);

		expect(screen.getByRole('heading', { name: 'Sacre' })).toBeInTheDocument();
	});

	it('muestra la propuesta principal del home', () => {
		render(<HomePage />);

		expect(
			screen.getByText('Articulos religiosos con devocion y amor.')
		).toBeInTheDocument();
	});
});
