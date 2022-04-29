import { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Store from "./components/Store";
import Item from "./components/Item";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

import "./styles/reset.css";
import "./styles/app.css";

const requestURL = "https://fortnite-api.theapinetwork.com/store/get";

const App = () => {
	const [store, setStore] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(requestURL, { mode: "cors" });
		const data = await response.json();
		setStore(data.data);
	};

	const addItemToCart = (item) => {
		for (let i = 0; i < cart.length; i++) {
			if (item.id === cart[i].id) {
				const temp = [...cart];
				temp[i] = { ...temp[i], quantity: temp[i].quantity + item.quantity };
				setCart(temp);
				return;
			}
		}
		setCart(cart.concat(item));
	};

	const purchaseItem = (totalCost) => {
		console.log("---------------Purchased!!!--------------------");
		console.table(cart);
		console.log(`Total Cost:${totalCost}`);
		setCart([]);
	};

	useEffect(() => {
		console.table(cart);
	}, [cart]);

	return (
		<HashRouter>
			<div className="App">
				<Navbar item={cart.length} />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/store" element={<Store store={store} />} />
						<Route
							path="/cart"
							element={<Cart cart={cart} appCallback={purchaseItem} />}
						/>
						<Route
							path="/store/:id"
							element={<Item appCallback={addItemToCart} />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</HashRouter>
	);
};

function HomePage() {
	return (
		<div className="homePage">
			<h1>Fortnite Shopping Cart</h1>
			<h2>
				© 2022 Create by{" "}
				<a
					href="https://github.com/truongwerk"
					target="_blank"
					rel="noreferrer noopener"
				>
					Tong Quang Truong
				</a>
			</h2>
		</div>
	);
}

export default App;
