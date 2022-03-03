import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Typical from "react-typical";

// Illustration
import Person from "../../assets/images/background/person.png";

// icons
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Tilt
import Tilty from "react-tilty";

export default function MainIndex({ nightMode }) {
	// styled component
	const Container = styled.section`
		position: relative;
	`;

	const Wrapper = styled.div`
		position: relative;
		width: 83%;
		margin: auto;
		padding: 6rem 0;

		@media (max-width: 600px) {
			width: 90%relative;
			padding: 3rem 0;
		}
	`;

	const TextWrapper = styled.div`
		display: flex;
		align-items: center;
		height: 100%;

		@media (max-width: 600px) {
			justify-content: center;
			padding: 5rem 0 4rem 0;
		}
	`;

	const TextBox = styled.div`
		@media (max-width: 600px) {
			text-align: center;
		}
	`;

	const Header = styled.h1`
		font-size: 4rem;
		font-weight: 700;
		letter-spacing: 1px;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		@media (max-width: 600px) {
			font-size: 2.6rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 2.5rem;
		}
	`;

	const Description = styled.p`
		font-size: 1.4rem;
		font-weight: 500;
		color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
		margin: 2rem 0 4rem 0;
		letter-spacing: 1px;

		@media (max-width: 600px) {
			font-size: 1.2rem;
			margin: 2rem 0 3rem 0;
			line-height: 190%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1rem;
			width: 90%;
		}
	`;

	const ButtonBox = styled.a`
		display: flex;
		justify-content: flex-start;

		@media (max-width: 600px) {
			justify-content: center;
		}
	`;

	const CustomButton = styled.button`
		font-size: var(--pcTextSizeButton);
		font-weight: 500;
		background-color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
		position: relative;
		display: flex;
		align-items: center;
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 1px;
		cursor: pointer;
		margin: 0 0.2rem;
		padding: 0.7rem 1.5rem;

		&:hover {
			transform: translateY(-0.3rem) scale(1.02);
			transition: all 0.35s ease;
		}

		&::after {
			content: "";
			position: absolute;
			border-radius: 0.3rem;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			box-shadow: 4px 6px 15px #adadad;
			transition: all 0.35s ease;
		}

		&:hover::after {
			opacity: 1;
		}

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: var(--tabTextSize);
		}
	`;

	const ImageBox = styled.div`
		overflow: hidden;
	`;

	const Image = styled.img`
		height: 100%;
		width: 100%;
		object-fit: cover;
	`;

	return (
		<Container>
			<Wrapper>
				<Grid container>
					<Grid item xs={12} sm={7} md={7}>
						<TextWrapper>
							<TextBox>
								<Header>Hi, I'm Zeshan.</Header>
								<Description>
									<Typical
										steps={[
											"I'm a",
											1000,
											`I'm a Front-End Developer.`,
											1500,
											"I'm a UI/UX Designer.",
											1500,
											"I'm a Web Designer.",
											1500,
										]}
										loop={Infinity}
										wrapper='b'
									/>
								</Description>

								<ButtonBox href='/earth-developer/#/portfolio'>
									<CustomButton href='/earth-developer/#/portfolio' nightMode={nightMode}>
										Check Projects
										<KeyboardArrowRightIcon style={{ marginLeft: ".5rem" }} />
									</CustomButton>
								</ButtonBox>
							</TextBox>
						</TextWrapper>
					</Grid>

					<Grid item xs={12} sm={5} md={5}>
						<ImageBox>
							<Tilty max={25} speed={300} perspective={1000} scale={1.1}>
								<Image src={Person} alt='3D Illustration' />
							</Tilty>
						</ImageBox>
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}
