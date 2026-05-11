import { fireEvent, render, screen } from '@testing-library/react';
import { CatalogFilters } from '../CatalogFilters';

interface SetupOverrides {
	selectedCategory?: string | null;
	searchTerm?: string;
	resultCount?: number;
}

function renderCatalogFilters(overrides: SetupOverrides = {}) {
	const onCategoryChange = vi.fn();
	const onSearchTermChange = vi.fn();
	const onSortChange = vi.fn();
	const onPriceRangeChange = vi.fn();
	const onReset = vi.fn();

	render(
		<CatalogFilters
			categories={['Medallas Marianas', 'Devocionales']}
			selectedCategory={overrides.selectedCategory ?? null}
			onCategoryChange={onCategoryChange}
			searchTerm={overrides.searchTerm ?? ''}
			onSearchTermChange={onSearchTermChange}
			sort="featured"
			onSortChange={onSortChange}
			priceRange={{ min: 50000, max: 250000 }}
			priceBounds={{ min: 50000, max: 250000 }}
			onPriceRangeChange={onPriceRangeChange}
			resultCount={overrides.resultCount ?? 16}
			onReset={onReset}
		/>
	);

	return {
		onCategoryChange,
		onSearchTermChange,
		onSortChange,
		onPriceRangeChange,
		onReset,
	};
}

describe('CatalogFilters', () => {
	it('muestra el conteo de resultados', () => {
		renderCatalogFilters({ resultCount: 5 });

		expect(screen.getByText('5 piezas')).toBeInTheDocument();
	});

	it('usa singular cuando hay un solo resultado', () => {
		renderCatalogFilters({ resultCount: 1 });

		expect(screen.getByText('1 pieza')).toBeInTheDocument();
	});

	it('dispara onSearchTermChange al escribir en el buscador', () => {
		const { onSearchTermChange } = renderCatalogFilters();

		fireEvent.change(screen.getByRole('searchbox', { name: 'Buscar' }), {
			target: { value: 'rosario' },
		});

		expect(onSearchTermChange).toHaveBeenCalledWith('rosario');
	});

	it('dispara onCategoryChange al seleccionar una categoria', () => {
		const { onCategoryChange } = renderCatalogFilters();

		fireEvent.click(screen.getByRole('radio', { name: 'Medallas Marianas' }));

		expect(onCategoryChange).toHaveBeenCalledWith('Medallas Marianas');
	});

	it('marca la categoria activa', () => {
		renderCatalogFilters({ selectedCategory: 'Devocionales' });

		expect(screen.getByRole('radio', { name: 'Devocionales' })).toHaveAttribute(
			'aria-checked',
			'true'
		);
		expect(screen.getByRole('radio', { name: 'Todas' })).toHaveAttribute(
			'aria-checked',
			'false'
		);
	});

	it('dispara onReset al limpiar filtros', () => {
		const { onReset } = renderCatalogFilters();

		fireEvent.click(screen.getByRole('button', { name: 'Limpiar filtros' }));

		expect(onReset).toHaveBeenCalled();
	});
});
