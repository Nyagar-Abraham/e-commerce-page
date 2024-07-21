'use client';

import { navLinks } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import MenuButton from './ButtonNav';
import { toggleMenu } from '@/lib/features/cart/cartSlice';

const Mobilenav = () => {
	const open = useAppSelector((state) => state.cart.menuOpen);
	const dispatch = useAppDispatch();

	return (
		<div
			className={` absolute top-0 left-0 h-screen w-screen  bg-white ${
				open ? 'absolute' : 'hidden'
			} sm:hidden `}
		>
			<div
				className="fixed inset-0 z-10 bg-black opacity-50"
				onClick={() => dispatch(toggleMenu())}
			></div>
			<div
				className={`w-7/12 z-50 absolute top-0 left-0 h-screen pt-8 flex flex-col gap-6 pl-6 items-start bg-white`}
			>
				<MenuButton />
				<ul className=" flex flex-col gap-3 font-semibold ">
					{navLinks.map((link) => (
						<li className="hover:text-primary" key={link}>
							{link}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Mobilenav;
