import Image from 'next/image';
import cart from '@/public/images/icon-cart.svg';

const AddButton = ({ onClick }: any) => {
	return (
		<button
			onClick={onClick}
			className="flex-1 bg-primary px-6 py-2 rounded-md items-center justify-center flex gap-3 font-semibold text-white"
		>
			<Image src={cart} alt="cart" className="invert" />
			AddButton
		</button>
	);
};

export default AddButton;
