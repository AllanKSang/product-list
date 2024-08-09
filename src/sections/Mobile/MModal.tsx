import success_icon from "@/assets/images/icon-order-confirmed.svg";

interface IMModal {
	cartItems: {
		id: number;
		name: string;
		price: number;
		quantity: number;
		thumbnail: string;
	}[];
	onClose: () => void;
}

export default function MModal({ cartItems, onClose }: IMModal) {
	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white px-12 pt-12 rounded-xl shadow-lg w-full h-[100dvh] mt-[20dvh]">
				<img
					src={success_icon}
					alt="Order Confirmed"
					className="w-12 h-12 mb-4"
				/>
				<h2 className="text-3xl font-bold text-black mb-4 max-w-[20dvh]">
					Order Confirmed!
				</h2>
				<p className="text-lg mb-4 ">We hope you enjoy your food</p>
				<div className="flex flex-col bg-pink-100 p-4 rounded-lg">
					{cartItems.map((item) => (
						<div key={item.id} className="flex flex-col w-full py-4">
							<section className="flex flex-row items-center justify-between">
								<div className="flex flex-row items-center">
									<img
										src={item.thumbnail}
										alt="thumbnail"
										className="w-[50px] rounded-lg"
									/>
									<div className="ml-4">
										<h1 className="font-semibold">{item.name}</h1>
										<div className="flex flex-row">
											<div className="text-red-900">{item.quantity}x @</div>
											<h1>${item.price.toFixed(2)}</h1>
										</div>
									</div>
								</div>
								<div className="flex flex-row text-black gap-2 items-center ml-auto">
									<h2 className="font-semibold">
										${(item.price * item.quantity).toFixed(2)}
									</h2>
								</div>
							</section>
						</div>
					))}
				</div>
				<button
					className="p-2 bg-orange-700 text-white rounded-full hover:bg-orange-800 w-full mt-4"
					onClick={onClose}
				>
					Start New Order
				</button>
			</div>
		</div>
	);
}
