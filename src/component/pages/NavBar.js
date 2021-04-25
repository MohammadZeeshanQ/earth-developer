import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, IconButton, AppBar, Toolbar} from '@material-ui/core';
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
    tabDiv:{

    },
    tabBtn:{
        margin: "0 .1em",
        border: 'none'
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
});


export default function NavBar() {

    const classes = useStyles();


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
                                <IconButton>
                                    <MenuIcon style={{fontSize: '2em'}} />
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
                
            </div>
    )
}
