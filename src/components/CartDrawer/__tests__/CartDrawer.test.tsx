import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartDrawer, type CartDrawerItem } from '../CartDrawer';

const item: CartDrawerItem = {
	id: 'virgen-guadalupe',
	title: 'Virgen de Guadalupe',
	subtitle: 'Medallas Marianas',
	price: 89000,
	image: '/medal-virgin.jpg',
	quantity: 2,
};

function renderCartDrawer(
	overrides?: Partial<React.ComponentProps<typeof CartDrawer>>
) {
	const props = {
		isOpen: true,
		items: [] as CartDrawerItem[],
		totalItems: 0,
		totalPrice: 0,
		onClose: vi.fn(),
		onRemoveItem: vi.fn(),
		onUpdateQuantity: vi.fn(),
		...overrides,
	};

	render(<CartDrawer {...props} />);

	return props;
}

describe('CartDrawer', () => {
	it('no renderiza el dialog cuando esta cerrado', () => {
		renderCartDrawer({ isOpen: false });

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('muestra empty state accesible', () => {
		renderCartDrawer();

		expect(
			screen.getByRole('dialog', { name: 'Cofre Sagrado' })
		).toBeInTheDocument();
		expect(screen.getByText('Tu cofre esta vacio')).toBeInTheDocument();
	});

	it('muestra items, cantidades y total', () => {
		renderCartDrawer({ items: [item], totalItems: 2, totalPrice: 178000 });

		expect(
			screen.getByRole('heading', { name: 'Virgen de Guadalupe' })
		).toBeInTheDocument();
		expect(screen.getAllByText('$ 178.000')).toHaveLength(2);
		expect(screen.getByText('2')).toBeInTheDocument();
		expect(
			screen.getByRole('group', { name: 'Cantidad de Virgen de Guadalupe' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('link', { name: 'Coordinar compra' })
		).toHaveAttribute('href', '#contact');
	});

	it('permite cerrar, modificar cantidades y remover items', async () => {
		const user = userEvent.setup();
		const props = renderCartDrawer({
			items: [item],
			totalItems: 2,
			totalPrice: 178000,
		});

		await user.click(
			screen.getAllByRole('button', { name: 'Cerrar carrito' })[0]
		);
		await user.click(
			screen.getByRole('button', {
				name: 'Disminuir cantidad de Virgen de Guadalupe',
			})
		);
		await user.click(
			screen.getByRole('button', {
				name: 'Aumentar cantidad de Virgen de Guadalupe',
			})
		);
		await user.click(
			screen.getByRole('button', { name: 'Eliminar Virgen de Guadalupe' })
		);

		expect(props.onClose).toHaveBeenCalledTimes(1);
		expect(props.onUpdateQuantity).toHaveBeenCalledWith(item.id, 1);
		expect(props.onUpdateQuantity).toHaveBeenCalledWith(item.id, 3);
		expect(props.onRemoveItem).toHaveBeenCalledWith(item.id);
	});

	it('cierra con Escape', async () => {
		const user = userEvent.setup();
		const props = renderCartDrawer();

		await user.keyboard('{Escape}');

		expect(props.onClose).toHaveBeenCalledTimes(1);
	});
});
