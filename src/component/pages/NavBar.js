import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, IconButton, AppBar, Toolbar, SwipeableDrawer, Divider, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    root:{
    },
    container:{
       height: 64,
       backgroundColor: 'rgb(15, 17, 23)',
    },
    appBarDiv:{
        width: '100%',
        display: 'flex',
        alignItems:"center",
    },
    logoDiv:{
        flexGrow: 1,
        textAlign: 'left'
    },
    logoText:{
        color: '#fcfcfc',
    },
    tabDiv:{

    },
    tabBtn:{
        margin: "0 .1em",
        border: 'none',
        color: '#fcfcfc',

        '&:hover':{
            backgroundColor: '#fcfcfc',
            transition: '.4s ease all',
            color: '#0e0e0e',
        },
    },
    tabHideMobile:{
        '@media (max-width: 600px)':{
            display: 'block',
        },

        '@media (min-width: 602px)':{
            display: 'none',
        }
    },
    tabHideDesktop:{
        '@media (max-width: 4000px)':{
            display: 'none',
        },

        '@media (min-width: 602px)':{
            display: 'block',
        }
    },
    swipeDrawerContainer:{
        backgroundColor: 'rgb(15, 17, 23)',
    },
    swipeDrawer:{
        width: 250,
        borderRadius: '3em 0em 0em 3em',
    },
    tabMobileBtn:{
        color: '#0e0e0e',
        margin: "0 .1em",
        border: 'none',
    },
});



export default function NavBar() {

    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const toggle = () => {
        setDrawer(!drawer);
    } 


    return (
        <div className={classes.root}>

                <AppBar position='fixed' elevation='2' color='transparent' className={classes.container}>

                    <Toolbar>
                        <div className={classes.appBarDiv}>

                         <div className={classes.logoDiv}>
                            <IconButton href='/earth-developer/'>
                                <Typography className={classes.logoText} variant='h6'>
                                    EARTH
                                </Typography>
                            </IconButton>
                         </div>

                         <div className={classes.tabDiv}>
                            {/* Mobile Tab */}
                            <div className={classes.tabHideMobile}>
                                <IconButton onClick={toggle} >
                                    <MenuIcon style={{fontSize: '2em', color: '#fcfcfc'}} />
                                </IconButton>
                            </div>

                            {/* Desktop Tab */}
                            <div className={classes.tabHideDesktop}>
                                <Button variant='outlined' className={classes.tabBtn}>Services</Button>
                                <Button variant='outlined' className={classes.tabBtn}>About</Button>
                                <Button variant='outlined' className={classes.tabBtn}>Blog</Button>
                                <Button variant='outlined' className={classes.tabBtn}>Contact</Button>
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
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn}>Services</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn}>About</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                        <Button variant='outlined' className={classes.tabMobileBtn}>Blog</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn}>Contact</Button>
                        </ListItem>
                        <Divider/>
                    </List>
                    </div>
                </SwipeableDrawer>
                
            </div>
    )
}
