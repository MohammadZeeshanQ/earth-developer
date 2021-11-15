import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// material component
import { AppBar, Toolbar, Divider, List, ListItem, Switch, SwipeableDrawer, IconButton } from "@mui/material";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// Logo
import Logo from "../assets/images/icons/Logo.png";

export default function NavigationBar({ nightMode, setNightMode }) {
	const [drawer, setDrawer] = useState(false);

	const drawerHandler = () => {
		setDrawer(!drawer);
	};

	const nightModeHandler = () => {
		setNightMode(!nightMode);
		console.log(nightMode);
	};

	useEffect(() => {
		console.log("Version 2.0");
	}, []);

	// Mobile Menu Data
	const mobileMenuData = [
		{
			name: "Portfolio",
			link: "/earth-developer/#/portfolio",
		},
		{
			name: "About",
			link: "/earth-developer/#/portfolio",
		},
		{
			name: "Contact",
			link: "/earth-developer/#/portfolio",
		},
	];

	// styled component
	const AppBarCustom = styled(AppBar)`
		@media (max-width: 600px) {
		}
		@media (min-width: 601px) and (max-width: 1024px) {
		}
	`;

	const Container = styled.div`
		background-color: ${(props) => (nightMode ? "var(--darkBg)" : "var(--lightBg)")};
	`;

	const ToolbarCustom = styled(Toolbar)`
		width: 88%;
		margin: 0 auto;
		display: flex;
		align-items: center;

		@media (max-width: 600px) {
			width: 90%;
		}
		@media (min-width: 601px) and (max-width: 1024px) {
			width: 90%;
		}
	`;

	const LogoBox = styled.div`
		flex-grow: 1;
	`;

	const LogoIcon = styled.img`
		width: 2.5rem;
	`;

	const LogoText = styled.h3`
		font-family: Nunito-Bold;
		color: ${(props) => (nightMode ? "var(--lightBg)" : "var(--darkBg)")};
		position: relative;
		left: -0.4rem;
		letter-spacing: 1px;
	`;

	const DesktopTabBox = styled.div`
		flex-grow: 1;

		@media (max-width: 600px) {
			display: none;
		}
	`;

	const TabButton = styled.button`
		background-color: transparent;
		font: var(--pcTextSize) Nunito-Semi;
		color: ${(props) => (nightMode ? "var(--lightBg)" : "var(--darkBg)")};
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 1.5px;
		cursor: pointer;
		margin: 0 0.2rem;
		padding: 0.5rem 1rem;

		&:hover {
			background-color: var(--darkPurple);
			transition: 0.25s all linear;
			color: #fcfcfc;
		}
	`;

	const MobileMenuBox = styled.div`
		@media (max-width: 600px) {
			display: block;
		}
		@media (min-width: 1025px) {
			display: none;
		}
	`;

	const MobileMenuButton = styled.button`
		font: var(--pcTextSize) Nunito-Semi;
		background: transparent;
		color: #ffff;
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 1.5px;
		cursor: pointer;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding: 0.8em 1rem;
	`;

	const NightModeBox = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;

		@media (max-width: 1024px) {
			display: none;
		}
	`;

	const NightModeIcon = styled.span`
		text-align: center;
	`;

	const SwitchCustom = styled(Switch)`
		& .MuiSwitch-switchBase {
			color: var(--darkPurple);
		}
		& .Mui-checked {
			color: var(--lightPurple);
		}
		& .MuiSwitch-track {
			background-color: var(--lightPurple);
		}
	`;

	const DrawerCustom = styled(SwipeableDrawer)`
		& .MuiDrawer-paper {
			background-color: ${(props) => (nightMode ? "var(--darkBg)" : "var(--lightPurple)")};
			border-radius: 3rem 0 0 3rem;
		}
	`;

	return (
		<AppBarCustom position='fixed' elevation={1} color='transparent'>
			<Container>
				<ToolbarCustom disableGutters={true}>
					{/* Logo Box */}
					<LogoBox>
						<IconButton size='small' href='/earth-developer/#/'>
							<LogoIcon src={Logo} alt='Mohammad Zeshan' />
							<LogoText>eshan.</LogoText>
						</IconButton>
					</LogoBox>

					{/* DesktopTab Box */}
					<DesktopTabBox>
						<TabButton href='/earth-developer/#/portfolio'>Portfolio</TabButton>
						<TabButton href='/earth-developer/#/about'>About</TabButton>
						<TabButton href='/earth-developer/#/contact'>Contact</TabButton>
					</DesktopTabBox>

					{/* Mobile Menu Box */}
					<MobileMenuBox>
						<IconButton size='small' onClick={drawerHandler}>
							<MenuIcon style={{ fontSize: "2em", color: "#7619FF" }} />
						</IconButton>
					</MobileMenuBox>

					{/* Night Mode  Box */}
					<NightModeBox>
						<NightModeIcon>&#9728;&#65039;</NightModeIcon>

						<SwitchCustom color='default' checked={nightMode} onChange={nightModeHandler} />
						<NightModeIcon>&#127769;</NightModeIcon>
					</NightModeBox>
				</ToolbarCustom>

				{/* Mobile Drawer */}
				<DrawerCustom open={drawer} anchor='right' onOpen={drawerHandler} onClose={drawerHandler}>
					<List sx={{ width: 270 }}>
						<ListItem style={{ justifyContent: "flex-end" }}>
							<IconButton
								style={{
									backgroundColor: "#7619FF",
									color: "#fcfcfc",
									border: "1px #fcfcfc solid",
								}}
								size='small'
								onClick={drawerHandler}
							>
								<CloseIcon />
							</IconButton>
						</ListItem>
						{/* Mobile Menus */}
						{mobileMenuData.map((item, index) => (
							<ListItem>
								<MobileMenuButton key={index} Link={item.link}>
									{item.name}
								</MobileMenuButton>
								<Divider />
							</ListItem>
						))}
					</List>
				</DrawerCustom>
			</Container>
		</AppBarCustom>
	);
}
