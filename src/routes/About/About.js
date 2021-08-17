import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Divider } from '@material-ui/core'
import { HtmlData, CssData, JsData, GitData, OtherData } from '../../middleware/AboutData.js';

import Tilty from 'react-tilty';

import Developer from '../../assets/images/background/developer.png'


const useStyles = makeStyles({
    root: {
        position: 'relative',
    },

    circleBig: {
        position: 'absolute',
        top: '10%',
        right: '-5%',
        zIndex: '-3',
        height: '400px',
        width: '400px',
        backgroundColor: '#7619FF',
        opacity: '.2',
        borderRadius: '50%',

        '@media (max-width: 600px)': {
            display: 'none',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            display: 'none',
        },

    },

    gridItemText: {

    },

    gridItemImage: {
        '@media(min-width: 601px) and (max-width: 1024px)': {
            display: 'none',
        },
    },

    wrapper: {
        padding: '10em 0',

        '@media(max-width: 600px)': {
            padding: '8em 0 0 0',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            padding: '10rem 0 0 0',
        },
    },

    gridImage: {
        width: '100%',
        height: "100%",
        objectFit: 'cover',

        '@media(max-width: 600px)': {
            display: 'none',
        },
    },

    textContainer: {
        '@media(max-width: 600px)': {
            paddingBottom: '5rem'
        },
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
        fontFamily: "Nunito-Semi",
        color: '#7619FF',


        '@media(max-width: 600px)': {
            margin: '1rem'
        },
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

    skillContainer: {
        margin: '2rem 0',
    },

    skillLogoWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '2rem 0',

        '@media(min-width: 601px) and (max-width: 900px)': {
            justifyContent: 'flex-start',
        },

        '@media(max-width: 600px)': {
            justifyContent: 'space-evenly',
        },
    },

    skillBox: {
        textAlign: 'center',
        padding: '1rem 2rem',
        borderRadius: '1rem',

        '&:hover': {
            backgroundColor: '#F3E6FF',
            transform: 'scale(1.1)',
            transition: ' all .3s ease-in-out',

            '& $skillLabel': {
                color: '#151515',
            }
        },

        '@media(max-width: 600px)': {
            margin: '1rem 0',
        },

        '@media(min-width: 601px) and (max-width: 900px)': {
            padding: '1rem 0',
        }
    },

    skillTitle: {
        fontFamily: 'Oxy-Bold',
        color: '#151515',
    },

    skillLabel: {
        marginTop: '.5rem',
        fontFamily: 'Nunito-Reg',
        color: '#959595'
    },

    skillIcon: {
        width: '3rem',

    },
});


export default function About() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const dataMap = [
        {
            'name': HtmlData,
            'sectionName': 'HTML',
        },
        {
            'name': CssData,
            'sectionName': 'CSS',
        },
        {
            'name': JsData,
            'sectionName': 'Javascript',
        },
        {
            'name': GitData,
            'sectionName': 'Git',
        },
        {
            'name': OtherData,
            'sectionName': 'Others',
        },
    ]


    return (
        <div className={classes.root}>

            <div className={classes.circleBig}></div>

            <div className={classes.wrapper}>
                <Grid
                    container
                    className={classes.gridContainer}
                    justify='space-evenly'
                >

                    <Grid
                        item
                        className={classes.gridItemText}
                        xs={12}
                        sm={9}
                        md={5}
                    >

                        <div className={classes.textContainer}>

                            <div className={classes.nameWrapper}>
                                <Typography className={classes.nameHeader} variant='h3' >
                                    Hi there!
                                </Typography>
                                <Typography className={classes.nameDescription} variant='h6'>
                                    My name is <span style={{ fontFamily: 'Nunito-Bold', color: '#7619FF' }}>Mohammad Zeeshan</span>. I create <span style={{ fontFamily: 'Nunito-Bold', color: '#7619FF' }}>Beautiful</span> and <span style={{ fontFamily: 'Nunito-Bold', color: '#7619FF' }}>Elegant</span> Websites for small businesses.
                                </Typography>

                                <div className={classes.nameAttributeDiv}>
                                    <Typography className={classes.nameAttributeText} variant='h6' >
                                        <li>Front-End Developer</li>
                                        <li>Web Designer</li>
                                        <li>UI/UX Designer</li>
                                    </Typography>
                                </div>

                            </div>

                            <div className={classes.skillWrapper}>

                                <div className={classes.skillHeaderWrapper}>
                                    <Typography className={classes.skillHeader} variant='h4'>Skills</Typography>
                                </div>

                                {dataMap.map((item, index) =>
                                    <div key={index} className={classes.skillContainer}>
                                        <div>
                                            <Typography
                                                className={classes.skillTitle}
                                                variant='h6'
                                            >
                                                {item.sectionName}
                                            </Typography>
                                        </div>

                                        <Grid
                                            container
                                            className={classes.skillLogoWrapper}
                                        >
                                            {item.name.map((item, i) =>
                                                <Grid
                                                    item
                                                    xs={4}
                                                    sm={2}
                                                    md={2}
                                                    className={classes.skillBox}
                                                    key={i}
                                                >
                                                    <img
                                                        src={item.img}
                                                        className={classes.skillIcon}
                                                        alt={item.name}
                                                        width='100%'
                                                        height='100%'
                                                    />
                                                    <Typography
                                                        className={classes.skillLabel}
                                                        variant='body2'
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </Grid>
                                            )}
                                        </Grid>
                                        <Divider />
                                    </div>
                                )}
                            </div>
                        </div>

                    </Grid>

                    <Grid
                        item
                        className={classes.gridItemImage}
                        xs={false}
                        sm={false}
                        md={4}
                    >
                        <Tilty
                            max={25}
                            speed={300}
                            perspective={1000}
                            scale={1.1}
                        >
                            <img src={Developer} className={classes.gridImage} alt='People jumping' />
                        </Tilty>

                    </Grid>

                </Grid>
            </div>
        </div>
    )
}
