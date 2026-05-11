import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from '../HomePage';

function renderHomePage() {
	render(
		<MemoryRouter>
			<HomePage />
		</MemoryRouter>
	);
}

describe('HomePage', () => {
	it('muestra el shell inicial de Sacré', () => {
		renderHomePage();

		expect(
			screen.getByRole('heading', { level: 1, name: /sacré/i })
		).toBeInTheDocument();
	});

	it('integra catalogo y about del Batch 2', () => {
		renderHomePage();

		expect(
			screen.getByRole('heading', { name: 'Nuestras colecciones' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Fe hecha arte' })
		).toBeInTheDocument();
	});

	it('expone accesos al catalogo sin flujos de carrito', () => {
		renderHomePage();

		expect(
			screen.getByRole('link', { name: 'Ir al catalogo' })
		).toHaveAttribute('href', '/catalogo');
		expect(
			screen.getByRole('link', { name: 'Ir al catalogo completo' })
		).toHaveAttribute('href', '/catalogo');
	});
});
