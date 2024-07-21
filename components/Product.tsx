'use client';

import { images, thumbnails } from '@/constants';
import Image from 'next/image';
import iconNext from '@/public/images/icon-next.svg';
import iconPrev from '@/public/images/icon-previous.svg';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
	nextImage,
	prevImage,
	setImage,
	toggleGallery,
} from '@/lib/features/cart/cartSlice';

const Product = () => {
	const open = useAppSelector((state) => state.cart.galleryOpen);
	const active = useAppSelector((state) => state.cart.image);
	const dispatch = useAppDispatch();

	return (
		<div className="h-[300px] relative z-0 ">
			{images.map((image) => (
				<Image
					key={image.id}
					src={image.image}
					placeholder="blur"
					onClick={() => {
						console.log('clicked');
						dispatch(toggleGallery());
					}}
					alt={'image if product'}
					className={`${
						image.id === active ? '' : 'hidden'
					} w-full h-full object-cover sm:rounded-md`}
				/>
			))}
			<div className="flex justify-between max-sm:hidden mt-5 gap-3 p-1">
				{thumbnails.map((image) => (
					<Image
						key={image.id}
						onClick={() => {
							dispatch(setImage(image.id));
						}}
						width={50}
						alt="image"
						height={50}
						src={image.thumbnail}
						className={`rounded-md
              border-2 border-transparent hover:opacity-[0.8] ${
								image.id === active ? 'border-primary' : ''
							}`}
					/>
				))}
			</div>
			<button
				disabled={active === 1}
				onClick={() => {
					dispatch(prevImage());
				}}
				className="bg-white rounded-full flex items-center justify-center h-[32px] w-[32px] absolute top-1/2 left-2 -translate-y-1/2
        sm:left-0 sm:-translate-x-1/2"
			>
				<Image src={iconPrev} alt={'icon'} />
			</button>
			<button
				disabled={active === 4}
				onClick={() => {
					dispatch(nextImage());
				}}
				className="bg-white rounded-full flex items-center justify-center h-[32px] w-[32px] absolute top-1/2 right-2 -translate-y-1/2 sm:right-0 sm:translate-x-1/2"
			>
				<Image src={iconNext} alt={'icon'} />
			</button>
		</div>
	);
};

export default Product;
