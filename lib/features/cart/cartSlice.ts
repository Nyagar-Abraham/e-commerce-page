import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
	id: number;
	// Add other properties for a cart item if needed
	name: string;
	quantity: number;
	description: string;
	price: string;
	discount: string;
	originalPrice: string;
}

interface CartState {
	galleryOpen: boolean;
	cartOpen: boolean;
	menuOpen: boolean;
	cartItem: CartItem[];
	error: string | null;
	image: number;
}

const initialState: CartState = {
	galleryOpen: false,
	cartOpen: false,
	menuOpen: false,
	cartItem: [],
	error: null,
	image: 1,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setImage(state, action) {
			state.image = +action.payload;
		},
		nextImage(state) {
			state.image += 1;
		},
		prevImage(state) {
			state.image -= 1;
		},
		toggleCart(state) {
			state.cartOpen = !state.cartOpen;
		},
		toggleMenu(state) {
			state.menuOpen = !state.menuOpen;
		},
		toggleGallery(state) {
			state.galleryOpen = !state.galleryOpen;
		},
		addItem(state, action: PayloadAction<CartItem>) {
			const existingItem = state.cartItem.find(
				(item) => item.id === action.payload.id
			);
			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
			} else {
				state.cartItem.push(action.payload);
			}
		},
		deleteItem(state, action: PayloadAction<string>) {
			state.cartItem = state.cartItem.filter(
				(item) => item.id !== +action.payload
			);
		},
		clearCart(state) {
			state.cartItem = [];
		},
	},
});

export const {
	addItem,
	deleteItem,
	clearCart,
	toggleCart,
	toggleGallery,
	toggleMenu,
	nextImage,
	prevImage,
	setImage,
} = cartSlice.actions;

export default cartSlice.reducer;
