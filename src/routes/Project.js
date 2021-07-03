import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Divider, Chip } from '@material-ui/core';

import SoundImage from '../assets/images/projects/soundWeb.png';
import BagImage from '../assets/images/projects/bagWeb.png';
import ShoeImage from '../assets/images/projects/shoeWeb.png';
import FashionImage from '../assets/images/projects/FashionWeb.png';


const gridData = [
    {
        'title': 'Covid Vision',
        'image': SoundImage,
        'description': 'Web App developed to retrieve Covid-19 cases information',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Fashion Website',
        'image': FashionImage,
        'description': 'Minimalist Landging Website to display Trendy Fashion clothing.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Big-Bag Website',
        'image': BagImage,
        'description': 'Website build for marketing new trendy bags for various purpose.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'Javascript', },
            { 'code': 'LESS', }
        ],
    },
    {
        'title': '3D Illustration',
        'image': SoundImage,
        'description': 'Minimalist Business Website with 3D illustration.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Parallax Website',
        'image': SoundImage,
        'description': 'Website build with Parallax library for object scrolling animation.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'LESS', },
            { 'code': 'Javascript', },
            { 'code': 'Parallax.Js', },
        ],
    },
    {
        'title': 'Product Website',
        'image': ShoeImage,
        'description': 'Landing Page for a Speaker Product with basic UI',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'LESS', },
            { 'code': 'CSS', },
        ],
    },
    {
        'title': 'Mountainer Website',
        'image': SoundImage,
        'description': 'Simple Website business website with pricing card.',
        'program': [
            { 'code': 'HTML', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Registration UI',
        'image': SoundImage,
        'description': 'Multiple Login and SingIn webpages template.',
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
        // '@media(min-width: 601px) and (max-width: 1024px)': {

        // },
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

    headerContainer: {
        paddingTop: '8rem',
        textAlign: 'center',
    },

    header: {
        fontFamily: 'Nunito-Bold',
        fontSize: '4rem',
        letterSpacing: '2px',

        '@media(max-width: 600px)': {
            fontSize: '2.5rem',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '2rem',
        },
    },

    gridContainer: {
        padding: '5rem 0',

        '@media(max-width: 600px)': {
            padding: '2rem 0',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            padding: '3rem 0',
        },
    },

    gridItem: {
        border: '1px solid #C6C6C6',
        boxShadow: '5px 5px 20px #DCDBDB',
        borderRadius: '1rem',
        margin: '2rem .5rem',

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '.4s ease all',
        },

        '@media(max-width: 600px)': {
            boxShadow: '2px 3px 10px #DCDBDB',

            '&:hover': {
                transform: 'scale(1.05)',
                transition: '.4s ease all',
            },
        },
    },

    gridImageContainer: {

    },

    gridImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '1rem 1rem 0 0',
        borderBottom: '1px solid #C6C6C6',
    },

    gridTextContainer: {
        padding: '2rem 1rem 1rem 1rem',

        '@media(max-width: 600px)': {
            padding: '.8rem 1rem 1rem 1rem',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            padding: '0.5rem 1rem 1rem 1rem',
        },
    },

    title: {
        fontFamily: 'Oxy-Bold',
        letterSpacing: '1px',

        '@media(max-width: 600px)': {
            letterSpacing: '1.5px',
            fontSize: '1.4rem',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '1.1rem',
            letterSpacing: '1.5px'
        },
    },

    description: {
        fontFamily: 'Oxy-Reg',
        margin: '1rem 0 1.5rem 0',
        letterSpacing: '0.6px',

        '@media(max-width: 600px)': {
            fontSize: '.9rem',
            margin: '1rem 0 2.5rem 0',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.8rem',
            letterSpacing: '1px',
            margin: '.8rem 0 1rem 0',

        },
    },

    chipTitle: {
        backgroundColor: '#FF4F5A',
        color: '#fcfcfc',
        fontFamily: 'Oxy-Reg',
        letterSpacing: '0.6px',
        margin: '.3rem .4rem 0 0',

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '.3s ease all',
        },

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.7rem',
            margin: '.3rem .2rem 0 0'
        },
    },
});


export default function Project() {

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

                <div className={classes.headerContainer}>
                    <Typography className={classes.header} variant='h1'>
                        PROJECTS
                    </Typography>
                </div>

                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    justify='space-evenly'
                    className={classes.gridContainer}
                >
                    {
                        gridData.map(({ title, image, program, description }, index) =>
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={4}
                                md={3}
                                className={classes.gridItem}
                            >
                                <div className={classes.gridImageContainer}>
                                    <img className={classes.gridImage} src={image} alt='Project Images' />
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
                                            <Chip className={classes.chipTitle} label={programs.code} />
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
