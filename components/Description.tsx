'use client';

import { product } from '@/constants';
import minus from '@/public/images/icon-minus.svg';
import plus from '@/public/images/icon-plus.svg';
import Image from 'next/image';
import { useState } from 'react';
import AddButton from './AddButton';
import { useAppDispatch } from '@/lib/hooks';
import { addItem } from '@/lib/features/cart/cartSlice';

const Description = () => {
	const [count, setCount] = useState(1);
	const dispatch = useAppDispatch();
	return (
		<div className="py-3 px-4 ">
			<h2 className=" mb-4 text-sm uppercase tracking-wider font-semibold">
				sneaker company
			</h2>
			<p className=" mb-2 text-base  tracking-wider font-semibold line-clamp-1">
				{product.name}
			</p>
			<p className="text-gray-600">{product.description}</p>
			<div className="flex mt-4 items-center justify-between flex-wrap">
				<p className="flex items-center gap-3">
					<span className="text-3xl font-bold ">${product.price}</span>
					<span className="px-2 py-1 rounded-md bg-black text-white text-sm">
						{product.discount}
					</span>
				</p>
				<p className="text-gray-600 text-xl line-through ">
					{product.originalPrice}
				</p>
			</div>

			<div className="my-3 md:my-5 px-4 flex justify-between items-center">
				<button
					disabled={count === 1}
					onClick={() => setCount((c) => c - 1)}
					className="flex items-center justify-center h-8 w-8"
				>
					<Image src={minus} alt="minus" />
				</button>
				<button className="h-8 w-8 bg-primary rounded-md text-sm flex items-center justify-center">
					{count}
				</button>
				<button
					onClick={() => setCount((c) => c + 1)}
					className="flex items-center justify-center h-8 w-8"
				>
					<Image src={plus} alt="minus" />
				</button>
			</div>
			<div className="mt-4 md:mt-7 flex px-3">
				<AddButton
					onClick={() => {
						dispatch(addItem({ ...product, quantity: count }));
					}}
				/>
			</div>
		</div>
	);
};

export default Description;
