import './style.css';

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
				<div className="about-section__intro">
					<p className="about-section__eyebrow">Nuestra esencia</p>
					<h2
						id="about-title"
						className="about-section__title text-gold-gradient"
					>
						Fe hecha arte
					</h2>
					<p className="about-section__lead">
						Sacre nace de una idea simple y exigente: un objeto de devocion
						merece belleza, peso simbolico y presencia. Cada medallita, cruz y
						rosario esta elegido para unir fe, oficio y una estetica que no pide
						permiso.
					</p>
				</div>

				<div className="about-section__values" aria-label="Valores de Sacre">
					{values.map(value => (
						<article className="about-section__value" key={value.title}>
							<span className="about-section__value-mark" aria-hidden="true" />
							<h3 className="about-section__value-title">{value.title}</h3>
							<p className="about-section__value-description">
								{value.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
