import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from '../NotFoundPage';

describe('NotFoundPage', () => {
	it('muestra el codigo 404', () => {
		render(
			<MemoryRouter>
				<NotFoundPage />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
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
