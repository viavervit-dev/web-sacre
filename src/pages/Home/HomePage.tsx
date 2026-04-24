import { AboutSection } from '@/components/AboutSection/AboutSection';
import { CartDrawer } from '@/components/CartDrawer/CartDrawer';
import { CollectionsSection } from '@/components/CollectionsSection/CollectionsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader/SiteHeader';
import { getCartTotals, useCartStore } from '@/stores/useCartStore';
import './style.css';

export function HomePage() {
	const items = useCartStore(state => state.items);
	const isCartOpen = useCartStore(state => state.isOpen);
	const setIsCartOpen = useCartStore(state => state.setIsOpen);
	const addCartItem = useCartStore(state => state.addItem);
	const removeCartItem = useCartStore(state => state.removeItem);
	const updateCartQuantity = useCartStore(state => state.updateQuantity);
	const { totalItems, totalPrice } = getCartTotals(items);

	return (
		<div className="home-page">
			<SiteHeader
				cartItemsCount={totalItems}
				onOpenCart={() => setIsCartOpen(true)}
			/>
			<main className="home-page__main">
				<HeroSection />
				<CollectionsSection onAddProduct={addCartItem} />
				<AboutSection />
			</main>
			<SiteFooter />
			<CartDrawer
				isOpen={isCartOpen}
				items={items}
				totalItems={totalItems}
				totalPrice={totalPrice}
				onClose={() => setIsCartOpen(false)}
				onRemoveItem={removeCartItem}
				onUpdateQuantity={updateCartQuantity}
			/>
		</div>
	);
}
