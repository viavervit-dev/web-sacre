import heroMedals from '@/assets/hero-medals.jpg';
import './style.css';

export function HeroSection() {
	return (
		<section id="hero" className="hero-section" aria-labelledby="hero-title">
			<div className="hero-section__media" aria-hidden="true">
				<img
					className="hero-section__image"
					src={heroMedals}
					alt=""
					width="1920"
					height="1080"
					fetchPriority="high"
				/>
			</div>

			<div className="hero-section__content sacre-container">
				<div className="hero-section__ornament" aria-hidden="true" />
				<p className="hero-section__eyebrow">
					Desde el corazon de la tradicion
				</p>
				<h1 id="hero-title" className="hero-section__title text-gold-gradient">
					Sacre
				</h1>
				<p className="hero-section__lead">
					Medallitas y articulos sacros elegidos con devocion, inspirados en
					siglos de arte, fe y belleza catolica.
				</p>
				<div
					className="hero-section__actions"
					aria-label="Acciones principales"
				>
					<a
						className="hero-section__cta hero-section__cta--primary"
						href="#collections"
					>
						Ver colecciones
					</a>
					<a
						className="hero-section__cta hero-section__cta--secondary"
						href="#about"
					>
						Nuestra historia
					</a>
				</div>
			</div>
		</section>
	);
}
