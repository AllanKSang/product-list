import waffleImage from "@/assets/images/image-waffle-mobile.jpg";
import Button from "@/lib/Button";

interface IMWaffle {
	onAddToCart: () => void;
	priceTag: string;
}

export default function MWaffle({ onAddToCart, priceTag = "5.50" }: IMWaffle) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={waffleImage} alt="waffle" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Waffle</h1>
				<h2 className="text-md font-semibold">Waffle with berries</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
