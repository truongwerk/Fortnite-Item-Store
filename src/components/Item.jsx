import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import "../styles/item.css";
import vbuck from "../img/vbuck.png";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Item(props) {
	const [itemData, setItemData] = useState({
		item: { images: { information: "" }, ratings: { avgStars: 0 } },
	});

	const [quantity, setQuantity] = useState(0);
	const [disable, setDisable] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		if (quantity === 0) {
			setDisable(true);
		} else setDisable(false);
	}, [quantity]);

	// const itemId = useLocation().state.id;

	let { id } = useParams();
	const fetchData = async () => {
		const response = await fetch(
			`https://fortnite-api.theapinetwork.com/item/get?id=${id}`,
			{ mode: "cors" }
		);
		const data = await response.json();
		setItemData(data.data);
	};

	const addToCart = () => {
		props.appCallback({
			id: itemData.itemId,
			name: itemData.item.name,
			image: itemData.item.images.icon,
			cost: itemData.item.cost,
			quantity: quantity,
		});
		setQuantity(0);
	};

	return (
		<div className="itemDetail" style={loading ? { display: "none" } : {}}>
			<img
				src={itemData.item.images.information}
				alt="item image"
				className="itemImage"
				onLoad={() => {
					setLoading(false);
				}}
			/>
			<div className="sidePanel">
				<h1>{itemData.item.name}</h1>
				<p>{itemData.item.description}</p>
				<div className="rating">
					<Rating
						value={itemData.item.ratings.avgStars}
						precision={0.1}
						readOnly
					/>
					<h4>{itemData.item.ratings.avgStars}</h4>
				</div>
				<div className="itemPrice">
					<h2>{itemData.item.cost}</h2>
					<img src={vbuck} alt="vbuck" />
				</div>
				<div className="quantity">
					<Button
						variant="outlined"
						color="error"
						disabled={disable}
						onClick={() => {
							setQuantity((pre) => pre - 1);
						}}
						className="quantityBtn"
					>
						<RemoveIcon />
					</Button>
					<div className="quantityDisplay">
						<p>{quantity}</p>
					</div>
					<Button
						variant="outlined"
						color="error"
						onClick={() => {
							setQuantity((pre) => pre + 1);
						}}
						className="quantityBtn"
					>
						<AddIcon />
					</Button>
				</div>
				<div className="totalPrice">
					<p>{`Total: ${itemData.item.cost * quantity}`}</p>
					<img src={vbuck} alt="vbuck" />
				</div>
				<Button
					variant="contained"
					fullWidth
					color="error"
					size="large"
					onClick={addToCart}
					disabled={disable}
				>
					Add to cart
				</Button>
			</div>
		</div>
	);
}

Item.propTypes = {
	appCallback: PropTypes.func,
};

export default Item;
