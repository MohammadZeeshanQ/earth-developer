import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

// component
import Portfolio from "./Portfolio.js";
import ButtonList from "./ButtonContainer.js";

// style
const Container = styled.section`
	padding: 6em 0;
`;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const ButtonContainer = styled.div`
	text-align: center;
`;

const ButtonWrapper = styled.div`
	margin: 2rem 0;
`;

export default function Index() {
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

	return (
		<Container>
			<Wrapper>
				<ButtonContainer>
					<Typography
						variant='h3'
						sx={{
							fontFamily: "Nunito-Bold",
							letterSpacing: "1px",
						}}
					>
						Portfolio
					</Typography>
					<ButtonWrapper>
						{buttonData.map((item, index) => (
							<ButtonList
								key={index}
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
				<Portfolio projectOption={projectOption} />
			</Wrapper>
		</Container>
	);
}
