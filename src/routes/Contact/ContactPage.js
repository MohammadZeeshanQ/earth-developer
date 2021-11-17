import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// email
import emailjs from "emailjs-com";

// material component
import { Grid, Snackbar, Alert, AlertTitle } from "@mui/material";

// icon
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage({ nightMode }) {
	const [successOpen, setSuccessOpen] = useState(false);
	const [errorOpen, setErrorOpen] = useState(false);
	const emailService = process.env.REACT_APP_EMAILSERVICE;
	const emailTemplate = process.env.REACT_APP_EMAILTEMPLATE;
	const emailEmailKey = process.env.REACT_APP_EMAILKEY;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault(e);

		emailjs.sendForm(emailService, emailTemplate, e.target, emailEmailKey).then(
			(result) => {
				setSuccessOpen(true);
				console.log(result.text);
			},
			(error) => {
				setErrorOpen(true);
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	const handleClose = (reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSuccessOpen(false);
		setErrorOpen(false);
	};

	// styled component
	const Container = styled.section`
		position: relative;
		padding: 10rem 0 5rem 0;
		z-index: 0;

		@media (max-width: 600px) {
			padding: 6rem 0 0 0;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			padding: 15rem 0;
		}
	`;

	const Wrapper = styled.div`
		width: 80%;
		margin: auto;

		@media (max-width: 600px) {
			width: 95%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			width: 85%;
		}
	`;

	const MessageBox = styled.div`
		padding: 1rem;

		@media (max-width: 600px) {
			text-align: center;
		}
	`;

	const Header = styled.h2`
		font: 2.5rem Nunito-Bold;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		letter-spacing: 1px;
		line-height: 1.1;

		@media (max-width: 600px) {
			font-size: 2rem;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 1.8rem;
		}
	`;

	const Description = styled.p`
		font: var(--pcTextSize) Nunito-Reg;
		color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
		letter-spacing: 0.5px;
		margin-top: 1rem;

		@media (max-width: 600px) {
			font-size: var(--mobileTextSize);
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: var(--tabTextSize);
		}
	`;

	const InputBox = styled.div`
		padding: 1rem;

		@media (max-width: 600px) {
			margin-top: 2rem;
		}
	`;

	const InputDiv = styled.div`
		margin-bottom: 1.5rem;

		@media (min-width: 601px) and (max-width: 1024px) {
			margin-bottom: 1rem;
		}
	`;

	const Input = styled.input`
		width: 100%;
		background-color: transparent;
		color: ${nightMode ? "var(--lightBg)" : "var(--lightThemeHeader)"};
		font: var(--pcTextSize) Nunito-Bold;
		letter-spacing: 0.6px;
		padding: 0.75rem 1rem;
		border: 1px solid var(--ligthDescriptionColor);
		border-radius: 0.3rem;

		&:focus {
			border: 1px solid var(--darkBg);
		}
		&::placeholder {
			color: ${nightMode ? "var(--ligthDescriptionColor)" : "var(--darkDescriptionColor)"};
			font: var(--pcTextSize) Nunito-Reg;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			font-size: 0.5rem;
			padding: 0.75rem 1rem;

			&::placeholder {
				font-size: 0.8rem;
			}
		}
	`;

	const SubmitButtonBox = styled.div`
		display: flex;
		justify-content: center;
		margin-top: 3rem;

		@media (min-width: 601px) and (max-width: 1024px) {
			margin-top: 1.5rem;
		}
	`;

	const SubmitButton = styled.button`
		font: var(--pcTextSizeButton) Nunito-Reg;
		display: flex;
		align-items: center;
		position: relative;
		background-color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 0.5px;
		cursor: pointer;
		margin: 0 0.2rem;
		padding: 0.7rem 2rem;

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
			padding: 0.6rem 1rem;
		}
	`;

	return (
		<Container>
			<Wrapper>
				<Grid container justifyContent='space-between'>
					<Grid item xs={12} sm={6} md={6}>
						<MessageBox>
							<Header>
								Hi there,
								<br />
								Feel free to reach out to me!
							</Header>
							<Description>
								I would gladly contribute to any of your projects, if you're looking for someone. I'm
								here to help and answer any question you might have. I'm looking forward to hear from
								you.
							</Description>
						</MessageBox>
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<form onSubmit={sendEmail}>
							<InputBox>
								<InputDiv>
									<Input type='text' id='personName' name='name' placeholder='Your Name' required />
								</InputDiv>
								<InputDiv>
									<Input
										type='email'
										id='personEmail'
										name='email'
										placeholder='Your Email'
										required
									/>
								</InputDiv>
								<InputDiv>
									<Input type='text' id='Subject' name='subject' placeholder='Subject' required />
								</InputDiv>
								<InputDiv>
									<Input
										type='text'
										id='personMessage'
										name='message'
										placeholder='Your Message'
										required
									/>
								</InputDiv>
								<SubmitButtonBox>
									<SubmitButton type='submit'>
										Submit
										<SendIcon fontSize='small' sx={{ marginLeft: "1rem" }} />
									</SubmitButton>
								</SubmitButtonBox>
							</InputBox>
						</form>
					</Grid>
				</Grid>
			</Wrapper>

			<Snackbar open={successOpen} autoHideDuration={8000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' variant='filled'>
					<AlertTitle>Success!</AlertTitle>
					Message has been sent.
				</Alert>
			</Snackbar>

			<Snackbar open={errorOpen} autoHideDuration={8000} onClose={handleClose}>
				<Alert severity='error' onClose={handleClose} variant='filled'>
					<AlertTitle>Failed!</AlertTitle>
					Please try again.
				</Alert>
			</Snackbar>
		</Container>
	);
}
