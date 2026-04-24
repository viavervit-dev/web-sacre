import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CollectionsSection } from '../CollectionsSection';

describe('CollectionsSection', () => {
	it('muestra la coleccion inicial con productos editoriales', () => {
		render(<CollectionsSection />);

		expect(
			screen.getByRole('heading', { level: 2, name: 'Nuestras colecciones' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'Virgen de Guadalupe' })
		).toBeInTheDocument();
		expect(
			screen.queryByRole('heading', { level: 3, name: 'Cruz de Jerusalen' })
		).not.toBeInTheDocument();
	});

	it('permite mostrar mas y menos productos con estado accesible', async () => {
		const user = userEvent.setup();
		render(<CollectionsSection />);
		const toggle = screen.getByRole('button', { name: 'Ver mas productos' });

		expect(toggle).toHaveAttribute('aria-expanded', 'false');
		await user.click(toggle);

		expect(
			screen.getByRole('heading', { level: 3, name: 'Cruz de Jerusalen' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Mostrar menos' })
		).toHaveAttribute('aria-expanded', 'true');
	});

	it('propaga la accion de agregar producto desde una card', async () => {
		const user = userEvent.setup();
		const onAddProduct = vi.fn();
		render(<CollectionsSection onAddProduct={onAddProduct} />);

		await user.click(
			screen.getByRole('button', {
				name: 'Agregar Virgen de Guadalupe al carrito',
			})
		);

		expect(onAddProduct).toHaveBeenCalledWith(
			expect.objectContaining({ id: 'virgen-guadalupe' })
		);
	});
});
