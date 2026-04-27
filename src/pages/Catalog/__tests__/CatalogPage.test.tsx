import { render, screen } from '@testing-library/react';
import { CatalogPage } from '../CatalogPage';

describe('CatalogPage', () => {
	it('muestra el placeholder del catalogo y su navegacion', () => {
		render(<CatalogPage />);

		expect(
			screen.getByRole('heading', {
				level: 1,
				name: 'Catalogo de Sacré en construccion',
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Volver al inicio' })
		).toHaveAttribute('href', '/#collections');
	});
});
