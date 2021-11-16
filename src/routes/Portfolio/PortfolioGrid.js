import React, { useEffect, useState } from "react";
import styled from "styled-components";

// material component
import { Grid } from "@mui/material";

// icons
import CloseIcon from "@material-ui/icons/Close";

// data Object
import { UiProject, WebAppProject } from "../../middleware/Portfolio.js";

export default function PortfolioGrid({ projectOption, nightMode }) {
	const [displayTitle, setDisplayTitle] = useState(WebAppProject);
	const [dialog, setDialog] = useState(false);
	const [pictureIndex, setPictureIndex] = useState([]);
	const [dialogLink, setDialogLink] = useState("");
	const [name, setName] = useState("");

	// Dialog Box Handler
	const toggleDialog = () => {
		setDialog(!dialog);
	};

	// Set data upon clicking project from DIalog Box
	const dialogData = (image, link, title) => {
		toggleDialog();
		setPictureIndex(image);
		setDialogLink(link);
		setName(title);
	};

	// Set Data Object to Display Based on State value
	const dataDisplayHandler = (projectOption) => {
		switch (projectOption) {
			case "Web App":
				setDisplayTitle(WebAppProject);
				break;
			case "Landing Page":
				setDisplayTitle(UiProject);
				break;
			default:
				setDisplayTitle(WebAppProject);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		console.log(pictureIndex);
		dataDisplayHandler(projectOption);
	}, [pictureIndex, dialogLink, projectOption]);

	// styled component
	const Container = styled.section`
		padding-top: 4rem;
	`;

	const Wrapper = styled.div``;

	const GridItemContainer = styled.div``;

	const GridBox = styled.div`
		position: relative;
		border-radius: 0.5rem;
		box-shadow: 1px 2px 10px #adadad;
		margin: 1.5rem 1rem;
		z-index: 0;

		&:hover {
			transform: translateY(-5px) scale(1.01);
			transition: 0.5s all ease;
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			border-radius: 0.5rem;
			box-shadow: 5px 8px 15px #adadad;
			transition: 0.5s all ease;
		}
		&:hover::after {
			opacity: 1;
			z-index: 1;
		}
	`;

	const ImageBox = styled.div`
		height: 12rem;

		@media (min-width: 601px) and (max-width: 1024px) {
			height: 9rem;
		}
	`;

	const Image = styled.img`
		height: 100%;
		width: 100%;
		border-radius: 0.5rem 0.5rem 0 0;
		object-fit: cover;
	`;

	const TextBox = styled.div`
		padding: 1rem;

		@media (max-width: 600px) {
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding: 1rem 1rem 0.5rem 1rem;
		}
	`;

	const Title = styled.h6`
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		font: 1.25rem Nunito-Bold;
		letter-spacing: 1px;

		@media (max-width: 600px) {
			font-size: 1.45rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1rem;
		}
	`;

	const Description = styled.p`
		color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
		font: 0.8rem Nunito-Reg;
		letter-spacing: 0.5px;
		margin: 1rem 0 2rem 0;

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: var(--tabTextSize);
		}
	`;

	const ButtonBox = styled.div``;

	return (
		<Container>
			<Wrapper>
				<Grid container justifyContent='center'>
					{displayTitle.map(({ title, image, link, program, description }, index) => (
						<Grid item key={index} xs={12} sm={6} md={4} onClick={() => dialogData(image, link, title)}>
							<GridBox>
								<ImageBox>
									<Image src={image} alt='Project Images' />
								</ImageBox>
								<TextBox>
									<Title>{title}</Title>
									<Description>{description}</Description>
								</TextBox>
							</GridBox>
						</Grid>
					))}
				</Grid>
			</Wrapper>
		</Container>
	);
}
