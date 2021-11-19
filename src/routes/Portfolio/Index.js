import React, { useState, useEffect } from "react";
import styled from "styled-components";

// component
import PortfolioGrid from "./PortfolioGrid";
import ButtonList from "./ButtonContainer.js";

export default function Index({ nightMode }) {
	const [projectOption, setProjectOption] = useState("Web App");
	const [selected, setSelected] = useState("Web App");

	useEffect(() => {
		console.log(projectOption);
	}, [projectOption]);

	const projectHandler = (type) => {
		setProjectOption(type);
	};

	const buttonData = [
		{
			name: "Web App",
			id: "Web App",
		},
		{
			name: "Landing Page",
			id: "Landing Page",
		},
	];

	// style component
	const Container = styled.section`
		padding: 6em 0;
	`;

	const Wrapper = styled.div`
		width: 80%;
		margin: auto;

		@media (max-width: 600px) {
			width: 95%;
		}
	`;

	const Header = styled.h2`
		font: 2.8rem Nunito-Bold;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		letter-spacing: 2px;

		@media (max-width: 600px) {
			font-size: 2.4rem;
		}
	`;

	const ButtonContainer = styled.div`
		text-align: center;
	`;

	const ButtonWrapper = styled.div`
		margin: 2rem 0;
	`;

	return (
		<Container>
			<Wrapper>
				<ButtonContainer>
					<Header>Portfolio</Header>
					<ButtonWrapper>
						{buttonData.map((item, index) => (
							<ButtonList
								key={index}
								nightMode={nightMode}
								title={item.name}
								setProjectOption={setProjectOption}
								setSelected={setSelected}
								active={projectOption === item.id}
								onClick={() => {
									projectHandler(item.id);
									setSelected(item.id);
								}}
							/>
						))}
					</ButtonWrapper>
				</ButtonContainer>
				<PortfolioGrid nightMode={nightMode} projectOption={projectOption} />
			</Wrapper>
		</Container>
	);
}
