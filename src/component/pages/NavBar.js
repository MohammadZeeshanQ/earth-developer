import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, IconButton, AppBar, Toolbar, SwipeableDrawer, Divider, List, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    root:{
    },
    container:{
       height: 64, 
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
        color: '#fcfcfc'
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
    swipeDrawer:{
        width: 250,
        borderRadius: '3em 0em 0em 3em',
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
                            <Typography className={classes.logoText} variant='h6'>
                                LOGO
                            </Typography>
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
                    anchor='right'
                    open={drawer}   
                    onOpen={toggle}
                    onClose={toggle}
                >
                    <div className={classes.swipeDrawer}>

                

                    <List>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabBtn}>Services</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabBtn}>About</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                        <Button variant='outlined' className={classes.tabBtn}>Blog</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabBtn}>Contact</Button>
                        </ListItem>
                        <Divider/>
                    </List>
                    </div>
                </SwipeableDrawer>
                
            </div>
    )
}
