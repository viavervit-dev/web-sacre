import { getCartTotals, useCartStore } from '../useCartStore';

const product = {
	id: 'virgen-guadalupe',
	title: 'Virgen de Guadalupe',
	subtitle: 'Medallas Marianas',
	description: 'Medalla labrada en oro con iconografia mariana.',
	price: 89000,
	image: '/medal-virgin.jpg',
};

describe('useCartStore', () => {
	afterEach(() => {
		useCartStore.setState({ items: [], isOpen: false });
	});

	it('agrega un producto y abre el drawer', () => {
		useCartStore.getState().addItem(product);

		expect(useCartStore.getState().items).toEqual([
			{ ...product, quantity: 1 },
		]);
		expect(useCartStore.getState().isOpen).toBe(true);
	});

	it('incrementa la cantidad si el producto ya existe', () => {
		useCartStore.getState().addItem(product);
		useCartStore.getState().addItem(product);

		expect(useCartStore.getState().items[0]?.quantity).toBe(2);
	});

	it('actualiza cantidades y remueve al llegar a cero', () => {
		useCartStore.getState().addItem(product);
		useCartStore.getState().updateQuantity(product.id, 3);

		expect(useCartStore.getState().items[0]?.quantity).toBe(3);

		useCartStore.getState().updateQuantity(product.id, 0);

		expect(useCartStore.getState().items).toEqual([]);
	});

	it('remueve productos y calcula totales', () => {
		useCartStore.getState().addItem(product);
		useCartStore.getState().updateQuantity(product.id, 2);

		expect(getCartTotals(useCartStore.getState().items)).toEqual({
			totalItems: 2,
			totalPrice: 178000,
		});

		useCartStore.getState().removeItem(product.id);

		expect(useCartStore.getState().items).toEqual([]);
	});

	it('cambia el estado abierto/cerrado', () => {
		useCartStore.getState().setIsOpen(true);

		expect(useCartStore.getState().isOpen).toBe(true);
	});
});
