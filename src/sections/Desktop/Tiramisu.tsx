import waffle from "@/assets/images/image-tiramisu-desktop.jpg";
import Button from "@/lib/Button";

interface ITiramisu {
	onAddToCart: () => void;
	priceTag: string;
}

export default function Tiramisu({
	onAddToCart,
	priceTag = "5.50",
}: ITiramisu) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={waffle} alt="waffle" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Tiramisu</h1>
				<h2 className="text-md font-semibold">Classic Tiramisu</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
