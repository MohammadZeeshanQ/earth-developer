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
        fontFamily: 'Nunito-Bold',
        color: '#fcfcfc',
    },
    tabDiv:{

    },
    tabBtn:{
        fontFamily: 'Nunito-Reg',
        margin: "0 .1em",
        border: 'none',
        color: '#fcfcfc',

        '&:hover':{
            backgroundColor: '#fcfcfc',
            transition: '.4s ease all',
            color: '#000000',
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
        fontFamily: 'Nunito-Reg',
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


    useEffect(() => {
        console.log(`/earth-developer/ : Public URL`);
        console.log('Ver 1.01');
    }, []);

    return (
        <div className={classes.root}>

                <AppBar position='fixed' elevation='2' color='transparent' className={classes.container}>

                    <Toolbar>
                        <div className={classes.appBarDiv}> 

                         <div className={classes.logoDiv}>
                            <IconButton href='/earth-developer/#/'>
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
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/project' onClick={() => setDrawer(!drawer)}>Projects</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/about' onClick={() => setDrawer(!drawer)}>About</Button>
                                <Button variant='outlined' className={classes.tabBtn} href='/earth-developer/#/contact' onClick={() => setDrawer(!drawer)}>Contact</Button>
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
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/project'>Projects</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/about'>About</Button>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Button variant='outlined' className={classes.tabMobileBtn} href='/earth-developer/#/contact'>Contact</Button>
                        </ListItem>
                        <Divider/>
                    </List>
                    </div>
                </SwipeableDrawer>
                
            </div>
    )
}
