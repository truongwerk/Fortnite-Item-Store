import { useEffect } from "react";

const Shop = () => {
	useEffect(() => {
		console.log("Alo Profile");
	}, []);
	return (
		<>
			<h1>Hello from Shop</h1>
		</>
	);
};

export default Shop;
