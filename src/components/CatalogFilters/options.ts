export const catalogSortOptions = [
	{ value: 'featured', label: 'Destacados' },
	{ value: 'price-asc', label: 'Precio: menor a mayor' },
	{ value: 'price-desc', label: 'Precio: mayor a menor' },
	{ value: 'name-asc', label: 'Nombre: A — Z' },
] as const;

export type CatalogSortOption = (typeof catalogSortOptions)[number]['value'];

export interface CatalogPriceRange {
	min: number;
	max: number;
}
