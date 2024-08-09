import cremeImage from "@/assets/images/image-creme-brulee-mobile.jpg";
import Button from "@/lib/Button";

interface IMCreme {
	onAddToCart: () => void;
	priceTag: string;
}

export default function MCreme({ onAddToCart, priceTag = "4.00" }: IMCreme) {
	return (
		<div className="flex flex-col">
			<div className="waffle">
				<img src={cremeImage} alt="vanilla" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Creme</h1>
				<h2 className="text-md font-semibold">Vanilla Bean Creme Brulee</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
