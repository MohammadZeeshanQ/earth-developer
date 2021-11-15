import React from "react";
import styled from "styled-components";

export default function ButtonContainer({ active, title, setProjectOption, setSelected, nightMode }) {
	const projectHandler = (type) => {
		setProjectOption(type);
	};

	const ButtonTemplate = styled.button`
		background-color: ${(active && !nightMode) || (!active && nightMode)
			? "var(--lightThemeHeader)"
			: "var(--lightBg)"};
		color: ${(active && !nightMode) || (!active && nightMode) ? "#fcfcfc" : "#7619ff"};
		border: 1px #7619ff solid;
		cursor: pointer;
		border-radius: 0.3rem;
		letter-spacing: 0.6px;
		font: 0.8rem Nunito-Semi;
		padding: 0.5rem 1.5rem;
		margin: 0 0.5rem;

		@media (max-width: 600px) {
			font-size: 1rem;
		}
	`;

	return (
		<ButtonTemplate
			onClick={() => {
				projectHandler(title);
				setSelected(title);
			}}
		>
			{title}
		</ButtonTemplate>
	);
}
