import { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Cart from "./components/Cart";

import "./styles/reset.css";
import "./styles/app.css";

const requestURL = "https://fortnite-api.theapinetwork.com/store/get";

const App = () => {
	const [store, setStore] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(requestURL, { mode: "cors" });
		const data = await response.json();
		setStore(data.data);
	};

	return (
		<HashRouter>
			<div className="App">
				<Navbar item={7} />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<Shop store={store} />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/shop/:id" element={<Item />} />
					</Routes>
				</div>
			</div>
		</HashRouter>
	);
};

function HomePage() {
	return <h1>Home</h1>;
}

export default App;
