import pannaCottaImage from "@/assets/images/image-panna-cotta-desktop.jpg";
import Button from "@/lib/Button";

interface IPannaCotta {
	onAddToCart: () => void;
	priceTag: string;
}

export default function PannaCotta({
	onAddToCart,
	priceTag = "6.5",
}: IPannaCotta) {
	return (
		<div className="flex flex-col ">
			<div className="waffle">
				<img
					src={pannaCottaImage}
					alt="waffle"
					className="w-[200px] rounded-xl"
				/>
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Panna Cotta</h1>
				<h2 className="text-md font-semibold">Vanilla Panna Cotta</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
