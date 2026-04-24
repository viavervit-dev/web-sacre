import { useState } from 'react';
import './style.css';

const navLinks = [
	{ label: 'Inicio', href: '#hero' },
	{ label: 'Colecciones', href: '#collections' },
	{ label: 'Nosotros', href: '#about' },
	{ label: 'Contacto', href: '#contact' },
];

interface SiteHeaderProps {
	cartItemsCount?: number;
	onOpenCart?: () => void;
}

export function SiteHeader({
	cartItemsCount = 0,
	onOpenCart,
}: SiteHeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const cartLabel = onOpenCart
		? 'Abrir carrito'
		: 'Carrito disponible en el proximo batch';

	function closeMenu() {
		setIsMenuOpen(false);
	}

	return (
		<header className="site-header">
			<div className="site-header__inner sacre-container">
				<a className="site-header__brand" href="#hero" onClick={closeMenu}>
					<span className="site-header__brand-name">Sacre</span>
					<span className="site-header__brand-tagline">Articulos sacros</span>
				</a>

				<nav className="site-header__nav" aria-label="Navegacion principal">
					{navLinks.map(link => (
						<a key={link.href} className="site-header__link" href={link.href}>
							{link.label}
						</a>
					))}
				</nav>

				<div className="site-header__actions">
					<button
						className="site-header__cart"
						type="button"
						aria-label={cartLabel}
						disabled={!onOpenCart}
						onClick={onOpenCart}
					>
						<svg
							aria-hidden="true"
							className="site-header__cart-icon"
							viewBox="0 0 24 24"
						>
							<path d="M7 8a5 5 0 0 1 10 0" />
							<path d="M5.5 8h13l-1 12h-11z" />
						</svg>
						<span className="site-header__cart-count" aria-hidden="true">
							{cartItemsCount}
						</span>
					</button>

					<button
						className="site-header__menu-button"
						type="button"
						aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
						aria-expanded={isMenuOpen}
						aria-controls="site-header-mobile-menu"
						onClick={() => setIsMenuOpen(current => !current)}
					>
						<span aria-hidden="true" className="site-header__menu-line" />
						<span aria-hidden="true" className="site-header__menu-line" />
					</button>
				</div>
			</div>

			<nav
				id="site-header-mobile-menu"
				className="site-header__mobile-nav"
				aria-label="Navegacion mobile"
				data-open={isMenuOpen}
				hidden={!isMenuOpen}
			>
				{navLinks.map(link => (
					<a
						key={link.href}
						className="site-header__mobile-link"
						href={link.href}
						onClick={closeMenu}
					>
						{link.label}
					</a>
				))}
			</nav>
		</header>
	);
}
