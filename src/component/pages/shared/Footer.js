import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, IconButton } from '@material-ui/core'

import FacebookIcon from '../../../assets/images/icons/facebook.png'
import Github from '../../../assets/images/icons/github.png'
import LinkedIn from '../../../assets/images/icons/linkedin.png'

const useStyles = makeStyles({

    root: {
        backgroundColor: '#fcfcfc',
    },

    wrapper: {
        padding: '5em',
        color: "#050505",
        textAlign: 'center'
    },

    socialMediaDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    socialMediaIcons: {
        margin: '0.5em',
        maxWidth: '1.8em',

        "&:hover": {
            transform: "scale(1.2)",
            transition: ".3s ease all",
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            maxWidth: '1.5rem'
        },

        '@media(max-width: 600px)': {

        },
    },

    madeByDiv: {
        marginTop: '2em',
    },

    madeByLabel: {
        fontFamily: 'Nunito-Reg',
    },

    madeByName: {
        fontFamily: 'Nunito-Reg',
    },

    copyrightDiv: {
        marginTop: '1em',
    },

    copyrightLabel: {
        fontFamily: 'Nunito-Reg',
    },

    copyrightPreservedLabel: {
        fontFamily: 'Nunito-Reg',
    }
});

export default function Footer() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <div className={classes.wrapper}>

                <div className={classes.socialMediaDiv}>
                    <IconButton size="small" href='https://www.facebook.com/Mohammad.Zzeshan'>
                        <img className={classes.socialMediaIcons} src={FacebookIcon} alt='Facebook' />
                    </IconButton>

                    <IconButton size="small">
                        <img className={classes.socialMediaIcons} src={LinkedIn} alt='LinkedIn' />
                    </IconButton>

                    <IconButton size="small" href='https://github.com/MohammadZeeshanQ'>
                        <img className={classes.socialMediaIcons} src={Github} alt='Github' />
                    </IconButton>
                </div>

                <div className={classes.madeByDiv}>
                    <Typography variant='body1' className={classes.madeByLabel} >Made by:</Typography>
                    <Typography variant='body1' className={classes.madeByName} >Mohammad Zeeshan</Typography>
                </div>

                <div className={classes.copyrightDiv}>
                    <Typography variant='body2' className={classes.copyrightLabel} >&#169; Copyrights.</Typography>
                    <Typography variant='body2' className={classes.copyrightPreservedLabel} >All Rights Reserved.</Typography>
                </div>

                <div>
                    <Typography variant='caption'>
                        Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6" style={{ color: '#7619FF' }}>Icons 8</a> from <a href="https://icons8.com/illustrations" style={{ color: '#7619FF' }}>Ouch!</a>
                    </Typography>
                </div>

            </div>

        </div>
    )
}
