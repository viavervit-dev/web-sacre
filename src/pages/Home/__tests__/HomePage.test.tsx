import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCartStore } from '@/stores/useCartStore';
import { HomePage } from '../HomePage';

describe('HomePage', () => {
	afterEach(() => {
		useCartStore.setState({ items: [], isOpen: false });
	});

	it('muestra el shell inicial de Sacre', () => {
		render(<HomePage />);

		expect(
			screen.getByRole('heading', { level: 1, name: 'Sacre' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('navigation', { name: 'Navegacion principal' })
		).toBeInTheDocument();
	});

	it('integra catalogo, about y footer del Batch 2', () => {
		render(<HomePage />);

		expect(
			screen.getByRole('heading', { name: 'Nuestras colecciones' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: 'Fe hecha arte' })
		).toBeInTheDocument();
		expect(
			within(screen.getByRole('contentinfo')).getByRole('heading', {
				level: 2,
				name: 'Sacre',
			})
		).toBeInTheDocument();
	});

	it('conecta catalogo, contador y drawer de carrito', async () => {
		const user = userEvent.setup();
		render(<HomePage />);
		const addVirgin = screen.getByRole('button', {
			name: 'Agregar Virgen de Guadalupe al carrito',
		});

		await user.click(addVirgin);
		await user.click(addVirgin);

		expect(
			screen.getByRole('button', { name: 'Abrir carrito' })
		).toHaveTextContent('2');
		expect(
			screen.getByRole('dialog', { name: 'Cofre Sagrado' })
		).toBeInTheDocument();
		const drawer = within(
			screen.getByRole('dialog', { name: 'Cofre Sagrado' })
		);
		expect(drawer.getAllByText('$ 178.000')).toHaveLength(2);

		await user.click(
			screen.getByRole('button', {
				name: 'Disminuir cantidad de Virgen de Guadalupe',
			})
		);

		await waitFor(() => {
			expect(
				screen.getByRole('button', { name: 'Abrir carrito' })
			).toHaveTextContent('1');
		});
		expect(drawer.getAllByText('$ 89.000')).toHaveLength(2);

		await user.click(
			screen.getByRole('button', {
				name: 'Aumentar cantidad de Virgen de Guadalupe',
			})
		);

		await waitFor(() => {
			expect(
				screen.getByRole('button', { name: 'Abrir carrito' })
			).toHaveTextContent('2');
		});

		await user.click(
			screen.getByRole('button', { name: 'Eliminar Virgen de Guadalupe' })
		);

		expect(
			screen.getByRole('button', { name: 'Abrir carrito' })
		).toHaveTextContent('0');
		expect(screen.getByText('Tu cofre esta vacio')).toBeInTheDocument();
	});
});
