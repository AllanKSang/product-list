import Mcart from "@/assets/images/icon-add-to-cart.svg";

interface IMButton {
	label: string;
	onAddToCart: () => void;
	onClick?: () => void;
}

export default function MButton({ label, onAddToCart }: IMButton) {
	return (
		<div className="mt-[-20px] pb-2">
			<button
				className="w-[150px] text-xs border border-gray-600 rounded-full w-fit-content flex flex-row py-2 px-6 gap-4 font-semibold items-center bg-white text-sm hover:text-orange-700 hover:scale-[0.9]"
				aria-label={label}
				onClick={onAddToCart}
			>
				<img src={Mcart} alt="cart" />
				{label}
			</button>
		</div>
	);
}
