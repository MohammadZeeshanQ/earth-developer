import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

// Logo
import Logo from "../assets/images/icons/Logo.png";
import FacebookIcon from "../assets/images/icons/facebook.png";
import Github from "../assets/images/icons/github.png";
import LinkedIn from "../assets/images/icons/linkedin.png";

const useStyles = makeStyles({
	root: {
		backgroundColor: "#fcfcfc",
	},

	wrapper: {
		padding: "5em",
		color: "#050505",
		textAlign: "center",
	},

	logoDiv: {
		textAlign: "center",
		padding: "2rem 0",
	},

	logoIcon: {
		width: "3.5rem",
	},

	logoText: {
		position: "relative",
		left: "-.4rem",
		fontFamily: "Nunito-Bold",
		color: "#151515",
		letterSpacing: "2px",
	},

	socialMediaDiv: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	socialMediaIcons: {
		margin: "0.5em",
		maxWidth: "1.8em",

		"&:hover": {
			transform: "scale(1.2)",
			transition: ".3s ease all",
		},

		"@media(min-width: 600px) and (max-width: 900px)": {
			maxWidth: "1.5rem",
		},

		"@media(max-width: 600px)": {},
	},

	madeByDiv: {
		marginTop: "2em",
	},

	madeByLabel: {
		fontFamily: "Nunito-Reg",
	},

	madeByName: {
		fontFamily: "Nunito-Reg",
	},

	copyrightDiv: {
		marginTop: "1em",
	},

	copyrightLabel: {
		fontFamily: "Nunito-Reg",
	},

	copyrightPreservedLabel: {
		fontFamily: "Nunito-Reg",
	},
});

export default function Footer({ nightMode }) {
	const classes = useStyles();

	// styled Component
	const Container = styled.footer`
		background-color: ${nightMode ? "var(--darkBg)" : "var(--ligthBg)"};
	`;

	const LogoIcon = styled.img`
		width: 2.5rem;
	`;

	const LogoText = styled.h3`
		font-family: Nunito-Bold;
		color: ${(props) => (nightMode ? "var(--lightBg)" : "var(--darkBg)")};
		position: relative;
		left: -0.4rem;
		letter-spacing: 1px;
	`;

	const DetailText = styled.p`
		font: var(--pxTextSize) Nunito-Light;
		color: ${(props) => (nightMode ? "var(--lightBg)" : "var(--darkBg)")};
		letter-spacing: 0.5px;
	`;

	return (
		<Container>
			<div className={classes.wrapper}>
				<div className={classes.logoDiv}>
					<IconButton size='small' href='/earth-developer/#/'>
						<LogoIcon src={Logo} alt='Mohammad Zeshan' />
						<LogoText>eshan.</LogoText>
					</IconButton>
				</div>

				<div className={classes.socialMediaDiv}>
					<IconButton size='small' href='https://www.facebook.com/Mohammad.Zzeshan'>
						<img className={classes.socialMediaIcons} src={FacebookIcon} alt='Facebook' />
					</IconButton>

					<IconButton size='small' href='https://www.linkedin.com/in/mohammad-zeeshan-dev'>
						<img className={classes.socialMediaIcons} src={LinkedIn} alt='LinkedIn' />
					</IconButton>

					<IconButton size='small' href='https://github.com/MohammadZeeshanQ'>
						<img className={classes.socialMediaIcons} src={Github} alt='Github' />
					</IconButton>
				</div>

				<div className={classes.madeByDiv}>
					<DetailText>
						Made by: <br />
						Mohammad Zeeshan
					</DetailText>
				</div>

				<div className={classes.copyrightDiv}>
					<DetailText>
						&#169; Copyrights.
						<br /> All Rights Reserved.
					</DetailText>
				</div>
			</div>
		</Container>
	);
}
