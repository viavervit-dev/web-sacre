import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroSection } from '../HeroSection';

function renderHeroSection() {
	render(
		<MemoryRouter>
			<HeroSection />
		</MemoryRouter>
	);
}

describe('HeroSection', () => {
	it('muestra la marca y propuesta editorial', () => {
		renderHeroSection();

		expect(
			screen.getByRole('heading', { level: 1, name: /sacré/i })
		).toBeInTheDocument();
		expect(
			screen.getByText(/Medallitas y articulos sacramentales/i)
		).toBeInTheDocument();
	});

	it('muestra CTAs accesibles hacia las secciones futuras', () => {
		renderHeroSection();

		expect(
			screen.getByRole('link', { name: 'Ver colecciones' })
		).toHaveAttribute('href', '#collections');
		expect(
			screen.getByRole('link', { name: 'Ir al catalogo' })
		).toHaveAttribute('href', '/catalogo');
	});
});
