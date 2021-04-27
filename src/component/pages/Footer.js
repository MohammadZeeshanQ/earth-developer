import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, IconButton, Grid} from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        border: '1px green solid',
        backgroundColor: "rgb(57, 61, 72)",
    },
    wrapper:{
        padding: '5em',
        color: "#fcfcfc",
    },
    socialMediaDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialMediaIcons:{
        margin: '0.5em',
    },
    madeByDiv:{
        marginTop: '2em',
    },
    madeByLabel:{

    },
    madeByName:{

    },
    copyrightDiv:{
        marginTop: '1em',
    },
    copyrightLabel:{

    },
    copyrightPreservedLabel:{

    }


});

export default function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.socialMediaDiv}>
                    <img className={classes.socialMediaIcons} src='' alt='Facebook' />
                    <img className={classes.socialMediaIcons} src='' alt='Instagram' />
                    <img className={classes.socialMediaIcons} src='' alt='Twitter' />
                    <img className={classes.socialMediaIcons} src='' alt='Github' />
                </div>
                <div className={classes.madeByDiv}>
                    <Typography variant='body1' className={classes.madeByLabel} >Made by:</Typography>
                    <Typography variant='body1' className={classes.madeByName} >Mohammad Zeeshan</Typography>
                </div>
                <div className={classes.copyrightDiv}>
                    <Typography variant='body2' className={classes.copyrightLabel} >&#169; Copyrights.</Typography>
                    <Typography variant='body2' className={classes.copyrightPreservedLabel} >All Rights Reserved.</Typography>
                </div>
            </div>
        </div>
    )
}
