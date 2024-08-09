import baklavaImage from "@/assets/images/image-baklava-mobile.jpg";
import Button from "@/lib/Button";

interface IMBaklava {
	onAddToCart: () => void;
	priceTag: string;
}

export default function MBaklava({
	onAddToCart,
	priceTag = "4.00",
}: IMBaklava) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img src={baklavaImage} alt="waffle" className="w-[200px] rounded-xl" />
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
