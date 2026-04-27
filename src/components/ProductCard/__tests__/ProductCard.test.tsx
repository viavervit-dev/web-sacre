import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

const medalVirginUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251128/medal-virgin_ieaw4q.jpg';

const product = {
	id: 'virgen-guadalupe',
	title: 'Virgen de Guadalupe',
	subtitle: 'Medallas Marianas',
	description: 'Medalla labrada en oro con iconografia mariana.',
	price: 89000,
	image: medalVirginUrl,
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
		expect(
			screen.queryByRole('button', {
				name: /agregar/i,
			})
		).not.toBeInTheDocument();
	});
});
