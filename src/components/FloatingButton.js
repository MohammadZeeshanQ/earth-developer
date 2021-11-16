import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";

// logo
import ChatIcon from "@mui/icons-material/Chat";

export default function FloatingButton({ nightMode }) {
	const Container = styled.div`
		position: fixed;
		right: 1.5%;
		bottom: 5%;
		z-index: 5;

		@media (max-width: 600px) {
			right: 3%;
		}
	`;

	const Wrapper = styled.div`
		position: relative;
		background: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
		border-radius: 50%;
		padding: 0.8em;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			transform: translateY(-3px) scale(1.05);
			transition: 0.4s all ease;
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			transition: 0.4s all ease;
		}
		&:hover::after {
			opacity: 1;
		}
	`;

	return (
		<Container>
			<IconButton href='/earth-developer/#/contact' size='small'>
				<Wrapper>
					<ChatIcon />
				</Wrapper>
			</IconButton>
		</Container>
	);
}
