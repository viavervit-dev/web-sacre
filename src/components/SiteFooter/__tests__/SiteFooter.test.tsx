import { render, screen } from '@testing-library/react';
import { SiteFooter } from '../SiteFooter';

describe('SiteFooter', () => {
	it('muestra la marca y la cita editorial', () => {
		render(<SiteFooter />);

		expect(
			screen.getByRole('heading', { level: 2, name: 'Sacre' })
		).toBeInTheDocument();
		expect(screen.getByText('Et lux perpetua luceat eis.')).toBeInTheDocument();
	});

	it('expone canales de contacto accesibles', () => {
		render(<SiteFooter />);

		expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
			'href',
			'https://www.instagram.com/'
		);
		expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute(
			'href',
			'https://www.whatsapp.com/'
		);
	});
});
