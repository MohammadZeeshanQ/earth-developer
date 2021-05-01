import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, IconButton} from '@material-ui/core'

import FacebookIcon from '../../assets/images/icons/facebook.png'
import Github from '../../assets/images/icons/github.png'
import LinkedIn from '../../assets/images/icons/linkedin.png'
import Instagram from '../../assets/images/icons/instagram.png'

const useStyles = makeStyles({
    root:{
        backgroundColor: "rgb(57, 61, 72)",
    },
    wrapper:{
        padding: '5em',
        color: "#fcfcfc",
        textAlign: 'center'
    },
    socialMediaDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialMediaIcons:{
        margin: '0.5em',
        width: '1.3em',

        "&:hover":{
            transform: "scale(1.2)",
            transition: ".3s ease all",
        },
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
                    <IconButton size="small">
                        <img className={classes.socialMediaIcons} src={FacebookIcon} alt='Facebook' />
                    </IconButton>

                    <IconButton size="small">
                    <img className={classes.socialMediaIcons} src={Instagram} alt='Instagram' />
                    </IconButton>

                    <IconButton size="small">
                    <img className={classes.socialMediaIcons} src={LinkedIn} alt='LinkedIn' />
                    </IconButton>

                    <IconButton size="small">
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

            </div>
            
        </div>
    )
}
