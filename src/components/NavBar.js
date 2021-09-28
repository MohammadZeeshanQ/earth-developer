import React, { useEffect, useState, createRef } from 'react'
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
        letterSpacing: '1px',

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

    paper: {
        backgroundColor: '#7619FF',
        borderRadius: '4rem 0 0 4rem',
    },

    swipeDrawer: {
        width: 250,
        borderRadius: '3em 0em 0em 3em',
    },

    tabMobileBtn: {
        fontFamily: 'Nunito-Semi',
        color: '#fcfcfc',
        margin: "0 .1em",
        border: 'none',
        letterSpacing: '1px',
        width: '100%',
        justifyContent: 'flex-start',
    },

    divider: {
        backgroundColor: '#fcfcfc',
    },
});



export default function NavBar() {

    const classes = useStyles();
    const drawerRef = createRef();
    const [drawer, setDrawer] = useState(false);

    const toggle = () => {
        setDrawer(!drawer);
    }

    useEffect(() => {
        console.log(`${window.location.href} : Public URL`);
        console.log('Version 1.12');
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
                                    <MenuIcon style={{ fontSize: '2em', color: '#7619FF' }} />
                                </IconButton>
                            </div>

                            {/* Desktop Tab */}
                            <div className={classes.tabHideDesktop}>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/web-app'>WEB APP</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/ui-ux'>UI/ UX</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/about'>About</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/contact'>Contact</Button>
                            </div>

                        </div>

                    </div>
                </Toolbar>

                <SwipeableDrawer
                    ref={drawerRef}
                    classes={{ paper: classes.paper }}
                    anchor='right'
                    open={drawer}
                    onOpen={toggle}
                    onClose={toggle}
                >
                    <div className={classes.swipeDrawer}>
                        <List>
                            <ListItem style={{ justifyContent: 'flex-end', }}>
                                <IconButton style={{ backgroundColor: '#7619FF', color: '#fcfcfc', border: '1px #fcfcfc solid' }} size='small' onClick={toggle}>
                                    <CloseIcon />
                                </IconButton>
                            </ListItem>

                            <ListItem>
                                <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/web-app' onClick={() => setDrawer(!drawer)}>WEB APP</Button>
                            </ListItem>
                            <Divider className={classes.divider} />
                            <ListItem>
                                <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/ui-ux' onClick={() => setDrawer(!drawer)}>UI/ UX</Button>
                            </ListItem>
                            <Divider className={classes.divider} />
                            <ListItem>
                                <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/about' onClick={() => setDrawer(!drawer)}>About</Button>
                            </ListItem>
                            <Divider className={classes.divider} />
                            <ListItem>
                                <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/contact' onClick={() => setDrawer(!drawer)}>Contact</Button>
                            </ListItem>
                            <Divider className={classes.divider} />
                        </List>
                    </div>
                </SwipeableDrawer>

            </AppBar>

        </div>
    )
}
