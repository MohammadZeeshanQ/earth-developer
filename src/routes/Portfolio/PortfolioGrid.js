import React, { useEffect, useState } from "react";
import styled from "styled-components";

// loadingPage
import Loading from "../../components/LoadingPage";

// material component
import { Grid, Chip, Divider } from "@mui/material";

// icons
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";

// data Object
import { UiProject, WebAppProject } from "../../middleware/Portfolio.js";

export default function PortfolioGrid({ projectOption, nightMode }) {
	const [displayTitle, setDisplayTitle] = useState(WebAppProject);
	const [dialog, setDialog] = useState(false);
	const [pictureIndex, setPictureIndex] = useState([]);
	const [dialogLink, setDialogLink] = useState("");
	const [loading, setLoading] = useState(true);

	// Dialog Box Handler
	const toggleDialog = () => {
		setDialog(!dialog);
	};

	// Set data upon clicking project from DIalog Box
	const dialogData = (image, link, title) => {
		setLoading(!loading);
		toggleDialog();
		setPictureIndex(image);
		setDialogLink(link);
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
		font-size: 1.25rem;
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
		font-size: 0.8rem;
		letter-spacing: 0.5px;
		margin: 1rem 0;

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: var(--tabTextSize);
		}
	`;

	const ChipBox = styled.div`
		text-align: center;
		padding: 0.7rem 0;
	`;

	const ButtonBox = styled.div`
		display: flex;
		justify-content: center;
	`;

	const ButtonLink = styled.a`
		text-decoration: none;
		margin: 1rem;

		@media (max-width: 600px) {
			margin: 1rem 0.5rem;
		}
	`;

	const ButtonTemplate = styled.button`
		font-size: var(--pcTextSizeButton);
		display: flex;
		align-items: center;
		background: transparent;
		cursor: pointer;
		border: none;
		border-radius: 0.3rem;
		padding: 0.6rem 1rem;

		&:hover {
			transform: translateY(-3px) scale(1.05);
			transition: all 0.35s ease;
		}

		&::after {
			position: absolute;
			border-radius: 0.3rem;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			transform: translateY(-3px) scale(1.05);
			transition: all 0.35s ease;
		}

		&:hover::after {
			opacity: 1;
		}

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
			padding: 0.7rem 1.2rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: var(--tabTextSize);
			margin: 1rem 0.5rem;
			padding: 0.3rem 0.6rem;
		}
	`;

	const SiteButton = styled(ButtonTemplate)`
		background: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
	`;
	return (
		<div>
			{projectOption ? (
				<Container>
					<Wrapper>
						<Grid container justifyContent='center'>
							{displayTitle.map(({ title, image, link, program, description }, index) => (
								<Grid
									item
									key={index}
									xs={12}
									sm={6}
									md={4}
									onClick={() => dialogData(image, link, title)}
								>
									<GridBox>
										<ImageBox>
											<Image src={image} alt='Project Images' />
										</ImageBox>
										<TextBox>
											<Title>{title}</Title>
											<Description>{description}</Description>
										</TextBox>
										<Divider sx={{ width: "80%", margin: "0 auto" }} />
										<ChipBox>
											{program.map((item, index) => (
												<Chip
													key={index}
													label={item.code}
													size='small'
													variant='outlined'
													sx={{
														border: `1px solid ${
															nightMode
																? "var(--darkThemeHeader)"
																: "var(--lightThemeHeader)"
														}`,
														color: `${
															nightMode
																? "var(--darkThemeHeader)"
																: "var(--lightThemeHeader)"
														}`,
														margin: { xs: "0 .2rem", sm: " 0 .2rem", md: "0 .1rem" },
													}}
												/>
											))}
										</ChipBox>
										<Divider sx={{ width: "80%", margin: "0 auto" }} />
										<ButtonBox>
											<ButtonLink href={link} target='_blank' rel='noopener noreferrer'>
												<SiteButton>
													<WebIcon fontSize='small' sx={{ marginRight: ".8rem" }} />
													Demo
												</SiteButton>
											</ButtonLink>
										</ButtonBox>
									</GridBox>
								</Grid>
							))}
						</Grid>
					</Wrapper>
				</Container>
			) : (
				<Loading />
			)}
		</div>
	);
}
