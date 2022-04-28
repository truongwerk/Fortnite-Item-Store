import React from "react";
import { Link } from "react-router-dom";

import notFound from "../img/notFound.png";

import { Button } from "@mui/material";

const NotFound = () => (
	<div className="notFound">
		<img src={notFound} alt="not-found" />
		<Link to="/">
			<Button variant="contained" color="error">
				Back To Home
			</Button>
		</Link>
		<Link to="/store">
			<Button variant="contained" color="error">
				Back to store
			</Button>
		</Link>
	</div>
);

export default NotFound;
