import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core'

// Illustration
import Person from '../../assets/images/background/person.png'

// icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Scroll from '../../assets/images/icons/scroll.png'

// CSS
import '../../styles/MainIndex.css';

// Tilt
import Tilty from 'react-tilty';



const useStyles = makeStyles({
    root: {
        position: 'relative',

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    wrapper: {
        position: 'relative',
        width: '80%',
        margin: 'auto',
        padding: '6rem 0',

        '@media(max-width: 600px)': {
            width: '90%',
            padding: '3rem 0'
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },

    headingContainer: {
        display: 'grid',
        placeItems: 'center',

        '@media(max-width: 600px)': {
            textAlign: 'center',
            padding: '5rem 0 4rem 0'
        },
    },

    header: {
        fontFamily: 'Nunito-Bold',
        letterSpacing: '2px',
        fontSize: '3.5rem',
        fontWeight: '800',
        color: '#7619FF',

        '@media(max-width: 600px)': {
            fontSize: '3.5em',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '2.5em',
        },
    },

    description: {
        margin: '2rem 0',
        color: '#656565',
        letterSpacing: '2px',
        fontFamily: 'Nunito-Reg',

        '@media(max-width: 600px)': {
            margin: '3rem 0',
            fontSize: '1.2rem',
            lineHeight: '190%',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.7rem',
            width: '80%',
        },

    },

    button: {
        backgroundColor: '#7619FF',
        color: '#fcfcfc',
        padding: '.7rem 1.5rem',
        fontFamily: 'Nunito-Semi',
        letterSpacing: '1.5px',

        '&:hover': {
            backgroundColor: '#AA72FE',
            color: '#fcfcfc',
            transform: 'scale(1.05)',
            transition: 'all .3s ease-in-out'
        },

        '@media(max-width: 600px)': {
            padding: '1rem 2rem',
            letterSpacing: '3px'
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.7rem',
            padding: '.5rem .6rem'
        },

    },

    imageContainer: {
        overflow: 'hidden',
    },

    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },

});

export default function MainIndex() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className='mainIndex-scrollContainer'>
                    <img className='mainIndex-scroll' src={Scroll} alt='Scroll Bar' />
                </div>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        sm={7}
                        md={7}
                        className={classes.headingContainer}
                    >
                        <div>
                            <Typography className={classes.header} variant='h1'>
                                Mohammad Zeshan
                            </Typography>

                            <Typography className={classes.description} variant='body1'>
                                Freelance Front-End Developer, UI/ UX and  Web Designer.
                            </Typography>

                            <Button
                                variant='contained'
                                href='/earth-developer/#/project'
                                className={classes.button}
                                endIcon={
                                    <ArrowForwardIosIcon
                                        style={{ marginLeft: '.5rem', fontSize: '1rem' }}
                                    />
                                }>
                                Check Projects
                            </Button>
                        </div>

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.imageContainer}
                    >
                        <Tilty
                            max={25}
                            speed={300}
                            perspective={1000}
                            scale={1.1}
                        >
                            <img src={Person} className={classes.image} alt='3D Illustration' />
                        </Tilty>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
