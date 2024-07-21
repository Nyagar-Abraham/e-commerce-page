'use client';

import Image from 'next/image';
import close from '@/public/images/icon-close.svg';
import menu from '@/public/images/icon-menu.svg';

import { toggleMenu } from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const MenuButton = () => {
	const open = useAppSelector((state) => state.cart.menuOpen);
	const dispatch = useAppDispatch();
	return (
		<button
			className="flex items-center justify-center sm:!hidden "
			onClick={() => {
				dispatch(toggleMenu());
			}}
		>
			{!open ? (
				<Image src={menu} alt={'menu icon'} />
			) : (
				<Image src={close} alt={'close icon'} />
			)}
		</button>
	);
};

export default MenuButton;
