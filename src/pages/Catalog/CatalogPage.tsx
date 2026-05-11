import { Link } from 'react-router-dom';
import './style.css';

export function CatalogPage() {
	return (
		<div className="catalog-page">
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
					<Link className="catalog-page__link" to="/#collections">
						Volver al inicio
					</Link>
				</section>
			</main>
		</div>
	);
}
