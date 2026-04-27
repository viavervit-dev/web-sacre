import { motion } from 'framer-motion';
import './style.css';

const aboutEase = [0.16, 1, 0.3, 1] as const;

const values = [
	{
		title: 'Tradicion',
		description:
			'Cada pieza respeta siglos de iconografia catolica, simbolos marianos y memoria liturgica.',
	},
	{
		title: 'Artesania',
		description:
			'Metales nobles, volumen cuidado y terminaciones pensadas para sentirse como reliquia familiar.',
	},
	{
		title: 'Devocion',
		description:
			'Objetos creados para acompanar promesas, oraciones y pequenos altares cotidianos.',
	},
];

export function AboutSection() {
	return (
		<section id="about" className="about-section" aria-labelledby="about-title">
			<div className="about-section__inner sacre-container">
				<motion.div
					className="about-section__intro"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: aboutEase }}
				>
					<p className="about-section__eyebrow">Nuestra esencia</p>
					<h2
						id="about-title"
						className="about-section__title text-gold-gradient"
					>
						Fe hecha arte
					</h2>
					<p className="about-section__lead">
						Sacré nace de una idea simple y exigente: un objeto de devocion
						merece belleza, peso simbolico y presencia. Cada medallita, cruz y
						rosario esta elegido para unir fe, oficio y una estetica que no pide
						permiso.
					</p>
				</motion.div>

				<div className="about-section__values" aria-label="Valores de Sacré">
					{values.map((value, index) => (
						<motion.article
							className="about-section__value"
							key={value.title}
							initial={{ opacity: 0, y: 36 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{
								duration: 0.72,
								delay: 0.14 + index * 0.12,
								ease: aboutEase,
							}}
						>
							<span className="about-section__value-mark" aria-hidden="true" />
							<h3 className="about-section__value-title">{value.title}</h3>
							<p className="about-section__value-description">
								{value.description}
							</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
