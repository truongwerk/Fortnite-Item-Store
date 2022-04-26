import { Link } from "react-router-dom";

function Navbar() {
	return (
		<ul>
			<li>
				<Link to="/">APP</Link>
			</li>
			<li>
				<Link to="/profile">Profile</Link>
			</li>
		</ul>
	);
}

export default Navbar;
