import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Item() {
	const [itemData, setItemData] = useState({ item: {} });

	const itemId = useLocation().state.id;

	const fetchData = async () => {
		const response = await fetch(
			`https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`,
			{ mode: "cors" }
		);
		const data = await response.json();
		setItemData(data.data);
		console.log(data.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h1>{itemData.item.name}</h1>;
}

export default Item;
