import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

// Component
import PurpleButton from "../../components/PurpleButton";

// images
import FrontDeveloper from "../../assets/images/services/frontDeveloper.png";
import WebDesigner from "../../assets/images/services/webDesigner.png";
import GraphicDesigner from "../../assets/images/services/graphicDesigner.png";

// import Tilt from 'react-tilt' Old Library
import Tilty from "react-tilty";

const useStyles = makeStyles({
	root: {
		padding: "2rem 0",

		"@media(min-width: 601px) and (max-width: 1024px)": {
			padding: "0",
		},
	},

	wrapper: {
		width: "80%",
		margin: "auto",

		"@media(max-width: 600px)": {
			width: "95%",
		},

		"@media(min-width: 601px) and (max-width: 1024px)": {
			width: "90%",
		},
	},

	gridContainer: {
		margin: "5rem 0",
		padding: "2rem 0",

		"@media(max-width: 600px)": {
			margin: "0 0 5rem 0",
		},
	},

	imageWrapper: {},

	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},

	gridItemText: {},

	textWrapper: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "1rem",

		"@media(max-width: 600px)": {
			textAlign: "center",
			padding: "1rem 0",
		},

		"@media(min-width: 601px) and (max-width: 1024px)": {
			padding: "0 2rem 0 3rem",
		},
	},

	textHeader: {
		color: "#7619FF",
		fontFamily: "Oxy-Bold",
		letterSpacing: "3px",
		fontSize: "2.5rem",

		"@media(max-width: 600px)": {
			fontSize: "1.8em",
			marginTop: "2rem",
		},

		"@media(min-width: 600px) and (max-width: 900px)": {
			fontSize: "1.5rem",
		},
	},

	textDescription: {
		fontFamily: "Oxy-Reg",
		letterSpacing: "1px",
		lineHeight: "180%",
		color: "#535353",
		margin: "1rem 0 3rem 0",

		"@media(min-width: 600px) and (max-width: 900px)": {
			fontSize: ".7rem",
			letterSpacing: "2px",
			lineHeight: "160%",
		},

		"@media(max-width: 600px)": {
			paddingTop: "1rem",
			fontSize: "1.1rem",
		},
	},
});

export default function Stuff() {
	const classes = useStyles();

	const gridData = [
		{
			title: "Front-End Developer",
			description: "Rich appearance and Interactive website for better experience.",
			image: FrontDeveloper,
			layoutDirection: "row",
		},
		{
			title: "Web Designer",
			description: "Elegant yet eye catching layout designs. Modern UI with high level of Information",
			image: WebDesigner,
			layoutDirection: "row-reverse",
		},
		{
			title: "Graphic Designer",
			description: " Visual Graphics and Vector helps to attract people's attention.",
			image: GraphicDesigner,
			layoutDirection: "row",
		},
	];

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				{gridData.map((item, index) => (
					<Grid container key={index} direction={item.layoutDirection} className={classes.gridContainer}>
						<Grid item className={classes.gridItemImage} xs={12} sm={5} md={5}>
							<div className={classes.imageWrapper}>
								<Tilty max={25} speed={300} perspective={1000} scale={1.1}>
									<img
										src={item.image}
										className={classes.image}
										alt={item.title}
										width='650px'
										height='400px'
									/>
								</Tilty>
							</div>
						</Grid>

						<Grid item className={classes.gridItemText} xs={12} sm={7} md={7}>
							<div className={classes.textWrapper}>
								<div>
									<Typography variant='h2' className={classes.textHeader}>
										{item.title}
									</Typography>
									<Typography variant='body1' className={classes.textDescription}>
										{item.description}
									</Typography>
									<PurpleButton href='/earth-developer/#/portfolio'>Explore More</PurpleButton>
								</div>
							</div>
						</Grid>
					</Grid>
				))}
			</div>
		</div>
	);
}
