import { Link } from 'react-router-dom';
import './style.css';

export function NotFoundPage() {
	return (
		<main className="not-found-page">
			<h1>404</h1>
			<p>Esta pagina no existe.</p>
			<Link className="not-found-page__link" to="/">
				Volver al inicio
			</Link>
		</main>
	);
}
