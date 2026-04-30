import { render, screen } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

describe('HeroSection', () => {
	it('muestra la marca y propuesta editorial', () => {
		render(<HeroSection />);

		expect(
			screen.getByRole('heading', { level: 1, name: /sacré/i })
		).toBeInTheDocument();
		expect(
			screen.getByText(/Medallitas y articulos sacramentales/i)
		).toBeInTheDocument();
	});

	it('muestra CTAs accesibles hacia las secciones futuras', () => {
		render(<HeroSection />);

		expect(
			screen.getByRole('link', { name: 'Ver colecciones' })
		).toHaveAttribute('href', '#collections');
		expect(
			screen.getByRole('link', { name: 'Ir al catalogo' })
		).toHaveAttribute('href', '/catalogo');
	});
});
