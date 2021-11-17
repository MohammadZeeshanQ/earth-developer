import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material";

// Component
import PurpleButton from "../../components/PurpleButton";

// images
import FrontDeveloper from "../../assets/images/services/frontDeveloper.png";
import WebDesigner from "../../assets/images/services/UI.png";
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
		width: "83%",
		margin: "auto",

		"@media(max-width: 600px)": {
			width: "90%",
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

	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
});

export default function Stuff({ nightMode }) {
	const gridData = [
		{
			title: "Front-End Development",
			description:
				"Rich appearance and Interactive website for better experience. I ensure the performance scores remains high while the render duration is low.",
			image: FrontDeveloper,
			layoutDirection: "row",
		},
		{
			title: "Web Designing",
			description:
				"Elegant yet eye catching layout designs. Modern User Interface to match the trends and maintaining the User Experience as well.",
			image: WebDesigner,
			layoutDirection: "row-reverse",
		},
		{
			title: "Graphic Designer",
			description:
				"Icons, Logo, Images Manipulation and etc Visual Elements designed by me, to  add meaning and support the development of the User Interface.",
			image: GraphicDesigner,
			layoutDirection: "row",
		},
	];

	// styled component
	const Container = styled.section`
		padding: 1rem 0;
	`;

	const Wrapper = styled.div`
		width: 80%;
		margin: auto;

		@media (max-width: 600px) {
			width: 90%;
		}

		@media (min-width: 601px) and (max-width: 1024px) {
			width: 90%;
		}
	`;

	const TextWrapper = styled.div`
		display: flex;
		align-items: center;

		@media (max-width: 600px) {
			text-align: center;
		}
	`;

	const TextBox = styled.div``;

	const Header = styled.h2`
		font: 2.3rem Nunito-Bold;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		letter-spacing: 1px;

		@media (max-width: 600px) {
			font-size: 1.8rem;
			margin-top: 2rem;
			line-height: 160%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1.5rem;
		}
	`;

	const Description = styled.p`
		font: var(--pcTextSize) Nunito-Reg;
		color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
		letter-spacing: 0.5px;
		line-height: 180%;
		margin: 1rem 0 3rem 0;

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
			margin-top: 2rem;
			line-height: 160%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding-top: 0;
			margin-bottom: 1.5rem;
			line-height: 150%;
			font-size: var(--tabTextSize);
		}
	`;

	const ImageWrapper = styled.div``;

	const Image = styled.img`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`;

	return (
		<Container>
			<Wrapper>
				{gridData.map((item, index) => (
					<Grid
						container
						key={index}
						direction={item.layoutDirection}
						justifyContent='space-between'
						sx={{ margin: { xs: "4rem 0", sm: "5rem 0", md: "8rem 0" } }}
					>
						<Grid item xs={12} sm={5} md={5}>
							<ImageWrapper>
								<Tilty max={25} speed={300} perspective={1000} scale={1.05}>
									<Image src={item.image} alt={item.title} width='650px' height='400px' />
								</Tilty>
							</ImageWrapper>
						</Grid>

						<Grid item xs={12} sm={6} md={6}>
							<TextWrapper>
								<TextBox>
									<Header>{item.title}</Header>
									<Description>{item.description}</Description>
									<PurpleButton nightMode={nightMode} href='/earth-developer/#/portfolio'>
										Explore More
									</PurpleButton>
								</TextBox>
							</TextWrapper>
						</Grid>
					</Grid>
				))}
			</Wrapper>
		</Container>
	);
}
