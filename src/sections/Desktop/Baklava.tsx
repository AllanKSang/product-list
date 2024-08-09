import baklavaIcon from "@/assets/images/image-baklava-desktop.jpg";
import Button from "@/lib/Button";

interface IBaklava {
	onAddToCart: () => void;
	priceTag: string;
}

export default function Baklava({ onAddToCart, priceTag = "4.00" }: IBaklava) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={baklavaIcon} alt="waffle" className="w-[200px] rounded-xl" />
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Baklava</h1>
				<h2 className="text-md font-semibold">Pistashio Baklava</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
