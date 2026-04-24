import { render, screen } from '@testing-library/react';
import { AboutSection } from '../AboutSection';

describe('AboutSection', () => {
	it('muestra la narrativa institucional de Sacre', () => {
		render(<AboutSection />);

		expect(
			screen.getByRole('heading', { level: 2, name: 'Fe hecha arte' })
		).toBeInTheDocument();
		expect(
			screen.getByText(/Sacre nace de una idea simple/i)
		).toBeInTheDocument();
	});

	it('muestra los valores principales de la marca', () => {
		render(<AboutSection />);

		expect(
			screen.getByRole('heading', { level: 3, name: 'Tradicion' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'Artesania' })
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 3, name: 'Devocion' })
		).toBeInTheDocument();
	});
});
