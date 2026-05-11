import type { ProductCardProduct } from '@/components/ProductCard/ProductCard';
import type {
	CatalogPriceRange,
	CatalogSortOption,
} from '@/components/CatalogFilters/options';

interface GetVisibleCatalogProductsParams {
	products: ProductCardProduct[];
	searchTerm: string;
	selectedCategory: string | null;
	sort: CatalogSortOption;
	priceRange: CatalogPriceRange;
}

export function deriveCategories(products: ProductCardProduct[]): string[] {
	const unique = new Set(products.map(product => product.subtitle));
	return Array.from(unique).sort((a, b) => a.localeCompare(b));
}

export function derivePriceBounds(
	products: ProductCardProduct[]
): CatalogPriceRange {
	if (products.length === 0) {
		return { min: 0, max: 0 };
	}

	const prices = products.map(product => product.price);
	return {
		min: Math.min(...prices),
		max: Math.max(...prices),
	};
}

export function getVisibleCatalogProducts({
	products,
	searchTerm,
	selectedCategory,
	sort,
	priceRange,
}: GetVisibleCatalogProductsParams): ProductCardProduct[] {
	const normalizedTerm = searchTerm.trim().toLowerCase();

	const filtered = products.filter(product => {
		if (selectedCategory && product.subtitle !== selectedCategory) {
			return false;
		}

		if (product.price < priceRange.min || product.price > priceRange.max) {
			return false;
		}

		if (normalizedTerm.length === 0) {
			return true;
		}

		return (
			product.title.toLowerCase().includes(normalizedTerm) ||
			product.description.toLowerCase().includes(normalizedTerm) ||
			product.subtitle.toLowerCase().includes(normalizedTerm)
		);
	});

	switch (sort) {
		case 'price-asc':
			return [...filtered].sort((a, b) => a.price - b.price);
		case 'price-desc':
			return [...filtered].sort((a, b) => b.price - a.price);
		case 'name-asc':
			return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
		case 'featured':
		default:
			return filtered;
	}
}
