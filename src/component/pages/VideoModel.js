import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// Video
import Video3D from '../../assets/videos/videoPhone.mp4'

const useStyles = makeStyles({
    root: {
        padding: '3rem 0 4rem 0',

        '@media(max-width: 600px)': {
            padding: '2rem 0 4rem 0',
        },
    },

    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '100%',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },

    videoContainer: {
        height: '35rem',
        textAlign: 'center',
    },

    video: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        borderRadius: '2rem',

        '@media(max-width: 600px)': {
            objectFit: 'cover',
        },
    },
    textWrapper: {
        padding: '2rem 0',
        textAlign: 'center',

        '@media(max-width: 600px)': {
            padding: '1rem 0',
        },
    },
    textHeader: {
        fontFamily: 'Nunito-Bold',
        letterSpacing: '3px',

        '@media(max-width: 600px)': {
            fontSize: '2.5rem',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '2rem',
        },
    },
    textMessage: {
        fontFamily: 'Nunito-Semi',
        letterSpacing: '2px',
        color: '#8c8c8c',
        margin: '1rem',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1rem',
        },

        '@media(max-width: 600px)': {
            paddingTop: '1rem',
        },
    },
});


export default function VideoModel() {

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
                <div className={classes.videoContainer}>
                    <video className={classes.video} autoPlay muted loop>
                        <source src={Video3D} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}
