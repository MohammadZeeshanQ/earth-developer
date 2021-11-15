import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// icons
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function PurpleButton({ children, href, nightMode }) {
	const Button = styled.button`
		position: relative;
		background-color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		font: var(--pcTextSizeButton) Nunito-Reg;
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 0.5px;
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

	return (
		<a href={href}>
			<Button>{children}</Button>
		</a>
	);
}
