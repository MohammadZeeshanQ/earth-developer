import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Divider, Chip } from '@material-ui/core';


const gridData = [
    {
        'title': 'Covid Vision',
        'description': 'A web app developed to retrieve information regarding Covid-19 cases',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Fashion Landing Website',
        'description': 'Minimalist Landging Website to display Trendy Fashion clothing.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Big-Bag Landing Website',
        'description': 'Website build for marketing new trendy bags for various purpose.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'Javascript', },
            { 'code': 'LESS', }
        ],
    },
    {
        'title': '3D Illustration Website',
        'description': 'Minimalist Business Website with 3D illustration.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Parallax Landing Website',
        'description': 'Website build with Parallax library for object scrolling animation.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'LESS', },
            { 'code': 'Javascript', },
            { 'code': 'Parallax.Js', },
        ],
    },
    {
        'title': 'Product Landing Website',
        'description': 'Landing Page for a Speaker Product with basic UI',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'LESS', },
            { 'code': 'CSS', },
        ],
    },
    {
        'title': 'Mountainer Landing Website',
        'description': 'Simple Website business website with pricing card.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Registration Webpages',
        'description': 'Repository that contains multiple Login and SingIn webpages template.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'CSS', },
            { 'code': 'Material-Ui', },
        ],
    },

];


const useStyles = makeStyles({
    root: {
        // '@media(max-width: 600px)': {

        // },
        // '@media(min-width: 601px) and (max-width: 900px)': {

        // },
    },

    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {

        },
        '@media(min-width: 601px) and (max-width: 900px)': {

        },
    },

    headerContainer: {
        padding: '8rem 0 4rem 0',
        textAlign: 'center',
    },

    header: {
        fontFamily: 'Oxy-Bold',
        fontSize: '4rem',
    },

    gridContainer: {

    },

    gridItem: {
        border: '1px solid #1c1c1c',
        margin: '1rem',

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '.5s ease all',
        },
    },

    gridImageContainer: {

    },

    gridImage: {

    },

    gridTextContainer: {
        padding: '1rem',
    },

    title: {
        fontFamily: 'Oxy-Bold',
    },

    description: {
        fontFamily: 'Oxy-Reg',
        margin: '1rem 0',
    },

    chipTitle: {
        fontFamily: 'Oxy-Reg',
        letterSpacing: '0.6px',
        margin: '.3rem .3rem 0 0',
    },
});


export default function Project() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.headerContainer}>
                    <Typography className={classes.header} variant='h1'>
                        Projects
                    </Typography>
                </div>

                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    justify='center'
                    className={classes.gridContainer}
                >
                    {
                        gridData.map(({ title, program, description }, index) =>
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={3}
                                md={3}
                                className={classes.gridItem}
                            >
                                <div className={classes.gridImageContainer}>

                                </div>

                                <div className={classes.gridTextContainer}>
                                    <Typography className={classes.title} variant='h6'>
                                        {title}
                                    </Typography>

                                    <Typography className={classes.description} variant='body2'>
                                        {description}
                                    </Typography>

                                    {
                                        program.map((programs, i) =>
                                            <Chip className={classes.chipTitle} color='secondary' label={programs.code} />
                                        )
                                    }

                                </div>
                            </Grid>
                        )
                    }

                </Grid>
            </div>
        </div>
    )
}
