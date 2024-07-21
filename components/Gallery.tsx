'use client';

import { images, thumbnails } from '@/constants';
import {
	nextImage,
	prevImage,
	setImage,
	toggleGallery,
} from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import iconNext from '@/public/images/icon-next.svg';
import iconPrev from '@/public/images/icon-previous.svg';
const Gallery = () => {
	const active = useAppSelector((state) => state.cart.image);
	const open = useAppSelector((state) => state.cart.galleryOpen);
	const dispatch = useAppDispatch();
	return (
		<div
			className={` inset-0 flex items-center justify-center ${
				open ? 'absolute' : 'hidden'
			}`}
		>
			<div
				className="fixed  inset-0 z-40 bg-black opacity-[0.4]"
				onClick={() => {
					dispatch(toggleGallery());
				}}
			/>
			<div className="h-[300px] w-[300x] z-50 relative">
				{images.map((image) => (
					<Image
						key={image.id}
						src={image.image}
						placeholder="blur"
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
		</div>
	);
};

export default Gallery;
