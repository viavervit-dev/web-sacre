import { useState } from 'react';
import './style.css';

const navLinks = [
	{ label: 'Inicio', href: '/#hero' },
	{ label: 'Colecciones', href: '/#collections' },
	{ label: 'Catalogo', href: '/catalogo' },
	{ label: 'Nosotros', href: '/#about' },
	{ label: 'Contacto', href: '/#contact' },
];

interface SiteHeaderProps {
	themeMode?: 'dark' | 'light';
	onToggleTheme?: () => void;
}

export function SiteHeader({
	themeMode = 'dark',
	onToggleTheme,
}: SiteHeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const themeLabel =
		themeMode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

	function closeMenu() {
		setIsMenuOpen(false);
	}

	return (
		<header className="site-header">
			<div className="site-header__inner sacre-container">
				<a className="site-header__brand" href="/#hero" onClick={closeMenu}>
					<span className="site-header__brand-name">Sacré</span>
					<span className="site-header__brand-tagline">
						Articulos sacramentales
					</span>
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
						className="site-header__theme-toggle"
						type="button"
						aria-label={themeLabel}
						title={themeLabel}
						onClick={onToggleTheme}
					>
						<span className="site-header__theme-icon" aria-hidden="true">
							{themeMode === 'dark' ? '☀' : '☾'}
						</span>
						<span className="site-header__theme-label" aria-hidden="true">
							{themeMode === 'dark' ? 'Claro' : 'Oscuro'}
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
