import React from "react";
import { Button, makeStyles } from "@material-ui/core";

// icons
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
	button: {
		fontSize: "var(--pcTextSize)",
		backgroundColor: "#7619FF",
		color: "#fcfcfc",
		padding: ".6rem 1rem",
		fontFamily: "Oxy-Bold",
		textTransform: "none",
		letterSpacing: "1.5px",

		"&:hover": {
			backgroundColor: "#AA72FE",
			color: "#fcfcfc",
			transform: "scale(1.05)",
			transition: "all .3s ease-in-out",
		},

		"@media(max-width: 600px)": {
			padding: "1rem",
			fontSize: "var(--mobileTextSize)",
			letterSpacing: "3px",
		},

		"@media(min-width: 601px) and (max-width: 1024px)": {
			fontSize: "var(--tabTextSize)",
			padding: ".5rem",
		},
	},
});

export default function PurpleButton({ children, href }) {
	const classes = useStyles();

	return (
		<Button
			className={classes.button}
			href={href}
			endIcon={<ArrowForwardIosIcon style={{ marginLeft: ".5rem", fontSize: "1rem" }} />}
		>
			{children}
		</Button>
	);
}
