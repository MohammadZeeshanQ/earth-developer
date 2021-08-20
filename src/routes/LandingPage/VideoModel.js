import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

// Component 
import PurpleButton from '../../component/PurpleButton';

// Video
import Video3D from '../../assets/videos/videoPhone.mp4'


const useStyles = makeStyles({
    root: {
        padding: '0 0 4rem 0',

        '@media(max-width: 600px)': {
            padding: '1rem 0',
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
        height: '25rem',
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
            textAlign: 'center'
        },
    },

    textHeader: {
        color: '#7619FF',
        fontFamily: 'Nunito-Bold',
        letterSpacing: '3px',
        fontSize: '3rem',

        '@media(max-width: 600px)': {
            fontSize: '1.8em',
            marginTop: '2rem',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1.5rem',
        },
    },

    textMessage: {
        fontFamily: 'Oxy-Reg',
        letterSpacing: '1px',
        lineHeight: '180%',
        color: '#535353',
        margin: '1rem 0 3rem 0',

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

    button: {
        backgroundColor: '#7619FF',
        color: '#fcfcfc',
        padding: '.6rem 1rem',
        fontFamily: 'Nunito-Reg',
        letterSpacing: '1.5px',

        '&:hover': {
            backgroundColor: '#AA72FE',
            color: '#fcfcfc',
            transform: 'scale(1.05)',
            transition: 'all .3s ease-in-out'
        },

        '@media(max-width: 600px)': {
            padding: '1rem',
            letterSpacing: '3px',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.5rem',
            padding: '.5rem'
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
                    direction='row-reverse'
                >
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
                                Designed to be dynamic and to support large number to screen aspect ratio. Looks the same in all devices.
                            </Typography>

                            <PurpleButton
                                href='/earth-developer/#/project'
                            >
                                Explore More
                            </PurpleButton>
                        </div>
                    </Grid>


                </Grid>

            </div>
        </div>
    )
}
