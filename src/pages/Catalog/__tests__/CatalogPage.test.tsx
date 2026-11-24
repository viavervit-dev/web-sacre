import { fireEvent, render, screen, within } from '@testing-library/react';
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
	it('muestra el titulo principal y la grilla de productos', () => {
		renderCatalogPage();

		expect(
			screen.getByRole('heading', {
				level: 1,
				name: 'Piezas devocionales de Sacré',
			})
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Virgen de Guadalupe' })
		).toBeInTheDocument();
	});

	it('filtra los productos al elegir una categoria', () => {
		renderCatalogPage();

		fireEvent.click(
			screen.getByRole('radio', { name: 'Oracion y Meditacion' })
		);

		expect(
			screen.getByRole('heading', { name: 'Rosario de Nacar' })
		).toBeInTheDocument();
		expect(
			screen.queryByRole('heading', { name: 'Virgen de Guadalupe' })
		).not.toBeInTheDocument();
	});

	it('filtra los productos al buscar por palabra clave', () => {
		renderCatalogPage();

		fireEvent.change(screen.getByRole('searchbox', { name: 'Buscar' }), {
			target: { value: 'rosario' },
		});

		expect(
			screen.getByRole('heading', { name: 'Rosario de Olivo' })
		).toBeInTheDocument();
		expect(
			screen.queryByRole('heading', { name: 'Sagrado Corazon' })
		).not.toBeInTheDocument();
	});

	it('ordena los productos por precio descendente', () => {
		renderCatalogPage();

		fireEvent.change(screen.getByRole('combobox', { name: 'Ordenar' }), {
			target: { value: 'price-desc' },
		});

		const productTitles = screen.getAllByRole('heading', { level: 3 });
		expect(productTitles[0]).toHaveTextContent('Rosario de Plata 925');
	});

	it('filtra los productos por rango de precio', () => {
		renderCatalogPage();

		fireEvent.change(
			screen.getByRole('spinbutton', { name: 'Precio maximo' }),
			{
				target: { value: '60000' },
			}
		);

		expect(
			screen.getByRole('heading', { name: 'Medalla de San Benito' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Cruz Tau Franciscana' })
		).toBeInTheDocument();
		expect(
			screen.queryByRole('heading', { name: 'Virgen de Guadalupe' })
		).not.toBeInTheDocument();
	});

	it('muestra el empty state cuando no hay coincidencias y permite limpiar', () => {
		renderCatalogPage();

		fireEvent.change(screen.getByRole('searchbox', { name: 'Buscar' }), {
			target: { value: 'inexistente-xyz' },
		});

		const status = screen.getByRole('status');
		expect(
			within(status).getByText('No encontramos piezas con esos filtros')
		).toBeInTheDocument();

		fireEvent.click(
			within(status).getByRole('button', { name: 'Limpiar filtros' })
		);

		expect(
			screen.getByRole('heading', { name: 'Virgen de Guadalupe' })
		).toBeInTheDocument();
	});
});
