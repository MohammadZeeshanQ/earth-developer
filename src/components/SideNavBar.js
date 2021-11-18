import React from "react";
import styled from "styled-components";

// Logo
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function SideNavBar({ nightMode }) {
	// styled component
	const Container = styled.div`
		position: fixed;
		top: 35%;
		right: 1%;
		z-index: 5;

		@media (max-width: 1000px) {
			display: none;
		}
	`;
	const Wrapper = styled.div``;

	const IconWrapper = styled.div`
		display: flex;
		flex-direction: column;
	`;
	const IconLink = styled.a`
		margin-bottom: 0.5rem;
	`;

	const IconBox = styled.div``;

	const IconFace = styled(FaFacebookSquare)`
		font-size: 1.8rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
	`;

	const IconGit = styled(FaGithubSquare)`
		font-size: 1.8rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
	`;
	const IconLinked = styled(FaLinkedin)`
		font-size: 1.8rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};

		&:hover {
			transform: scale(1.2);
			transition: 0.3s ease all;
		}
	`;
	return (
		<Container>
			<Wrapper>
				<IconWrapper>
					<IconLink href='https://www.facebook.com/Mohammad.Zzeshan'>
						<IconBox>
							<IconFace />
						</IconBox>
					</IconLink>

					<IconLink href='https://github.com/MohammadZeeshanQ'>
						<IconBox>
							<IconGit />
						</IconBox>
					</IconLink>

					<IconLink href='https://www.linkedin.com/in/mohammad-zeeshan-dev'>
						<IconBox>
							<IconLinked />
						</IconBox>
					</IconLink>
				</IconWrapper>
			</Wrapper>
		</Container>
	);
}
