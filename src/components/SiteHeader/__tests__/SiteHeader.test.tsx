import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SiteHeader } from '../SiteHeader';

describe('SiteHeader', () => {
	it('muestra la marca y los links principales', () => {
		render(<SiteHeader />);

		expect(screen.getByRole('link', { name: /Sacre/i })).toHaveAttribute(
			'href',
			'#hero'
		);
		expect(screen.getByRole('link', { name: 'Colecciones' })).toHaveAttribute(
			'href',
			'#collections'
		);
		expect(screen.getByRole('link', { name: 'Nosotros' })).toHaveAttribute(
			'href',
			'#about'
		);
	});

	it('expone el menu mobile con estado accesible', async () => {
		const user = userEvent.setup();
		render(<SiteHeader />);
		const menuButton = screen.getByRole('button', { name: 'Abrir menu' });

		expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		await user.click(menuButton);

		expect(screen.getByRole('button', { name: 'Cerrar menu' })).toHaveAttribute(
			'aria-expanded',
			'true'
		);
	});

	it('habilita el carrito con contador real cuando recibe handler', async () => {
		const user = userEvent.setup();
		const onOpenCart = vi.fn();
		render(<SiteHeader cartItemsCount={3} onOpenCart={onOpenCart} />);

		await user.click(screen.getByRole('button', { name: 'Abrir carrito' }));

		expect(screen.getByText('3')).toBeInTheDocument();
		expect(onOpenCart).toHaveBeenCalledTimes(1);
	});
});
