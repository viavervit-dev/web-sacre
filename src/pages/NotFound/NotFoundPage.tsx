import { Link } from 'react-router-dom';
import './style.css';

export function NotFoundPage() {
	return (
		<main className="not-found-page">
			<section
				className="not-found-page__panel"
				aria-labelledby="not-found-title"
			>
				<p className="not-found-page__code" aria-hidden="true">
					404
				</p>

				<div className="not-found-page__content">
					<p className="not-found-page__eyebrow">Error 404</p>
					<h1 className="not-found-page__title" id="not-found-title">
						Página no encontrada
					</h1>
					<p className="not-found-page__lead">
						No encontramos la página que buscás. Volvé al inicio para seguir
						recorriendo Sacré.
					</p>
					<Link className="not-found-page__link" to="/">
						Volver al inicio
					</Link>
				</div>
			</section>
		</main>
	);
}
