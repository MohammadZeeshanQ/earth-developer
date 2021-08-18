import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

// Video
import Video3D from '../../assets/videos/videoPhone.mp4'

const useStyles = makeStyles({
    root: {
        padding: '3rem 0 4rem 0',

        '@media(max-width: 600px)': {
            padding: '3rem 0',
        },

        '@media(min-width: 600px) and (max-width: 1025px)': {
            padding: '1rem 0',
        },
    },

    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },

    videoContainer: {
        height: '30rem',
        textAlign: 'center',


        '@media(min-width: 600px) and (max-width: 1025px)': {
            height: '20rem',
        },
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
    textContainer: {
        display: 'grid',
        placeItems: 'center',
    },
    textWrapper: {
        padding: '2rem 0',

        '@media(max-width: 600px)': {
            padding: '1rem',
        },
    },
    textHeader: {
        color: '#7619FF',
        fontFamily: 'Nunito-Bold',
        letterSpacing: '3px',
        fontSize: '3rem',

        '@media(max-width: 600px)': {
            fontSize: '2.5em',
            textAlign: 'center',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1.5rem',
        },
    },
    textMessage: {
        fontFamily: 'Nunito-Semi',
        letterSpacing: '2px',
        lineHeight: '180%',
        color: '#858585',
        margin: '2rem 0',

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '.7rem',
            letterSpacing: '2px',
            lineHeight: '160%',
        },

        '@media(max-width: 600px)': {
            paddingTop: '1rem',
            fontSize: '1.1rem',
        },
    },
});


export default function VideoModel() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.textContainer}
                    >
                        <div className={classes.textWrapper}>
                            <Typography variant='h2' className={classes.textHeader}>
                                Responsive Websites
                            </Typography>
                            <Typography variant='body1' className={classes.textMessage}>
                                Looks the same in all devices. My primary goal is to provide my clients not only Professional and Elegant but Responsive and dynamic.
                            </Typography>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.videoContainer}
                    >
                        <video className={classes.video} autoPlay muted loop>
                            <source src={Video3D} type='video/mp4' />
                        </video>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
