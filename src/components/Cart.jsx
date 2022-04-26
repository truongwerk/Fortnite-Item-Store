import { useEffect } from "react";

const Cart = () => {
	useEffect(() => {
		console.log("Alo Cart");
	}, []);
	return (
		<>
			<h1>Hello from Cart</h1>
		</>
	);
};

export default Cart;