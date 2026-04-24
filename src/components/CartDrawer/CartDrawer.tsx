import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import './style.css';

export interface CartDrawerItem {
	id: string;
	title: string;
	subtitle: string;
	price: number;
	image: string;
	quantity: number;
}

interface CartDrawerProps {
	isOpen: boolean;
	items: CartDrawerItem[];
	totalItems: number;
	totalPrice: number;
	onClose: () => void;
	onRemoveItem: (id: string) => void;
	onUpdateQuantity: (id: string, quantity: number) => void;
}

const currencyFormatter = new Intl.NumberFormat('es-AR', {
	style: 'currency',
	currency: 'ARS',
	maximumFractionDigits: 0,
});

const drawerEase = [0.16, 1, 0.3, 1] as const;

export function CartDrawer({
	isOpen,
	items,
	totalItems,
	totalPrice,
	onClose,
	onRemoveItem,
	onUpdateQuantity,
}: CartDrawerProps) {
	useEffect(() => {
		if (!isOpen) {
			return;
		}

		function closeOnEscape(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onClose();
			}
		}

		window.addEventListener('keydown', closeOnEscape);

		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen ? (
				<div className="cart-drawer" role="presentation">
					<motion.button
						className="cart-drawer__overlay"
						type="button"
						aria-label="Cerrar carrito"
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.24, ease: drawerEase }}
					/>

					<motion.aside
						className="cart-drawer__panel"
						role="dialog"
						aria-modal="true"
						aria-labelledby="cart-drawer-title"
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.34, ease: drawerEase }}
					>
						<header className="cart-drawer__header">
							<div>
								<p className="cart-drawer__eyebrow">{totalItems} piezas</p>
								<h2
									id="cart-drawer-title"
									className="cart-drawer__title text-gold-gradient"
								>
									Cofre Sagrado
								</h2>
							</div>
							<button
								className="cart-drawer__close"
								type="button"
								aria-label="Cerrar carrito"
								onClick={onClose}
							>
								<span aria-hidden="true">x</span>
							</button>
						</header>

						<div className="cart-drawer__content">
							{items.length === 0 ? (
								<div className="cart-drawer__empty">
									<svg
										className="cart-drawer__empty-icon"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M7 8a5 5 0 0 1 10 0" />
										<path d="M5.5 8h13l-1 12h-11z" />
									</svg>
									<p className="cart-drawer__empty-title">
										Tu cofre esta vacio
									</p>
									<p className="cart-drawer__empty-copy">
										Descubri piezas sagradas para iniciar tu seleccion.
									</p>
								</div>
							) : (
								<ul
									className="cart-drawer__items"
									aria-label="Productos en el carrito"
								>
									{items.map(item => (
										<motion.li
											key={item.id}
											className="cart-drawer__item"
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ duration: 0.24, ease: drawerEase }}
										>
											<img
												className="cart-drawer__item-image"
												src={item.image}
												alt={`Imagen de ${item.title}`}
												width="96"
												height="96"
											/>

											<div className="cart-drawer__item-body">
												<p className="cart-drawer__item-subtitle">
													{item.subtitle}
												</p>
												<h3 className="cart-drawer__item-title">
													{item.title}
												</h3>
												<p className="cart-drawer__item-price">
													{currencyFormatter.format(item.price * item.quantity)}
												</p>
											</div>

											<div className="cart-drawer__item-actions">
												<button
													className="cart-drawer__remove"
													type="button"
													aria-label={`Eliminar ${item.title}`}
													onClick={() => onRemoveItem(item.id)}
												>
													Eliminar
												</button>

												<div
													className="cart-drawer__quantity"
													role="group"
													aria-label={`Cantidad de ${item.title}`}
												>
													<button
														className="cart-drawer__quantity-button"
														type="button"
														aria-label={`Disminuir cantidad de ${item.title}`}
														onClick={() =>
															onUpdateQuantity(item.id, item.quantity - 1)
														}
													>
														-
													</button>
													<span className="cart-drawer__quantity-value">
														{item.quantity}
													</span>
													<button
														className="cart-drawer__quantity-button"
														type="button"
														aria-label={`Aumentar cantidad de ${item.title}`}
														onClick={() =>
															onUpdateQuantity(item.id, item.quantity + 1)
														}
													>
														+
													</button>
												</div>
											</div>
										</motion.li>
									))}
								</ul>
							)}
						</div>

						<footer className="cart-drawer__footer">
							<div className="cart-drawer__total">
								<span>Total</span>
								<strong className="text-gold-gradient">
									{currencyFormatter.format(totalPrice)}
								</strong>
							</div>
							<a className="cart-drawer__cta" href="#contact" onClick={onClose}>
								Coordinar compra
							</a>
							<p className="cart-drawer__note">
								Envios y bendiciones a coordinar por contacto.
							</p>
						</footer>
					</motion.aside>
				</div>
			) : null}
		</AnimatePresence>
	);
}
