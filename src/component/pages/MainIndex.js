import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, Grid} from '@material-ui/core' 
import EarthVideo from '../../assets/videos/video2.mp4'

const useStyles = makeStyles({
    root:{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(15, 17, 23, .5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        position: 'relative',
    },
    earthVideo:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-3',
    },
    headingContainer:{
        textAlign: 'center',
    },
    headingTextWrapper:{
        color: '#fcfcfc'
    },
    headingDotColor:{
        color: '#FFDD10 ',
    },
    headingBtnWrapper:{

    },
});

export default function MainIndex() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.headingContainer}>

                    <div className={classes.headingTextWrapper}>
                        <Typography variant='h1' className={classes.headingHeader1}>Welcome to</Typography>
                        <Typography variant='h1' className={classes.headingHeader2}>Planet Earth<span className={classes.headingDotColor}>.</span></Typography>
                    </div>
                    <div className={classes.headingBtnWrapper}>
                        
                    </div>

                </div>
            </div>

            <video loop={true} autoPlay={true} muted={true} className={classes.earthVideo}>
                <source src= { EarthVideo } type="video/mp4" />
            </video>
        </div>
    )
}
