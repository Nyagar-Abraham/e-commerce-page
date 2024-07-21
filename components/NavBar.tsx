import Image from 'next/image';
import MenuButton from './ButtonNav';
import logo from '@/public/images/logo.svg';
import profile from '@/public/images/image-avatar.png';

import { navLinks } from '@/constants';
import Mobilenav from './Mobilenav';
import Cart from './Cart';

const NavBar = () => {
	return (
		<nav className="px-2 sm:px-0 flex justify-between  mt-3 border-b border-gray-300 items-start">
			<div
				className="flex items-center sm:items-start gap-3 md:gap-6
      "
			>
				<MenuButton />
				<Image src={logo} alt="logo icon" />
				<ul className="gap-2 hidden sm:flex text-sm font-semibold ">
					{navLinks.map((link) => (
						<li
							className="border-b-2 border-transparent hover:border-primary focus:border-primary pb-4"
							key={link}
						>
							{link}
						</li>
					))}
				</ul>
				<Mobilenav />
			</div>
			<div className="flex gap-3 items-start">
				<Cart/>
				<Image
					width={32}
					height={32}
					src={profile}
					alt="logo icon"
					className="
        border rounded-full hover:border-primary focus:border-primary -translate-y-1/4 "
				/>
			</div>
		</nav>
	);
};

export default NavBar;
