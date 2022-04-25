import { Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</HashRouter>
	);
};

export default RouteSwitch;
