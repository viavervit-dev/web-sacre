import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage';

describe('NotFoundPage', () => {
	it('muestra el mensaje de pagina no encontrada', () => {
		render(
			<MemoryRouter>
				<NotFoundPage />
			</MemoryRouter>
		);

		expect(
			screen.getByRole('heading', { name: /página no encontrada/i })
		).toBeInTheDocument();
		expect(screen.getByText('Error 404')).toBeInTheDocument();
		expect(screen.getByText(/no encontramos la página/i)).toBeInTheDocument();
	});

	it('muestra el link de regreso al inicio', () => {
		render(
			<MemoryRouter>
				<NotFoundPage />
			</MemoryRouter>
		);

		const link = screen.getByRole('link', { name: /volver al inicio/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/');
	});
});
