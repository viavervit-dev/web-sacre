import { render, screen, within } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
	it('muestra el shell inicial de Sacré', () => {
		render(<HomePage />);

		expect(
			screen.getByRole('heading', { level: 1, name: /sacré/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole('navigation', { name: 'Navegacion principal' })
		).toBeInTheDocument();
	});

	it('integra catalogo, about y footer del Batch 2', () => {
		render(<HomePage />);

		expect(
			screen.getByRole('heading', { name: 'Nuestras colecciones' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Fe hecha arte' })
		).toBeInTheDocument();
		expect(
			within(screen.getByRole('contentinfo')).getByRole('heading', {
				level: 2,
				name: 'Sacré',
			})
		).toBeInTheDocument();
	});

	it('expone accesos al catalogo sin flujos de carrito', () => {
		render(<HomePage />);

		expect(
			screen.getAllByRole('link', { name: 'Catalogo' }).length
		).toBeGreaterThan(0);
		expect(
			screen.getByRole('link', { name: 'Ir al catalogo' })
		).toHaveAttribute('href', '/catalogo');
		expect(
			screen.getByRole('link', { name: 'Ir al catalogo completo' })
		).toHaveAttribute('href', '/catalogo');
	});
});
