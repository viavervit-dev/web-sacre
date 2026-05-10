import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { RootPage } from '../RootPage';

function renderRootPage() {
	const router = createMemoryRouter([
		{
			path: '/',
			element: <RootPage />,
			children: [
				{
					index: true,
					element: <main aria-label="Contenido de prueba" />,
				},
			],
		},
	]);

	render(<RouterProvider router={router} />);
}

describe('RootPage', () => {
	it('mantiene el shell de navegacion alrededor de la ruta activa', () => {
		renderRootPage();

		expect(
			screen.getByRole('navigation', { name: 'Navegacion principal' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('main', { name: 'Contenido de prueba' })
		).toBeInTheDocument();
		expect(
			within(screen.getByRole('contentinfo')).getByRole('heading', {
				level: 2,
				name: 'Sacré',
			})
		).toBeInTheDocument();
	});
});
