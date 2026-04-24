import { create } from 'zustand';

export interface CartProduct {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	price: number;
	image: string;
	badge?: string;
}

export interface CartItem extends CartProduct {
	quantity: number;
}

export interface CartTotals {
	totalItems: number;
	totalPrice: number;
}

export interface CartState {
	items: CartItem[];
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	addItem: (item: CartProduct) => void;
	removeItem: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
}

export function getCartTotals(items: CartItem[]): CartTotals {
	return items.reduce(
		(totals, item) => ({
			totalItems: totals.totalItems + item.quantity,
			totalPrice: totals.totalPrice + item.price * item.quantity,
		}),
		{ totalItems: 0, totalPrice: 0 }
	);
}

export const useCartStore = create<CartState>()(set => ({
	items: [],
	isOpen: false,
	setIsOpen: isOpen => set({ isOpen }),
	addItem: item =>
		set(state => {
			const existingItem = state.items.find(
				cartItem => cartItem.id === item.id
			);

			if (existingItem) {
				return {
					items: state.items.map(cartItem =>
						cartItem.id === item.id
							? { ...cartItem, quantity: cartItem.quantity + 1 }
							: cartItem
					),
					isOpen: true,
				};
			}

			return {
				items: [...state.items, { ...item, quantity: 1 }],
				isOpen: true,
			};
		}),
	removeItem: id =>
		set(state => ({
			items: state.items.filter(item => item.id !== id),
		})),
	updateQuantity: (id, quantity) =>
		set(state => ({
			items:
				quantity <= 0
					? state.items.filter(item => item.id !== id)
					: state.items.map(item =>
							item.id === id ? { ...item, quantity } : item
						),
		})),
}));
