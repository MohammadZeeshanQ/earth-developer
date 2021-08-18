import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from '@material-ui/core';

// icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    root: {
        border: '1px red solid',
    },

    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            width: '90%',
        },
    },

    textWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '1px green solid',
        padding: '1rem',

        '@media(max-width: 600px)': {
            textAlign: 'center',
        },

    },

    textHeader: {
        color: '#7619FF',
        fontFamily: 'Nunito-Bold',
        letterSpacing: '3px',
        fontSize: '2.5rem',

        '@media(max-width: 600px)': {
            fontSize: '2.5em',
        },

        '@media(min-width: 600px) and (max-width: 900px)': {
            fontSize: '1.5rem',
        },
    },

    textDescription: {
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

export default function Stuff() {
    const classes = useStyles();

    const gridData = [
        {
            'title': 'Front-End Developer',
            'description': 'Rich appearance and Interactive website for better experience.',
            'image': '',
            'layoutDirection': 'row',
        },
        {
            'title': 'Web Designer',
            'description': 'Elegant yet eye catching layout designs. Modern UI with high level of Information',
            'image': '',
            'layoutDirection': 'row-reverse',
        },
        {
            'title': 'Responsive Website',
            'description': 'Designed to be dynamic and to support large number to screen aspect ratio. Looks the same in all devices.',
            'image': '',
            'layoutDirection': 'row',
        },
        {
            'title': 'Graphic Designer',
            'description': " Visual Graphics and Vector helps to attract people's attention.",
            'image': '',
            'layoutDirection': 'row-reverse',
        },

    ];

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                {gridData.map((item, index) =>
                    <Grid
                        container
                        key={index}
                        direction={item.layoutDirection}
                    >
                        <Grid

                            className={classes.gridItemImage}
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <div className={classes.imageWrapper}>
                                <img scr={item.image} className={classes.gridImage} alt={item.title} />
                            </div>
                        </Grid>

                        <Grid
                            className={classes.gridItemText}
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <div className={classes.textWrapper}>
                                <div>
                                    <Typography variant='h2' className={classes.textHeader}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body1' className={classes.textDescription}>
                                        {item.description}
                                    </Typography>
                                    <Button
                                        className={classes.button}
                                        endIcon={
                                            <ArrowForwardIosIcon
                                                style={{ marginLeft: '.5rem', fontSize: '1rem' }}
                                            />
                                        }
                                    >
                                        Explore More
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                )}
            </div>
        </div>
    )
}
