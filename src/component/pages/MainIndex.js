import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, Grid} from '@material-ui/core' 

const useStyles = makeStyles({
    root:{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(15, 17, 23 )',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper:{
        position: 'relative',
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
                    <div className={classes.headingTextWrapper}>

                    </div>

                </div>
            </div>
        </div>
    )
}
