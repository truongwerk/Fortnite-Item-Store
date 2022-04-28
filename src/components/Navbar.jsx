import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";

import "../styles/navbar.css";
import logo from "../img/logo.png";
import cart from "../img/cart.svg";

function Navbar(props) {
	return (
		<header className="navbar">
			<Link to="/">
				<img src={logo} className="logo" alt="Logo" />
			</Link>
			<ul>
				<li>
					<Link to="/store" style={{ textDecoration: "none" }}>
						<Button variant="text" size="large" className="shopBtn">
							Store
						</Button>
					</Link>
				</li>
				<li>
					<Link to="/cart">
						<Badge badgeContent={props.item} max={10} color="error" id="badge">
							<img src={cart} alt="cart icon" className="cartIcon" />
						</Badge>
					</Link>
				</li>
			</ul>
		</header>
	);
}
Navbar.propTypes = {
	item: PropTypes.number,
};

export default Navbar;
