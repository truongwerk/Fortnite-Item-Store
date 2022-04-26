import { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import "./styles/reset.css";
import "./styles/app.css";


const App = () => {
	useEffect(() => {
		console.log("Alo");
	}, []);
	return (
		<HashRouter>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<Shop />} />
						<Route path="/cart" element={<Cart />} />
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
