'use client';

import Image from 'next/image';
import trash from '@/public/images/icon-delete.svg';
import { thumbnails } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { deleteItem, toggleCart } from '@/lib/features/cart/cartSlice';
import { useEffect, useRef } from 'react';

const CartItems = () => {
	const product = useAppSelector((state) => state.cart.cartItem[0]) || {};
	const { price, quantity, name } = product;
	const dispatch = useAppDispatch();
	const ref = useRef<HTMLDivElement>(null);
	const open = useAppSelector((state) => state.cart.cartOpen);

	useEffect(() => {
		function callback(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				if (open) {
					dispatch(toggleCart());
				}
			} else {
				e.stopPropagation();
			}
		}

		document.addEventListener('mousedown', callback);
		return () => {
			document.removeEventListener('mousedown', callback);
		};
	}, [dispatch, open]);

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		dispatch(deleteItem('1'));
	};

	if (!product.name)
		return (
			<div
				ref={ref}
				className={`shadow w-[300px] z-30 bg-white top-full right-0 p-3 mt-4 rounded-lg flex items-center justify-center py-8 ${
					open ? 'absolute' : 'hidden'
				}`}
			>
				cart empty
			</div>
		);

	return (
		<div
			ref={ref}
			className={`shadow absolute w-[300px] z-30 bg-white top-full right-0 p-3 mt-4 rounded-lg ${
				open ? 'absolute' : 'hidden'
			}`}
		>
			<p className="text-sm font-semibold uppercase tracking-wide">cart</p>
			<div className="bg-gray-400 h-[2px] w-full my-3" />
			<div className="flex gap-2">
				{thumbnails.map((image) => (
					<Image
						key={image.id}
						src={image.thumbnail}
						width={40}
						height={40}
						alt="image"
						className={`${image.id === 1 ? '' : 'hidden'} rounded-md`}
						onClick={(e) => e.stopPropagation()} // Prevent event bubbling
					/>
				))}

				<div>
					<p className="text-gray-600 text-sm line-clamp-1">{name}</p>
					<div className="flex gap-2 items-center">
						<p className="text-2xl text-black">
							${price}*{quantity}
						</p>
						<p className="text-xl text-gray-500">${+price * quantity}</p>
					</div>
				</div>
				<button
					onClick={handleButtonClick}
					className="h-8 w-8 flex items-center justify-center"
				>
					<Image src={trash} alt="delete" />
				</button>
			</div>
			<div className="flex mt-4">
				<button className="bg-primary py-2 flex-1 text-white font-semibold rounded-md">
					checkout
				</button>
			</div>
		</div>
	);
};

export default CartItems;
