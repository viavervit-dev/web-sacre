import { motion } from 'framer-motion';
import { useState } from 'react';
import {
	ProductCard,
	type ProductCardProduct,
} from '@/components/ProductCard/ProductCard';
import './style.css';

const initialVisibleProducts = 6;
const sectionEase = [0.16, 1, 0.3, 1] as const;
const medalAngelUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251044/medal-angel_zaoqc4.jpg';
const medalCrucifixUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251060/medal-crucifix_kfcqzk.jpg';
const medalSacredHeartUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251085/medal-sacred-heart_fszfrw.jpg';
const medalVirginUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251128/medal-virgin_ieaw4q.jpg';
const rosaryUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251142/rosary_bdnlrt.jpg';

const products: ProductCardProduct[] = [
	{
		id: 'virgen-guadalupe',
		title: 'Virgen de Guadalupe',
		subtitle: 'Medallas Marianas',
		description:
			'Medalla labrada con la imagen de la Patrona de America, pensada para llevar cerca del corazon.',
		price: 89000,
		image: medalVirginUrl,
		badge: 'Mas elegida',
	},
	{
		id: 'sagrado-corazon',
		title: 'Sagrado Corazon',
		subtitle: 'Devocionales',
		description:
			'El amor divino en una pieza de lineas clasicas, llamas, espinas y brillo ceremonial.',
		price: 75000,
		image: medalSacredHeartUrl,
	},
	{
		id: 'crucifijo-barroco',
		title: 'Crucifijo Barroco',
		subtitle: 'Cruz y Pasion',
		description:
			'Cruz ornamental inspirada en retablos antiguos y joyeria devocional europea.',
		price: 120000,
		image: medalCrucifixUrl,
	},
	{
		id: 'san-miguel',
		title: 'San Miguel Arcangel',
		subtitle: 'Protectores Celestiales',
		description:
			'Medallon protector con presencia de coleccion, creado para acompanar camino y oracion.',
		price: 95000,
		image: medalAngelUrl,
	},
	{
		id: 'rosario-nacar',
		title: 'Rosario de Nacar',
		subtitle: 'Oracion y Meditacion',
		description:
			'Rosario artesanal con cuentas luminosas y terminacion dorada para rituales cotidianos.',
		price: 145000,
		image: rosaryUrl,
		badge: 'Edicion limitada',
	},
	{
		id: 'medalla-milagrosa',
		title: 'Medalla Milagrosa',
		subtitle: 'Medallas Marianas',
		description:
			'Iconografia tradicional de Santa Catalina Laboure reinterpretada con delicadeza dorada.',
		price: 65000,
		image: medalVirginUrl,
	},
	{
		id: 'cruz-jerusalen',
		title: 'Cruz de Jerusalen',
		subtitle: 'Cruz y Pasion',
		description:
			'Simbolo de peregrinacion y memoria sagrada, con geometria fuerte y acabado antiguo.',
		price: 110000,
		image: medalCrucifixUrl,
	},
	{
		id: 'angel-guardian',
		title: 'Angel de la Guarda',
		subtitle: 'Protectores Celestiales',
		description:
			'Una medalla serena para bendecir hogares, viajes y vinculos queridos.',
		price: 70000,
		image: medalAngelUrl,
	},
];

export function CollectionsSection() {
	const [showAll, setShowAll] = useState(false);
	const hasMoreProducts = products.length > initialVisibleProducts;
	const visibleProducts = showAll
		? products
		: products.slice(0, initialVisibleProducts);

	function toggleVisibleProducts() {
		setShowAll(current => !current);
	}

	return (
		<section
			id="collections"
			className="collections-section"
			aria-labelledby="collections-title"
		>
			<div className="collections-section__inner sacre-container">
				<motion.header
					className="collections-section__header"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: sectionEase }}
				>
					<p className="collections-section__eyebrow">Tesoros de fe</p>
					<h2
						id="collections-title"
						className="collections-section__title text-gold-gradient"
					>
						Nuestras colecciones
					</h2>
					<div className="collections-section__ornament" aria-hidden="true" />
					<p className="collections-section__lead">
						Piezas devocionales con lenguaje de joyeria, seleccionadas para
						regalar, atesorar y acompanar la oracion diaria.
					</p>
				</motion.header>

				<div id="collections-products" className="collections-section__grid">
					{visibleProducts.map((product, index) => (
						<ProductCard key={product.id} product={product} index={index} />
					))}
				</div>

				<div className="collections-section__actions">
					{hasMoreProducts ? (
						<button
							className="collections-section__toggle"
							type="button"
							aria-expanded={showAll}
							aria-controls="collections-products"
							onClick={toggleVisibleProducts}
						>
							{showAll ? 'Mostrar menos' : 'Ver mas productos'}
							<span
								className="collections-section__toggle-corner collections-section__toggle-corner--top"
								aria-hidden="true"
							/>
							<span
								className="collections-section__toggle-corner collections-section__toggle-corner--bottom"
								aria-hidden="true"
							/>
						</button>
					) : null}
					<a className="collections-section__catalog-link" href="/catalogo">
						Ir al catalogo completo
					</a>
				</div>
			</div>
		</section>
	);
}
