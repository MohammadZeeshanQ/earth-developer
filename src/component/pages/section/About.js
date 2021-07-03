import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button } from '@material-ui/core'


import Developer from '../../../assets/images/background/developer.jpg'
import html from '../../../assets/images/devIcon/html.png'
import css from '../../../assets/images/devIcon/css.png'
import js from '../../../assets/images/devIcon/js.png'
import react from '../../../assets/images/devIcon/react.png'
import mui from '../../../assets/images/devIcon/mui.png'
import bootstrap from '../../../assets/images/devIcon/bootstrap.png'
import lr from '../../../assets/images/devIcon/lr.png'
import gimp from '../../../assets/images/devIcon/gimp.png'
import canva from '../../../assets/images/devIcon/canva.png'
import shotcut from '../../../assets/images/devIcon/shotcut.png'

const useStyles = makeStyles({
    root: {

    },
    wrapper: {
        padding: '10em 0 10em 0',

        '@media(max-width: 600px)': {
            padding: '8em 0 0 0',
        },
    },
    gridContainer: {

    },
    gridItem: {

    },
    gridImage: {
        position: 'relative',
        top: '-30px',
        left: '-100px',
        width: '130%',
        height: "100%",
        objectFit: 'cover',
        zIndex: '-2',

        '@media(max-width: 600px)': {
            top: '0',
            width: '100%',
            left: '0',
        },
    },
    textContainer: {

    },
    nameWrapper: {
        '@media(max-width: 600px)': {
            textAlign: 'center',
            padding: '0 2em',
        },
    },
    nameHeader: {
        fontFamily: 'Nunito-Bold',
    },
    nameDescription: {
        fontFamily: "Nunito-Reg",
        paddingTop: "1em",
        color: '#848480 ',
    },
    nameAttributeDiv: {
        paddingTop: "1em",
    },
    nameAttributeText: {
        fontFamily: "Nunito-Reg",
        color: '#848480 ',
    },
    skillWrapper: {
        paddingTop: '4em',

        '@media(max-width: 600px)': {
            textAlign: 'center',
        },
    },
    skillHeader: {
        fontFamily: 'Nunito-Bold',
    },
    skillIconWrapper: {
        padding: '1em 5em 1em 0',
        '@media(max-width: 600px)': {
            padding: '1em 0 0 0',
        },
    },
    skillIcons: {
        width: '2.5em',
        margin: '0 1em 1em 0',

        '&:hover': {
            transform: 'scale(1.4)',
            transition: '.4s ease all',
        },

        '@media(max-width: 600px)': {
            width: '4em',
            margin: '1em',
        },
    },
});

const devIconPath = [
    { "path": html },
    { "path": css },
    { "path": js },
    { "path": react },
    { "path": mui },
    { "path": bootstrap },
    { "path": lr },
    { "path": gimp },
    { "path": canva },
    { "path": shotcut },
]

export default function About() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    className={classes.gridContainer}
                    justify='center'
                    xs={12}
                    sm={12}
                    md={12}
                >

                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={5}
                        md={5}
                    >

                        <div className={classes.textContainer}>

                            <div className={classes.nameWrapper}>
                                <Typography className={classes.nameHeader} variant='h3' >
                                    Hi there!
                                </Typography>
                                <Typography className={classes.nameDescription} variant='h6'>
                                    My name is Mohammad Zeeshan.
                                </Typography>

                                <div className={classes.nameAttributeDiv}>
                                    <Typography className={classes.nameAttributeText} variant='body1' >
                                        Front-End Developer
                                    </Typography>
                                    <Typography className={classes.nameAttributeText} variant='body1' >
                                        Web Designer
                                    </Typography>
                                    <Typography className={classes.nameAttributeText} variant='body1' >
                                        UI/UX
                                    </Typography>
                                </div>

                            </div>

                            <div className={classes.skillWrapper}>
                                <Typography className={classes.skillHeader} variant='h4'>Skills</Typography>

                                <div className={classes.skillIconWrapper}>
                                    {devIconPath.map((image) =>
                                        <img src={image.path} className={classes.skillIcons} />
                                    )}
                                </div>

                            </div>
                        </div>

                    </Grid>

                    <Grid
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={5}
                        md={5}
                    >
                        <img src={Developer} className={classes.gridImage} alt='People jumping' />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}
