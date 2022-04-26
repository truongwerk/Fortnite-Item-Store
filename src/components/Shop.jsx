import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Skeleton from "@mui/material/Skeleton";

import Rating from "@mui/material/Rating";
import "../styles/shop.css";

const Shop = (props) => {
	return (
		<>
			<div className="itemsBox">
				<LazyLoadComponent>
					{props.store.map((element) => (
						<Item key={element.itemId} itemData={element} />
					))}
				</LazyLoadComponent>
			</div>
		</>
	);
};
Shop.propTypes = {
	store: PropTypes.arrayOf(PropTypes.object),
};

function Item(props) {
	const [loading, setLoading] = useState(true);
	return (
		<div className="shopItem">
			<Link
				to={`/shop/${props.itemData.itemId}`}
				state={{ id: props.itemData.itemId }}
			>
				{loading ? (
					<Skeleton
						variant="rectangular"
						sx={{ bgcolor: "grey.900" }}
						height={200}
						width="100%"
					/>
				) : null}
				<img
					style={loading ? { display: "none" } : {}}
					src={props.itemData.item.images.icon}
					alt="item image"
					onLoad={() => {
						setLoading(false);
					}}
				></img>
				<div>
					<h3>{props.itemData.item.name}</h3>
					<h4>{`${props.itemData.store.cost}$`}</h4>
					<Rating
						name="read-only"
						value={props.itemData.item.ratings.avgStars}
						precision={0.1}
						readOnly
					/>
				</div>
			</Link>
		</div>
	);
}
Item.propTypes = {
	itemData: PropTypes.object,
};

export default Shop;
