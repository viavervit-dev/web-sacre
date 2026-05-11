import { useMemo, useState } from 'react';
import { CatalogFilters } from '@/components/CatalogFilters/CatalogFilters';
import type {
	CatalogPriceRange,
	CatalogSortOption,
} from '@/components/CatalogFilters/options';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import {
	deriveCategories,
	derivePriceBounds,
	getVisibleCatalogProducts,
} from './catalog-utils';
import { catalogProducts } from './products';
import './style.css';

const categories = deriveCategories(catalogProducts);
const priceBounds = derivePriceBounds(catalogProducts);

export function CatalogPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [sort, setSort] = useState<CatalogSortOption>('featured');
	const [priceRange, setPriceRange] = useState<CatalogPriceRange>(priceBounds);

	const visibleProducts = useMemo(
		() =>
			getVisibleCatalogProducts({
				products: catalogProducts,
				searchTerm,
				selectedCategory,
				sort,
				priceRange,
			}),
		[searchTerm, selectedCategory, sort, priceRange]
	);

	function resetFilters() {
		setSearchTerm('');
		setSelectedCategory(null);
		setSort('featured');
		setPriceRange(priceBounds);
	}

	return (
		<div className="catalog-page">
			<header className="catalog-page__hero">
				<div className="catalog-page__hero-inner sacre-container">
					<p className="catalog-page__eyebrow">Catalogo</p>
					<h1
						id="catalog-title"
						className="catalog-page__title text-gold-gradient"
					>
						Piezas devocionales de Sacre
					</h1>
					<p className="catalog-page__lead">
						Una seleccion para explorar con calma. Filtra por categoria, precio
						o palabra clave para encontrar la pieza justa.
					</p>
				</div>
			</header>

			<main className="catalog-page__main sacre-container">
				<CatalogFilters
					categories={categories}
					selectedCategory={selectedCategory}
					onCategoryChange={setSelectedCategory}
					searchTerm={searchTerm}
					onSearchTermChange={setSearchTerm}
					sort={sort}
					onSortChange={setSort}
					priceRange={priceRange}
					priceBounds={priceBounds}
					onPriceRangeChange={setPriceRange}
					resultCount={visibleProducts.length}
					onReset={resetFilters}
				/>

				<section
					className="catalog-page__results"
					aria-labelledby="catalog-title"
				>
					{visibleProducts.length === 0 ? (
						<div className="catalog-page__empty" role="status">
							<p className="catalog-page__empty-title">
								No encontramos piezas con esos filtros
							</p>
							<p className="catalog-page__empty-lead">
								Probá ampliar el rango de precio o limpiar la busqueda.
							</p>
							<button
								type="button"
								className="catalog-page__empty-action"
								onClick={resetFilters}
							>
								Limpiar filtros
							</button>
						</div>
					) : (
						<div className="catalog-page__grid">
							{visibleProducts.map((product, index) => (
								<ProductCard key={product.id} product={product} index={index} />
							))}
						</div>
					)}
				</section>
			</main>
		</div>
	);
}
