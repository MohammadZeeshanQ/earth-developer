import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function LoadingPage() {
	const classes = useStyles();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={classes.root}>
			<CircularProgress color='secondary' style={{ fontSize: "10em" }} />
		</div>
	);
}
