import { Link } from 'react-router-dom';
import './style.css';

export function NotFoundPage() {
	return (
		<main className="not-found-page">
			<section
				className="not-found-page__panel"
				aria-labelledby="not-found-title"
			>
				<div className="not-found-page__ornament" aria-hidden="true" />
				<p className="not-found-page__eyebrow">Error 404</p>
				<h1 className="not-found-page__title" id="not-found-title">
					Umbral no encontrado
				</h1>
				<p className="not-found-page__lead">
					Este umbral no pertenece al santuario de Sacré. Volve al inicio para
					reencontrarte con nuestras piezas sagradas.
				</p>
				<Link className="not-found-page__link" to="/">
					Volver al inicio
				</Link>
			</section>
		</main>
	);
}
