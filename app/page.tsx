import Button from '@/components/ButtonNav';
import Description from '@/components/Description';
import Gallery from '@/components/Gallery';
import NavBar from '@/components/NavBar';
import Product from '@/components/Product';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="sm:px-8 md:px-20 lg:px-32 relative">
			<NavBar />
			<div className="grid gap-3 sm:grid-cols-2 sm:mt-6">
				<Product />
				<Description />
			</div>
			<Gallery />
		</main>
	);
}
