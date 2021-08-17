import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, IconButton, AppBar, Toolbar, SwipeableDrawer, Divider, List, ListItem } from '@material-ui/core';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

// Logo
import Logo from '../assets/images/icons/Logo.png'


const useStyles = makeStyles({
    root: {
    },
    wrapper: {
        width: '85%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        },
        '@media(min-width: 601px) and (max-width: 1024px)': {
            width: '90%',
        },
    },
    container: {
        height: 64,
        backgroundColor: '#fcfcfc',

        '@media (max-width: 600px)': {
            height: 58,
        },
    },

    appBarDiv: {
        width: '100%',
        display: 'flex',
        alignItems: "center",
    },

    logoDiv: {
        flexGrow: 1,
    },

    logoIcon: {
        width: '2.5rem',
    },

    logoText: {
        position: 'relative',
        left: '-.4rem',
        fontFamily: 'Nunito-Bold',
        color: '#151515',
        letterSpacing: '2px',
    },

    tabDiv: {

    },

    tabBtn: {
        fontFamily: 'Nunito-Semi',
        margin: "0 .1em",
        border: 'none',
        color: '#1c1c1c',
        letterSpacing: '2px',

        '&:hover': {
            backgroundColor: '#7619FF',
            transition: '.3s ease all',
            color: '#fcfcfc',
        },
    },

    tabHideMobile: {
        '@media (max-width: 600px)': {
            display: 'block',
        },

        '@media (min-width: 1025px)': {
            display: 'none',
        }
    },

    tabHideDesktop: {
        '@media (max-width: 4000px)': {
            display: 'none',
        },

        '@media (min-width: 1025px)': {
            display: 'block',
        }
    },

    swipeDrawerContainer: {
        backgroundColor: 'rgb(15, 17, 23)',
    },

    swipeDrawer: {
        width: 250,
        borderRadius: '3em 0em 0em 3em',
    },

    tabMobileBtn: {
        fontFamily: 'Nunito-Semi',
        color: '#0e0e0e',
        margin: "0 .1em",
        border: 'none',
        letterSpacing: '2px',
    },
});



export default function NavBar() {

    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const toggle = () => {
        setDrawer(!drawer);
    }


    useEffect(() => {
        console.log(`${window.location.href} : Public URL`);
        console.log('Version 1.11');
    }, []);

    return (
        <div className={classes.root}>

            <AppBar position='fixed' elevation={0} className={classes.container}>

                <Toolbar className={classes.wrapper}>
                    <div className={classes.appBarDiv}>

                        <div className={classes.logoDiv}>
                            <IconButton href='/earth-developer/#/'>
                                <img src={Logo} className={classes.logoIcon} alt='Mohammad Zeshan' />
                                <Typography className={classes.logoText} variant='h5'>
                                    eshan<span style={{ color: '#7619FF' }}>.</span>
                                </Typography>
                            </IconButton>
                        </div>

                        <div className={classes.tabDiv}>
                            {/* Mobile Tab */}
                            <div className={classes.tabHideMobile}>
                                <IconButton onClick={toggle} size='small'>
                                    <MenuIcon style={{ fontSize: '2em', color: '#1c1c1c' }} />
                                </IconButton>
                            </div>

                            {/* Desktop Tab */}
                            <div className={classes.tabHideDesktop}>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/project'>Projects</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/about'>About</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/contact'>Contact</Button>
                            </div>

                        </div>

                    </div>
                </Toolbar>

            </AppBar>

            <SwipeableDrawer
                className={classes.swipeDrawerContainer}
                anchor='right'
                open={drawer}
                onOpen={toggle}
                onClose={toggle}
            >
                <div className={classes.swipeDrawer}>



                    <List>
                        <ListItem style={{ justifyContent: 'flex-end', }}>
                            <IconButton style={{ backgroundColor: '#DCDBDB' }} size='small' onClick={toggle}>
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/project' onClick={() => setDrawer(!drawer)}>Projects</Button>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/about' onClick={() => setDrawer(!drawer)}>About</Button>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/contact' onClick={() => setDrawer(!drawer)}>Contact</Button>
                        </ListItem>
                        <Divider />
                    </List>
                </div>
            </SwipeableDrawer>

        </div>
    )
}
