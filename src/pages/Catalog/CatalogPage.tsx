import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader/SiteHeader';
import { useThemeStore } from '@/stores/useThemeStore';
import './style.css';

export function CatalogPage() {
	const themeMode = useThemeStore(state => state.mode);
	const toggleThemeMode = useThemeStore(state => state.toggleMode);

	return (
		<div className="catalog-page">
			<SiteHeader themeMode={themeMode} onToggleTheme={toggleThemeMode} />
			<main className="catalog-page__main">
				<section
					className="catalog-page__panel"
					aria-labelledby="catalog-title"
				>
					<p className="catalog-page__eyebrow">Catalogo</p>
					<h1
						id="catalog-title"
						className="catalog-page__title text-gold-gradient"
					>
						Catalogo de Sacré en construccion
					</h1>
					<p className="catalog-page__lead">
						Este espacio va a concentrar todo el inventario y filtros. Por
						ahora, este placeholder nos confirma que la navegacion funciona.
					</p>
					<a className="catalog-page__link" href="/#collections">
						Volver al inicio
					</a>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
