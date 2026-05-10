import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CatalogPage } from '../CatalogPage';

function renderCatalogPage() {
	render(
		<MemoryRouter>
			<CatalogPage />
		</MemoryRouter>
	);
}

describe('CatalogPage', () => {
	it('muestra el placeholder del catalogo y su navegacion', () => {
		renderCatalogPage();

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
