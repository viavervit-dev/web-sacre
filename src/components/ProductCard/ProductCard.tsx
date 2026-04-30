import { motion } from 'framer-motion';
import './style.css';

export interface ProductCardProduct {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	price: number;
	image: string;
	badge?: string;
}

interface ProductCardProps {
	product: ProductCardProduct;
	index?: number;
}

const cardEase = [0.16, 1, 0.3, 1] as const;

const currencyFormatter = new Intl.NumberFormat('es-AR', {
	style: 'currency',
	currency: 'ARS',
	maximumFractionDigits: 0,
});

export function ProductCard({ product, index = 0 }: ProductCardProps) {
	const formattedPrice = currencyFormatter.format(product.price);

	return (
		<motion.article
			className="product-card"
			initial={{ opacity: 0, y: 56 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{
				duration: 0.68,
				delay: (index % 3) * 0.1,
				ease: cardEase,
			}}
		>
			<div className="product-card__media">
				<img
					className="product-card__image"
					src={product.image}
					alt={`Imagen de ${product.title} de la coleccion ${product.subtitle}`}
					width="800"
					height="800"
					loading="lazy"
				/>
				{product.badge ? (
					<span className="product-card__badge">{product.badge}</span>
				) : null}
				<span
					className="product-card__corner product-card__corner--top"
					aria-hidden="true"
				/>
				<span
					className="product-card__corner product-card__corner--bottom"
					aria-hidden="true"
				/>
			</div>

			<div className="product-card__body">
				<p className="product-card__subtitle">{product.subtitle}</p>
				<h3 className="product-card__title">{product.title}</h3>
				<p className="product-card__description">{product.description}</p>

				<div className="product-card__footer">
					<div className="product-card__price-block">
						<span className="product-card__price text-gold-gradient">
							{formattedPrice}
						</span>
					</div>
				</div>
			</div>
		</motion.article>
	);
}
