import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function ButtonContainer({ active, title, setProjectOption, setSelected, nightMode }) {
	const [buttonColor, setButtonColor] = useState("var(--lightBg)");
	const [textColor, setTextColor] = useState("var(--lightThemeHeader)");
	const [useColor, setUseColor] = useState(false);

	const projectHandler = (type) => {
		setProjectOption(type);
	};

	const modeHandler = (nightMode, active) => {
		if ((!nightMode && active) || (nightMode && active)) {
			nightMode && active ? setButtonColor("var(--darkThemeHeader)") : setButtonColor("var(--lightThemeHeader)");
			nightMode && active ? setTextColor("var(--darkBg)") : setTextColor("var(--lightBg)");
			setUseColor(!useColor);
		} else if ((nightMode && !active) || (!nightMode && !active)) {
			setUseColor(false);
			nightMode && !active ? setButtonColor("var(--lightBg)") : setButtonColor("var(--lightBg)");
			!nightMode && !active ? setTextColor("var(--lightThemeHeader)") : setTextColor("var(--darkBg)");
		} else {
			console.log("Error");
			setUseColor(false);
		}
	};

	useEffect(() => {
		modeHandler(nightMode, active);
	}, [buttonColor]);

	// styled component
	const ButtonTemplate = styled.button`
		position: relative;
		background-color: ${useColor ? buttonColor : buttonColor};
		color: ${useColor ? textColor : textColor};
		border: 1px solid ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		cursor: pointer;
		border-radius: 0.3rem;
		letter-spacing: 0.6px;
		font-size: 0.8rem;
		padding: 0.5rem 1.5rem;
		margin: 0 0.5rem;

		&:hover {
			transform: translateY(-3px) scale(1.05);
			transition: all 0.35s ease;
		}

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
