'use client';

import { useAppSelector } from '@/lib/hooks';

const CartBtn = () => {
	const items = useAppSelector((state) => state.cart?.cartItem[0]?.quantity);
	return (
		<button
			className={`${
				!items ? 'hidden' : 'absolute'
			}  text-[8px] bg-primary text-white  rounded-full h-[14px] w-[22px] -top-[4px] left-[6px]`}
		>
			{items}
		</button>
	);
};

export default CartBtn;
