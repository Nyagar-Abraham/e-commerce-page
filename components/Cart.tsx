'use client';

import cart from '@/public/images/icon-cart.svg';
import CartBtn from './CartBtn';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/hooks';
import { toggleCart } from '@/lib/features/cart/cartSlice';
import CartItems from './CartItems';
const Cart = () => {
	const dispatch = useAppDispatch();

	return (
		<div
			onMouseDown={(e) => {
				e.stopPropagation();
				dispatch(toggleCart());
			}}
			className="relative"
		>
			<Image width={20} height={20} src={cart} alt="logo icon" className="" />
			<CartBtn />
			<CartItems />
		</div>
	);
};

export default Cart;
