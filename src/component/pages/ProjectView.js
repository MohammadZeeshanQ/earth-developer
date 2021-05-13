import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button, Typography} from '@material-ui/core'

import MobileBg from '../../assets/images/background/MobileView.png'
import DesktopBg from '../../assets/images/background/PcVIew.png'
const useStyles = makeStyles({
    root:{
        backgroundColor: '#fcfcfc'
    },  
    wrapper:{
        position: 'relative',
    },
    mobileBg:{
        display: 'none',

        '@media(max-width: 600px)':{
            display:'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    desktopBg:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '@media(max-width: 600px)':{
            display: 'none',
        },
    },
    textWrapper:{
        position: 'absolute',
        top: '13%',
        right: '4%',
        color: '#1a1a1a',
        textAlign: 'right',

        '@media(max-width: 600px)':{
            position: 'relative',
            top: '0',
            right: '0',
            padding: '2rem 0',
            textAlign: 'center',
        },
    },
    textHeader:{
        fontFamily: 'Nunito-Bold',
        letterSpacing: '2px',

        '@media(min-width: 600px) and (max-width: 900px)':{
            fontSize: '2rem',
           },
    },
    textMessage:{
        fontFamily: 'Nunito-Semi',
        letterSpacing: '2px',

        '@media(min-width: 600px) and (max-width: 900px)':{
            fontSize: '1rem',
           },

        '@media(max-width: 600px)':{
            paddingTop: '1rem',
           },
    },
});

export default function ProjectView() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.textWrapper}>
                    <Typography variant='h2' className={classes.textHeader}>
                        Responsive Websites
                    </Typography>
                    <Typography variant='h6' className={classes.textMessage}>
                        Looks the same in all devices.    
                    </Typography>
                </div>
                
                <img src={DesktopBg} className={classes.desktopBg} alt='Desktop project' />
                <img src={MobileBg} className={classes.mobileBg} alt='Mobile project' />

            </div>
        </div>
    )
}
