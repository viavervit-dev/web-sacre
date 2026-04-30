import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SiteHeader } from '../SiteHeader';

describe('SiteHeader', () => {
	it('muestra la marca y los links principales', () => {
		render(<SiteHeader />);
		const nav = screen.getByRole('navigation', {
			name: 'Navegacion principal',
		});

		expect(screen.getByRole('link', { name: /Sacré/i })).toHaveAttribute(
			'href',
			'/#hero'
		);
		expect(
			within(nav).getByRole('link', { name: 'Colecciones' })
		).toHaveAttribute('href', '/#collections');
		expect(within(nav).getByRole('link', { name: 'Catalogo' })).toHaveAttribute(
			'href',
			'/catalogo'
		);
		expect(within(nav).getByRole('link', { name: 'Nosotros' })).toHaveAttribute(
			'href',
			'/#about'
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

	it('muestra un unico acceso al catalogo en la navegacion principal', () => {
		render(<SiteHeader />);

		expect(screen.getAllByRole('link', { name: 'Catalogo' })).toHaveLength(1);
	});

	it('expone un boton para alternar el modo visual', async () => {
		const user = userEvent.setup();
		const onToggleTheme = vi.fn();
		render(<SiteHeader themeMode="dark" onToggleTheme={onToggleTheme} />);

		await user.click(
			screen.getByRole('button', { name: 'Cambiar a modo claro' })
		);

		expect(onToggleTheme).toHaveBeenCalledTimes(1);
	});
});
