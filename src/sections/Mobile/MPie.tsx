import pieImage from "@/assets/images/image-meringue-mobile.jpg";
import Button from "@/lib/Button";

interface IMPie {
	onAddToCart: () => void;
	priceTag: string;
}

export default function MPie({ onAddToCart, priceTag = "5.00" }: IMPie) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={pieImage} alt="waffle" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Pie</h1>
				<h2 className="text-md font-semibold">Lemon Meringue Pie</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
