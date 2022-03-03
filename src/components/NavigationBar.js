import React, { useEffect, useState } from "react";
import styled from "styled-components";

// material component
import { AppBar, Toolbar, Divider, List, ListItem, Switch, SwipeableDrawer, IconButton } from "@mui/material";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

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
			link: "/earth-developer/#/about",
		},
		{
			name: "Contact",
			link: "/earth-developer/#/contact",
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
		font-size: 1.5rem;
		font-weight: 600;
		font-style: italic;
		color: ${(props) => (nightMode ? "var(--lightBg)" : "var(--darkBg)")};
		position: relative;
		left: -0.3rem;
		letter-spacing: 1px;
	`;

	const DesktopTabBox = styled.div`
		flex-grow: 1;

		@media (max-width: 600px) {
			display: none;
		}
	`;

	const TabButton = styled.button`
		font-size: var(--pcTextSize);
		background-color: transparent;
		color: ${nightMode ? "var(--lightBg)" : "var(--darkBg)"};
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 1px;
		cursor: pointer;
		margin: 0 0.2rem;
		padding: 0.5rem 1rem;

		&:hover {
			background-color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
			color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
			transition: 0.25s all linear;
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

	const MobileBurgerButton = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		padding: 0.4rem;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		cursor: pointer;

		&:hover {
			background-color: #e5e4e2;
			transition: all 0.3s linear;
		}
	`;

	const MobileButtonFullWidth = styled.a`
		width: 100%;
		text-decoration: none;
	`;

	const MobileMenuButton = styled.button`
		font-size: var(--pcTextSize);
		background: transparent;
		color: #ffff;
		border: none;
		border-radius: 0.3rem;
		letter-spacing: 1.5px;
		cursor: pointer;
		display: flex;
		justify-content: flex-start;
		padding: 0.8em 1rem;
	`;

	const NightModeBox = styled.div`
		@media (max-width: 1024px) {
			display: none;
		}
	`;

	const NightModeButton = styled.button`
		display: flex;
		align-items: center;
		font-size: var(--pcTextSizeButton);
		background-color: transparent;
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		border: 1px solid ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
		border-radius: 0.3rem;
		letter-spacing: 1px;
		cursor: pointer;
		padding: 0.5rem 0.6rem;

		&:hover {
			background: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightThemeHeader)"};
			color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
			transition: 0.4s all ease;
		}
	`;

	const NightModeButtonMobile = styled(NightModeButton)`
		border: 1px solid ${nightMode ? "var(--darkThemeHeader)" : "var(--lightBg)"};
		color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightBg)"};

		&:hover {
			background: none;
			color: ${nightMode ? "var(--darkThemeHeader)" : "var(--lightBg)"};
			transition: none;
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
			background-color: ${nightMode ? "var(--darkBg)" : "var(--darkPurple)"};
			border-radius: 3rem 0 0 3rem;
		}
	`;

	const ActionBox = styled.div`
		width: 100%;
	`;

	return (
		<AppBarCustom position='fixed' elevation={1} color='transparent'>
			<Container>
				<ToolbarCustom disableGutters={true}>
					{/* Logo Box */}
					<LogoBox>
						<IconButton size='small' href='/earth-developer/#/'>
							<LogoIcon src={Logo} alt='Mohammad Zeshan' />
							<LogoText>eshan</LogoText>
						</IconButton>
					</LogoBox>

					{/* DesktopTab Box */}
					<DesktopTabBox>
						{mobileMenuData.map((item, index) => (
							<a key={index} href={item.link}>
								<TabButton>{item.name}</TabButton>
							</a>
						))}
					</DesktopTabBox>

					{/* Mobile Menu Box */}
					<MobileMenuBox>
						<MobileBurgerButton size='small' onClick={drawerHandler}>
							<MenuIcon style={{ fontSize: "2em" }} />
						</MobileBurgerButton>
					</MobileMenuBox>

					{/* Night Mode  Box */}
					<NightModeBox>
						<NightModeButton onClick={nightModeHandler}>
							{nightMode ? "DayMode" : "NightMode"}
							{nightMode ? (
								<WbSunnyIcon fontSize='small' sx={{ marginLeft: ".7rem" }} />
							) : (
								<NightsStayIcon fontSize='small' sx={{ marginLeft: ".7rem" }} />
							)}
						</NightModeButton>
					</NightModeBox>
				</ToolbarCustom>

				{/* Mobile Drawer */}
				<DrawerCustom open={drawer} anchor='right' onOpen={drawerHandler} onClose={drawerHandler}>
					<List sx={{ width: 270 }}>
						<ListItem style={{ justifyContent: "flex-end" }}>
							<IconButton
								style={{
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
							<ListItem key={index}>
								<MobileButtonFullWidth href={item.link} onClick={drawerHandler}>
									<MobileMenuButton>{item.name}</MobileMenuButton>
								</MobileButtonFullWidth>
								<Divider />
							</ListItem>
						))}

						<Divider sx={{ backgroundColor: "var(--lightBg)", margin: "2rem 1rem" }} />
						<ListItem>
							<NightModeButtonMobile onClick={nightModeHandler}>
								{nightMode ? "DayMode" : "NightMode"}
								<NightsStayIcon fontSize='small' sx={{ marginLeft: ".7rem" }} />
							</NightModeButtonMobile>
						</ListItem>
					</List>
				</DrawerCustom>
			</Container>
		</AppBarCustom>
	);
}
