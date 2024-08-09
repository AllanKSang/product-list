import macaronImage from "@/assets/images/image-macaron-mobile.jpg";
import Button from "@/lib/Button";

interface IMMacaron {
	onAddToCart: () => void;
	priceTag?: string;
	fullName?: string;
}

export default function MMacaron({
	onAddToCart,
	priceTag = "5.00",
	fullName = "Macaron Mix of Five",
}: IMMacaron) {
	return (
		<div className="flex flex-col">
			<div className="waffle">
				<img
					src={macaronImage}
					alt="macaron"
					className="w-[200px] rounded-xl"
				/>
			</div>
			<div className="flex justify-center">
				<Button label="Add to Cart" onAddToCart={onAddToCart} />
			</div>
			<div className="flex flex-col justify-start">
				<h1 className="text-gray-500">Macaron</h1>
				<h2 className="text-md font-semibold">{fullName}</h2>
				<h3 className="text-red-700 font-semibold">${priceTag}</h3>
			</div>
		</div>
	);
}
