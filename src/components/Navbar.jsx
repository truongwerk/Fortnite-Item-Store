import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

import "../styles/navbar.css";
import logo from "../img/logo.png";
import cart from "../img/cart.svg";

function Navbar() {
	return (
		<header className="navbar">
			<Link to="/">
				<img src={logo} className="logo" alt="Logo" />
			</Link>
			<ul>
				<li>
					<Link to="/shop">
						<Button variant="text" size="large" className="shopBtn">
							Shop
						</Button>
					</Link>
				</li>
				<li>
					<Link to="/cart">
						<Badge badgeContent={1} color="error" id="badge">
							<img src={cart} alt="cart icon" className="cartIcon" />
						</Badge>
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Navbar;
