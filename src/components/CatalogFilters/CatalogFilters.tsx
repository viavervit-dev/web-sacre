import {
	catalogSortOptions,
	type CatalogPriceRange,
	type CatalogSortOption,
} from './options';
import './style.css';

interface CatalogFiltersProps {
	categories: string[];
	selectedCategory: string | null;
	onCategoryChange: (category: string | null) => void;
	searchTerm: string;
	onSearchTermChange: (term: string) => void;
	sort: CatalogSortOption;
	onSortChange: (sort: CatalogSortOption) => void;
	priceRange: CatalogPriceRange;
	priceBounds: CatalogPriceRange;
	onPriceRangeChange: (range: CatalogPriceRange) => void;
	resultCount: number;
	onReset: () => void;
}

export function CatalogFilters({
	categories,
	selectedCategory,
	onCategoryChange,
	searchTerm,
	onSearchTermChange,
	sort,
	onSortChange,
	priceRange,
	priceBounds,
	onPriceRangeChange,
	resultCount,
	onReset,
}: CatalogFiltersProps) {
	function handleMinPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = Number(event.target.value);
		const safeValue = Number.isNaN(value) ? priceBounds.min : value;
		onPriceRangeChange({
			min: Math.max(priceBounds.min, Math.min(safeValue, priceRange.max)),
			max: priceRange.max,
		});
	}

	function handleMaxPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = Number(event.target.value);
		const safeValue = Number.isNaN(value) ? priceBounds.max : value;
		onPriceRangeChange({
			min: priceRange.min,
			max: Math.min(priceBounds.max, Math.max(safeValue, priceRange.min)),
		});
	}

	return (
		<aside className="catalog-filters" aria-labelledby="catalog-filters-title">
			<header className="catalog-filters__header">
				<p className="catalog-filters__eyebrow">Filtros</p>
				<h2 id="catalog-filters-title" className="catalog-filters__title">
					Afina tu busqueda
				</h2>
				<p className="catalog-filters__count" aria-live="polite">
					{resultCount} {resultCount === 1 ? 'pieza' : 'piezas'}
				</p>
			</header>

			<div className="catalog-filters__group">
				<label className="catalog-filters__label" htmlFor="catalog-search">
					Buscar
				</label>
				<input
					id="catalog-search"
					className="catalog-filters__input"
					type="search"
					placeholder="Nombre o palabra clave"
					value={searchTerm}
					onChange={event => onSearchTermChange(event.target.value)}
				/>
			</div>

			<div className="catalog-filters__group">
				<label className="catalog-filters__label" htmlFor="catalog-sort">
					Ordenar
				</label>
				<select
					id="catalog-sort"
					className="catalog-filters__select"
					value={sort}
					onChange={event =>
						onSortChange(event.target.value as CatalogSortOption)
					}
				>
					{catalogSortOptions.map(option => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>

			<fieldset className="catalog-filters__group catalog-filters__fieldset">
				<legend className="catalog-filters__label">Categorias</legend>
				<div
					className="catalog-filters__chips"
					role="radiogroup"
					aria-label="Categorias"
				>
					<button
						type="button"
						role="radio"
						aria-checked={selectedCategory === null}
						className={
							selectedCategory === null
								? 'catalog-filters__chip catalog-filters__chip--active'
								: 'catalog-filters__chip'
						}
						onClick={() => onCategoryChange(null)}
					>
						Todas
					</button>
					{categories.map(category => {
						const isActive = selectedCategory === category;
						return (
							<button
								key={category}
								type="button"
								role="radio"
								aria-checked={isActive}
								className={
									isActive
										? 'catalog-filters__chip catalog-filters__chip--active'
										: 'catalog-filters__chip'
								}
								onClick={() => onCategoryChange(category)}
							>
								{category}
							</button>
						);
					})}
				</div>
			</fieldset>

			<fieldset className="catalog-filters__group catalog-filters__fieldset">
				<legend className="catalog-filters__label">Rango de precio</legend>
				<div className="catalog-filters__price">
					<label className="catalog-filters__price-field">
						<span className="catalog-filters__price-tag">Min</span>
						<input
							className="catalog-filters__input catalog-filters__input--price"
							type="number"
							inputMode="numeric"
							min={priceBounds.min}
							max={priceRange.max}
							step={1000}
							value={priceRange.min}
							onChange={handleMinPriceChange}
							aria-label="Precio minimo"
						/>
					</label>
					<span className="catalog-filters__price-sep" aria-hidden="true">
						—
					</span>
					<label className="catalog-filters__price-field">
						<span className="catalog-filters__price-tag">Max</span>
						<input
							className="catalog-filters__input catalog-filters__input--price"
							type="number"
							inputMode="numeric"
							min={priceRange.min}
							max={priceBounds.max}
							step={1000}
							value={priceRange.max}
							onChange={handleMaxPriceChange}
							aria-label="Precio maximo"
						/>
					</label>
				</div>
			</fieldset>

			<button
				type="button"
				className="catalog-filters__reset"
				onClick={onReset}
			>
				Limpiar filtros
			</button>
		</aside>
	);
}
