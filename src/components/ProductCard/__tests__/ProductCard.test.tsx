import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import medalVirgin from '@/assets/medal-virgin.jpg';
import { ProductCard } from '../ProductCard';

const product = {
	id: 'virgen-guadalupe',
	title: 'Virgen de Guadalupe',
	subtitle: 'Medallas Marianas',
	description: 'Medalla labrada en oro con iconografia mariana.',
	price: 89000,
	image: medalVirgin,
	badge: 'Mas elegida',
};

describe('ProductCard', () => {
	it('muestra la informacion editorial del producto', () => {
		render(<ProductCard product={product} />);

		expect(
			screen.getByRole('heading', { level: 3, name: 'Virgen de Guadalupe' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('img', {
				name: 'Imagen de Virgen de Guadalupe de la coleccion Medallas Marianas',
			})
		).toHaveAttribute('loading', 'lazy');
		expect(screen.getByText('Mas elegida')).toBeInTheDocument();
		expect(screen.queryByText('Donativo')).not.toBeInTheDocument();
	});

	it('llama a onAdd al agregar el producto al carrito', async () => {
		const user = userEvent.setup();
		const onAdd = vi.fn();
		render(<ProductCard product={product} onAdd={onAdd} />);

		await user.click(
			screen.getByRole('button', {
				name: 'Agregar Virgen de Guadalupe al carrito',
			})
		);

		expect(onAdd).toHaveBeenCalledWith(product);
	});
});
