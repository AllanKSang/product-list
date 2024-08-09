import cakeImage from "@/assets/images/image-cake-mobile.jpg";
import Button from "@/lib/Button";

interface IMCake {
	onAddToCart: () => void;
	priceTag: string;
}

export default function MCake({ onAddToCart, priceTag = "5.50" }: IMCake) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={cakeImage} alt="waffle" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Cake</h1>
				<h2 className="text-md font-semibold">Red Velvet cake</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
