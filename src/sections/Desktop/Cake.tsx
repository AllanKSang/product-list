import waffle from "@/assets/images/image-cake-desktop.jpg";
import Button from "@/lib/Button";

interface ICake {
	onAddToCart: () => void;
	priceTag: string;
}

export default function Cake({ onAddToCart, priceTag = "5.50" }: ICake) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={waffle} alt="waffle" className="w-[200px] rounded-xl" />
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
