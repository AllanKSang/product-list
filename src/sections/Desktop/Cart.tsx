import { useCallback } from "react";
import emptyCart from "@/assets/images/illustration-empty-cart.svg";
import carbonIcon from "@/assets/images/icon-carbon-neutral.svg";
import removeIcon from "@/assets/images/icon-remove-item.svg";

interface ICart {
	cartItems: {
		id: number;
		name: string;
		price: number;
		quantity: number;
		thumbnail: string;
	}[];
	removeFromCart: (id: number) => void;
	onConfirmOrder: () => void;
}

export default function Cart({
	cartItems,
	removeFromCart,
	onConfirmOrder,
}: ICart) {
	const orderTotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	const handleConfirmOrder = useCallback(() => {
		onConfirmOrder();
	}, [onConfirmOrder]);

	return (
		<div className="bg-white p-6 rounded-xl w-[350px]">
			<div className="flex justify-start gap-2">
				<h1 className="text-red-600 font-bold text-lg">
					Your Cart {cartItems.length > 0 ? `(${cartItems.length})` : "(0)"}
				</h1>
			</div>

			<div className="flex w-full items-center">
				{cartItems.length === 0 ? (
					<img src={emptyCart} alt="Empty cart" className="w-[150px] mx-auto" />
				) : (
					<div className="flex flex-col space-y-4 w-full">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex items-center justify-between w-full border-b-2 border-gray-200 py-4"
							>
								<div className="flex flex-col w-full">
									<h1 className="font-semibold">{item.name}</h1>
									<div className="flex flex-row text-black gap-2">
										<div className="text-red-900">{item.quantity}x @</div>
										<div className="text-black">${item.price.toFixed(2)}</div>
									</div>
								</div>

								<button
									className="ml-4 text-yellow-950 border border-amber-800 rounded-full"
									onClick={() => removeFromCart(item.id)}
								>
									<img
										src={removeIcon}
										alt="remove icon"
										className="w-5 hover:scale-[1.1]"
									/>
								</button>
							</div>
						))}
					</div>
				)}
			</div>

			{cartItems.length > 0 ? (
				<>
					<div className="pt-4">
						<div className="flex flex-row text-red-800 justify-between items-center">
							Order Total:{" "}
							<h1 className="font-bold text-black text-2xl">
								${orderTotal.toFixed(2)}
							</h1>
						</div>
					</div>
					<div className="pt-6 flex items-center justify-center">
						<img
							src={carbonIcon}
							alt="Carbon Neutral Icon"
							className="w-6 h-6"
						/>
						<p className="text-gray-500 text-sm ml-2">
							This order is carbon neutral.
						</p>
					</div>
					<div className="pt-6">
						<button
							className="w-full py-3 text-white bg-orange-700 rounded-full"
							onClick={handleConfirmOrder}
						>
							Confirm Order
						</button>
					</div>
				</>
			) : (
				<div className="flex justify-center text-sm text-red-800">
					Your added items will appear here
				</div>
			)}
		</div>
	);
}
