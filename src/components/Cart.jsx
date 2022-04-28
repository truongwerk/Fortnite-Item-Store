import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Button,
} from "@mui/material";

const Cart = (props) => {
	const [totalCost, setTotalCost] = useState(0);
	const [disable, setDisable] = useState(true);

	useEffect(() => {
		setTotalCost(0);
		for (let i = 0; i < props.cart.length; i++) {
			setTotalCost(
				(prev) => prev + props.cart[i].cost * props.cart[i].quantity
			);
		}
	}, [props]);

	useEffect(() => {
		if (totalCost > 0) {
			setDisable(false);
		} else setDisable(true);
	}, [totalCost]);

	const purchase = () => {
		props.appCallback(totalCost);
	};

	return (
		<div className="table">
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell></TableCell>
							<TableCell>Names</TableCell>
							<TableCell align="right">Cost</TableCell>
							<TableCell align="right">Amount</TableCell>
							<TableCell align="right">Total</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.cart.map((item) => (
							<TableRow
								key={item.id}
							>
								<TableCell>
									<img src={item.image} alt="item image" />
								</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell align="right">{item.cost}</TableCell>
								<TableCell align="right">{item.quantity}</TableCell>
								<TableCell align="right">{item.cost * item.quantity}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableHead>
						<TableRow>
							<TableCell align="right" colSpan={4}>
								Total:
							</TableCell>
							<TableCell align="right">{totalCost}</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
			<Button
				id="purchase"
				variant="contained"
				size="large"
				color="error"
				disabled={disable}
				onClick={purchase}
			>
				Purchase!!!
			</Button>
		</div>
	);
};
Cart.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.object),
	appCallback: PropTypes.func,
};

export default Cart;
