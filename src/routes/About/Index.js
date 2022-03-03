import React from "react";
import styled from "styled-components";

// material component
import { Grid, Divider } from "@mui/material";

// logo
import { ReactComponent as FrontEnd } from "../../assets/images/icons/Icon4.svg";
import { ReactComponent as WebDesign } from "../../assets/images/icons/Icon5.svg";
import { ReactComponent as UiUx } from "../../assets/images/icons/Icon2.svg";

// icon path objects
import { HtmlData, CssData, JsData, GitData, OtherData } from "../../middleware/AboutData.js";

export default function Index({ nightMode }) {
	// skill data
	const skillData = [
		{
			name: "HTML",
			imageData: HtmlData,
		},
		{
			name: "Scripting",
			imageData: JsData,
		},
		{
			name: "CSS",
			imageData: CssData,
		},
		{
			name: "Git Tools",
			imageData: GitData,
		},
		{
			name: "Other Tools",
			imageData: OtherData,
		},
	];

	// Gig data
	const gigData = [
		{
			name: "Front End Developer",
			icon: <FrontEnd fill={`${nightMode ? "var(--darkBg)" : "var(--lightBg)"}`} />,
		},
		{
			name: "Web Designer",
			icon: <WebDesign fill={`${nightMode ? "var(--darkBg)" : "var(--lightBg)"}`} />,
		},
		{
			name: "UI/UX Designer",
			icon: <UiUx fill={`${nightMode ? "var(--darkBg)" : "var(--lightBg)"}`} />,
		},
	];

	// styled components
	const Container = styled.section`
		padding: 5rem 0 2rem 0;

		@media (max-width: 600px) {
			padding-bottom: 5rem 0 0 0;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding-bottom: 5rem 0 0 0;
		}
	`;

	const Wrapper = styled.div`
		width: 80%;
		margin: auto;

		@media (max-width: 600px) {
			width: 90%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			width: 85%;
		}
	`;

	const AboutContainer = styled.div`
		padding: 3rem 0 5rem 0;

		@media (max-width: 600px) {
			padding: 2rem 0;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding: 2rem 0 4rem 0;
		}
	`;

	const AboutTextWrapper = styled.div``;

	const AboutHeaderWrapper = styled.div`
		text-align: center;
		padding-bottom: 4rem;

		@media (min-width: 601px) and (max-width: 1024px) {
			padding-bottom: 4rem;
		}
	`;

	const AboutHeader = styled.h2`
		font-size: 3rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		letter-spacing: 1px;

		@media (max-width: 600px) {
			font-size: 2.4rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 2rem;
		}
	`;

	const Description = styled.p`
		font-size: 1.1rem;
		color: ${nightMode ? "var(--lightBg)" : "var(--darkBg)"};
		letter-spacing: 0.5px;
		text-align: left;

		@media (max-width: 600px) {
			font-size: 1.1rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 0.8rem;
		}
	`;

	const ColorSpanText = styled.span`
		font-weight: 700;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
	`;

	const GigWrapper = styled.div`
		@media (max-width: 600px) {
			margin: 5rem 0 3rem 0;
		}
	`;

	const GigBox = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem 0;

		@media (min-width: 601px) and (max-width: 1024px) {
			padding: 0.6rem 1rem;
		}
	`;
	const GigIconWrapper = styled.div`
		width: 2.5rem;
		height: 100%;
		object-fit: cover;

		@media (max-width: 600px) {
			font-size: 2.4rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			width: 2rem;
		}
	`;
	const GigLabel = styled.h4`
		font-size: 1.3rem;
		font-weight: 500;
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};

		@media (max-width: 600px) {
			font-size: 1.1rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 0.9rem;
		}
	`;

	const SkillContainer = styled.div``;

	const SkillWrapper = styled.div``;

	const SkillHeaderBox = styled.div`
		margin: 2rem 0;
	`;

	const SkillHeader = styled.h3`
		font-size: 2.5rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		letter-spacing: 0.5px;

		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1.8rem;
		}
	`;

	const GridContainer = styled.div``;

	const GridItem = styled.div``;

	const SkillBox = styled.div``;

	const SkillTitle = styled.h4`
		font-size: 1.4rem;
		font-weight: 500;
		color: ${nightMode ? "var(--lightBg)" : "var(--darkBg)"};
		letter-spacing: 0.5px;

		@media (max-width: 600px) {
			font-size: 1.2rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1rem;
		}
	`;

	const IconWrapper = styled.div`
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 1rem;
	`;

	const SkillIconBox = styled.div`
		position: relative;
		border-radius: 0.4rem;
		text-align: center;
		margin: 0 0.2rem;
		padding: 0.5rem 1rem;

		&:hover {
			transform: scale(1.05) translateY(-5px);
			box-shadow: 2px 4px 15px #adadad;
			transition: 0.3s all linear;
		}
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			box-shadow: 2px 4px 15px #adadad;
			transform: scale(1.05) translateY(-10px);
			transition: 0.3s all linear;
			opacity: 0;
		}
		&::after:hover {
			opacity: 1;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding: 0.5rem;
		}
	`;

	const SkillIcon = styled.img`
		width: 2.5rem;
		height: 100%;
		object-fit: contain;

		@media (max-width: 600px) {
			width: 3rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			width: 2rem;
		}
	`;

	const SkillLabel = styled.p`
		font-size: 0.7rem;
		color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
		letter-spacing: 0.5px;
		margin-top: 0.5rem;

		@media (max-width: 600px) {
			font-size: 0.8rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 0.8rem;
		}
	`;

	return (
		<Container>
			<Wrapper>
				<AboutContainer>
					<AboutHeaderWrapper>
						<AboutHeader>About Me</AboutHeader>
					</AboutHeaderWrapper>

					<Grid container justifyContent='space-between' alignItems='center'>
						<Grid item xs={12} sm={6} md={6}>
							<AboutTextWrapper>
								<Description>
									My name is Mohammad Zeeshan. I love creating
									<ColorSpanText> Captivating</ColorSpanText> and{" "}
									<ColorSpanText>Elegant</ColorSpanText> Websites, Portfolio and Landing Pages for
									small businesses.
									<br />
									<br />
									Curiosity and Driven are the two main factors that have helped me to reach where I
									am. I'm a Front-end <ColorSpanText>Developer</ColorSpanText>, whose always looking
									forward to <ColorSpanText>growing</ColorSpanText> skillsets and
									<ColorSpanText> contributing</ColorSpanText> in the best way possible.
									<br />
									<br />I mainly <ColorSpanText>focus</ColorSpanText> on ensure the website is
									user-friendly, responsive, functional, and not to forget the performance-based. To
									attract people and so that everyone have a{" "}
									<ColorSpanText>great experience</ColorSpanText> interacting with the website.
								</Description>
							</AboutTextWrapper>
						</Grid>
						<Grid item xs={12} sm={4} md={4}>
							<GigWrapper>
								{gigData.map((item, index) => (
									<GigBox key={index}>
										<GigLabel>{item.name}</GigLabel>
										<GigIconWrapper>{item.icon}</GigIconWrapper>
									</GigBox>
								))}
							</GigWrapper>
						</Grid>
					</Grid>
				</AboutContainer>
				<SkillContainer>
					<SkillWrapper>
						<SkillHeaderBox>
							<SkillHeader>Skills</SkillHeader>
						</SkillHeaderBox>
						<Grid container justifyContent='space-around'>
							{skillData.map(({ name, imageData }, index) => (
								<Grid
									item
									key={index}
									xs={12}
									sm={5}
									md={5}
									justifyContent='space-around'
									sx={{
										p: { xs: "0 0 4rem 0", sm: "0 0 3rem 0", md: "0 0 3rem 0" },
									}}
								>
									<GridItem>
										<SkillBox>
											<SkillTitle>{name}</SkillTitle>
											<Divider sx={{ width: "70%" }} />
											<IconWrapper>
												{imageData.map((item, index) => (
													<SkillIconBox key={index}>
														<SkillIcon
															src={item.img}
															alt={item.name}
															height='auto'
															width='auto'
														/>
														<SkillLabel>{item.name}</SkillLabel>
													</SkillIconBox>
												))}
											</IconWrapper>
										</SkillBox>
									</GridItem>
								</Grid>
							))}
						</Grid>
					</SkillWrapper>
				</SkillContainer>
			</Wrapper>
		</Container>
	);
}
