import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

// Logo
import Logo from "../assets/images/icons/Logo.png";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const useStyles = makeStyles({
	wrapper: {
		padding: "2rem 0 3rem 0",
		color: "#050505",
		textAlign: "center",

		"@media(max-width: 600px)": {
			padding: "1rem 0 3rem 0",
		},

		"@media(min-width: 600px) and (max-width: 900px)": {
			padding: "1rem 0 3rem 0",
		},
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
	copyrightDiv: {
		marginTop: "1em",
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

	const IconLink = styled.a`
		margin-right: 1rem;
	`;

	const IconBox = styled.div``;

	const IconFace = styled(FaFacebookSquare)`
		font-size: 2.5rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
	`;

	const IconGit = styled(FaGithubSquare)`
		font-size: 2.5rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
	`;
	const IconLinked = styled(FaLinkedin)`
		font-size: 2.5rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
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
					<IconLink href='https://www.facebook.com/Mohammad.Zzeshan'>
						<IconBox>
							<IconFace />
						</IconBox>
					</IconLink>

					<IconLink href='https://github.com/MohammadZeeshanQ'>
						<IconBox>
							<IconGit />
						</IconBox>
					</IconLink>

					<IconLink href='https://www.linkedin.com/in/mohammad-zeeshan-dev'>
						<IconBox>
							<IconLinked />
						</IconBox>
					</IconLink>
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
