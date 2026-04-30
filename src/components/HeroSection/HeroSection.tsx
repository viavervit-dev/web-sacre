import { motion } from 'framer-motion';
import './style.css';

const heroEase = [0.16, 1, 0.3, 1] as const;
const heroMedalsUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777250973/hero-medals_kuyjdy.jpg';

export function HeroSection() {
	return (
		<section id="hero" className="hero-section" aria-labelledby="hero-title">
			<div className="hero-section__media" aria-hidden="true">
				<img
					className="hero-section__image"
					src={heroMedalsUrl}
					alt=""
					width="1920"
					height="1080"
					fetchPriority="high"
				/>
			</div>

			<motion.div
				className="hero-section__content sacre-container"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.05, ease: heroEase }}
			>
				<motion.div
					className="hero-section__ornament"
					aria-hidden="true"
					initial={{ opacity: 0, scale: 0.58 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.72, delay: 0.25, ease: heroEase }}
				/>
				<motion.p
					className="hero-section__eyebrow"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.72, delay: 0.42, ease: heroEase }}
				>
					Desde el corazon de la tradicion
				</motion.p>
				<motion.h1
					id="hero-title"
					className="hero-section__title text-gold-gradient"
					initial={{ opacity: 0, y: 22 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9, delay: 0.62, ease: heroEase }}
				>
					SACRÉ
				</motion.h1>
				<motion.p
					className="hero-section__lead"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.72, delay: 0.9, ease: heroEase }}
				>
					Medallitas y articulos sacramentales elegidos con devocion, inspirados
					en siglos de arte, fe y belleza catolica.
				</motion.p>
				<motion.div
					className="hero-section__actions"
					aria-label="Acciones principales"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.72, delay: 1.12, ease: heroEase }}
				>
					<a
						className="hero-section__cta hero-section__cta--primary"
						href="#collections"
					>
						Ver colecciones
					</a>
					<a
						className="hero-section__cta hero-section__cta--secondary"
						href="/catalogo"
					>
						Ir al catalogo
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}
