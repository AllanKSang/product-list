import { useState } from "react";
import MWaffle from "@/sections/Mobile/MWaffle";
import MCreme from "@/sections/Mobile/MCreme";
import MMacaron from "@/sections/Mobile/MMacaron";
import MTiramisu from "@/sections/Mobile/MTiramisu";
import MBaklava from "@/sections/Mobile/Mbaklava";
import MPie from "@/sections/Mobile/MPie";
import MCake from "@/sections/Mobile/MCake";
import MBrownie from "@/sections/Mobile/MBrownie";
import MPannaCotta from "@/sections/Mobile/MPannaCotta";
import MCart from "@/sections/Mobile/MCart";
import MModal from "@/sections/Mobile/MModal";
import waffleIcon from "@/assets/images/image-waffle-thumbnail.jpg";
import cremeIcon from "@/assets/images/image-creme-brulee-thumbnail.jpg";
import macaronIcon from "@/assets/images/image-macaron-thumbnail.jpg";
import tiramisuIcon from "@/assets/images/image-tiramisu-thumbnail.jpg";
import baklavaIcon from "@/assets/images/image-baklava-thumbnail.jpg";
import pieIcon from "@/assets/images/image-meringue-thumbnail.jpg";
import cakeIcon from "@/assets/images/image-cake-thumbnail.jpg";
import brownieIcon from "@/assets/images/image-brownie-thumbnail.jpg";
import pannaCottaIcon from "@/assets/images/image-panna-cotta-thumbnail.jpg";

type CartItem = {
	id: number;
	name: string;
	price: number;
	quantity: number;
	thumbnail: string;
};

export default function MobileView() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Handles adding an item to the cart
	const handleAddToCart = (item: {
		id: number;
		name: string;
		price: number;
		thumbnail: string;
	}) => {
		setCartItems((prevCartItems) => {
			const existingItem = prevCartItems.find((i) => i.id === item.id);
			if (existingItem) {
				return prevCartItems.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
				);
			}
			return [...prevCartItems, { ...item, quantity: 1 }];
		});
	};

	// Handles removing an item from the cart
	const removeFromCart = (id: number) => {
		setCartItems((prevCartItems) => {
			const item = prevCartItems.find((i) => i.id === id);
			if (item) {
				if (item.quantity > 1) {
					return prevCartItems.map((i) =>
						i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
					);
				}
				return prevCartItems.filter((i) => i.id !== id);
			}
			return prevCartItems;
		});
	};

	// Opens the modal for order confirmation
	const handleConfirmOrder = () => {
		setIsModalOpen(true);
	};

	// Closes the modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="grid grid-rows justify-center bg-pink-100 gap-6 pb-6">
			<h1 className="text-3xl font-black pt-6">Desserts</h1>
			<main className="grid grid-rows justify-center gap-6">
				<MWaffle
					onAddToCart={() =>
						handleAddToCart({
							id: 1,
							name: "Waffle with Berries",
							price: 5.5,
							thumbnail: waffleIcon,
						})
					}
					priceTag="5.50"
				/>
				<MCreme
					onAddToCart={() =>
						handleAddToCart({
							id: 2,
							name: "Creme Brulee",
							price: 6.0,
							thumbnail: cremeIcon,
						})
					}
					priceTag="6.00"
				/>
				<MMacaron
					onAddToCart={() =>
						handleAddToCart({
							id: 3,
							name: "Macaron",
							price: 4.0,
							thumbnail: macaronIcon,
						})
					}
					priceTag="4.00"
				/>
				<MTiramisu
					onAddToCart={() =>
						handleAddToCart({
							id: 4,
							name: "Tiramisu",
							price: 6.5,
							thumbnail: tiramisuIcon,
						})
					}
					priceTag="6.50"
				/>
				<MBaklava
					onAddToCart={() =>
						handleAddToCart({
							id: 5,
							name: "Baklava",
							price: 5.0,
							thumbnail: baklavaIcon,
						})
					}
					priceTag="5.00"
				/>
				<MPie
					onAddToCart={() =>
						handleAddToCart({
							id: 6,
							name: "Pie",
							price: 4.5,
							thumbnail: pieIcon,
						})
					}
					priceTag="4.50"
				/>
				<MCake
					onAddToCart={() =>
						handleAddToCart({
							id: 7,
							name: "Cake",
							price: 7.0,
							thumbnail: cakeIcon,
						})
					}
					priceTag="7.00"
				/>
				<MBrownie
					onAddToCart={() =>
						handleAddToCart({
							id: 8,
							name: "Brownie",
							price: 4.5,
							thumbnail: brownieIcon,
						})
					}
					priceTag="4.50"
				/>
				<MPannaCotta
					onAddToCart={() =>
						handleAddToCart({
							id: 9,
							name: "Panna Cotta",
							price: 5.5,
							thumbnail: pannaCottaIcon,
						})
					}
					priceTag="5.50"
				/>
			</main>
			<div className="flex justify-center">
				<MCart
					cartItems={cartItems}
					removeFromCart={removeFromCart}
					onConfirmOrder={handleConfirmOrder}
				/>
				{isModalOpen && (
					<MModal cartItems={cartItems} onClose={handleCloseModal} />
				)}
			</div>
		</div>
	);
}
