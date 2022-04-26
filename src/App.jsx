import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
	return (
		<HashRouter>
			<div className="App">
				<h1>Tong Quang Truong</h1>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</HashRouter>
	);
};

function HomePage() {
	return (
		<>
			<h1>Hello from App</h1>
		</>
	);
}

export default App;
