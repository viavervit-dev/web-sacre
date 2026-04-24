import './style.css';

const footerLinks = [
	{ label: 'Instagram', href: 'https://www.instagram.com/' },
	{ label: 'Facebook', href: 'https://www.facebook.com/' },
	{ label: 'WhatsApp', href: 'https://www.whatsapp.com/' },
];

export function SiteFooter() {
	return (
		<footer id="contact" className="site-footer" aria-labelledby="footer-title">
			<div className="site-footer__inner sacre-container">
				<div className="site-footer__brand-block">
					<h2
						id="footer-title"
						className="site-footer__brand text-gold-gradient"
					>
						Sacre
					</h2>
					<p className="site-footer__tagline">Articulos sacros</p>
				</div>

				<blockquote className="site-footer__quote">
					<p>Et lux perpetua luceat eis.</p>
					<cite>Que la luz perpetua los ilumine</cite>
				</blockquote>

				<div className="site-footer__ornament" aria-hidden="true" />

				<nav className="site-footer__links" aria-label="Canales de contacto">
					{footerLinks.map(link => (
						<a key={link.label} className="site-footer__link" href={link.href}>
							{link.label}
						</a>
					))}
				</nav>

				<p className="site-footer__legal">
					© {new Date().getFullYear()} Sacre. Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}
