import { useState } from "react";
import Waffle from "@/sections/Desktop/Waffle";
import Creme from "@/sections/Desktop/Creme";
import Macaron from "@/sections/Desktop/Macaron";
import Tiramisu from "@/sections/Desktop/Tiramisu";
import Baklava from "@/sections/Desktop/Baklava";
import Pie from "@/sections/Desktop/Pie";
import Cake from "@/sections/Desktop/Cake";
import Brownie from "@/sections/Desktop/Brownie";
import PannaCotta from "@/sections/Desktop/PannaCotta";
import Cart from "@/sections/Desktop/Cart";
import Modal from "@/sections/Desktop/Modal";
import waffleIcon from "@/assets/images/image-waffle-thumbnail.jpg";
import cremeIcon from "@/assets/images/image-creme-brulee-thumbnail.jpg";
import macaronIcon from "@/assets/images/image-macaron-thumbnail.jpg";
import tiramisuIcon from "@/assets/images/image-tiramisu-thumbnail.jpg";
import baklavaIcon from "@/assets/images/image-baklava-thumbnail.jpg";
import pieIcon from "@/assets/images/image-meringue-thumbnail.jpg";
import cakeIcon from "@/assets/images/image-cake-thumbnail.jpg";
import brownieIcon from "@/assets/images/image-brownie-thumbnail.jpg";
import pannaCottaIcon from "@/assets/images/image-panna-cotta-thumbnail.jpg";

export default function Desktop() {
	const [cartItems, setCartItems] = useState<
		{
			id: number;
			name: string;
			price: number;
			quantity: number;
			thumbnail: string;
		}[]
	>([]);

	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const handleConfirmOrder = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-row justify-center bg-pink-100 py-14 gap-8 flex-wrap px-6">
			<main className="grid grid-cols">
				<h1 className="text-3xl font-bold pb-6">Desserts</h1>
				<div className="flex flex-row w-full gap-10 pb-6 flex-wrap">
					<Waffle
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
					<Creme
						onAddToCart={() =>
							handleAddToCart({
								id: 2,
								name: "Vanilla Bean Creme Brulee",
								price: 6.5,
								thumbnail: cremeIcon,
							})
						}
						priceTag="6.50"
					/>
					<Macaron
						onAddToCart={() =>
							handleAddToCart({
								id: 3,
								name: "Macaron Mix of Five",
								price: 5.0,
								thumbnail: macaronIcon,
							})
						}
						priceTag="5.00"
					/>
				</div>
				<div className="flex flex-row w-full gap-10 pb-6 flex-wrap">
					<Tiramisu
						onAddToCart={() =>
							handleAddToCart({
								id: 4,
								name: "Classic Tiramisu",
								price: 5.5,
								thumbnail: tiramisuIcon,
							})
						}
						priceTag="5.50"
					/>
					<Baklava
						onAddToCart={() =>
							handleAddToCart({
								id: 5,
								name: "Pistachio Baklava",
								price: 4.0,
								thumbnail: baklavaIcon,
							})
						}
						priceTag="4.00"
					/>
					<Pie
						onAddToCart={() =>
							handleAddToCart({
								id: 6,
								name: "Lemon Meringue Pie",
								price: 5.0,
								thumbnail: pieIcon,
							})
						}
						priceTag="5.00"
					/>
				</div>
				<div className="flex flex-row w-full gap-10 flex-wrap">
					<Cake
						onAddToCart={() =>
							handleAddToCart({
								id: 7,
								name: "Red Velvet Cake",
								price: 5.5,
								thumbnail: cakeIcon,
							})
						}
						priceTag="5.50"
					/>
					<Brownie
						onAddToCart={() =>
							handleAddToCart({
								id: 8,
								name: "Salted Caramel Brownie",
								price: 5.5,
								thumbnail: brownieIcon,
							})
						}
						priceTag="5.50"
					/>
					<PannaCotta
						onAddToCart={() =>
							handleAddToCart({
								id: 9,
								name: "Vanilla Panna Cotta",
								price: 6.5,
								thumbnail: pannaCottaIcon,
							})
						}
						priceTag="6.50"
					/>
				</div>
			</main>
			<div>
				<Cart
					cartItems={cartItems}
					removeFromCart={removeFromCart}
					onConfirmOrder={handleConfirmOrder}
				/>
				{isModalOpen && (
					<Modal cartItems={cartItems} onClose={handleCloseModal} />
				)}
			</div>
		</div>
	);
}
