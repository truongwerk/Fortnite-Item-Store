import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Skeleton from "@mui/material/Skeleton";

import Rating from "@mui/material/Rating";
import "../styles/store.css";
import vbuck from "../img/vbuck.png";

const Store = (props) => {
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);

	useEffect(() => {
		setData1(props.store.slice(0, 8));
		setData2(props.store.slice(8, 16));
		setData3(props.store.slice(16));
	}, [props]);

	return (
		<>
			<div className="itemsBox">
				<LazyLoadComponent visibleByDefault={true}>
					{data1.map((element) => (
						<Item key={element.itemId} itemData={element} />
					))}
				</LazyLoadComponent>
				<LazyLoadComponent>
					{data2.map((element) => (
						<Item key={element.itemId} itemData={element} />
					))}
				</LazyLoadComponent>
				<LazyLoadComponent>
					{data3.map((element) => (
						<Item key={element.itemId} itemData={element} />
					))}
				</LazyLoadComponent>
			</div>
		</>
	);
};
Store.propTypes = {
	store: PropTypes.arrayOf(PropTypes.object),
};

function Item(props) {
	const [loading, setLoading] = useState(true);
	return (
		<div className="shopItem">
			<Link
				to={`/store/${props.itemData.itemId}`}
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
					<div className="price">
						<h4>{props.itemData.store.cost}</h4>
						<img src={vbuck} alt="vbuck" />
					</div>
					<Rating
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

export default Store;
