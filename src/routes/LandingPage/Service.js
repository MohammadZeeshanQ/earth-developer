import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
// import Tilt from 'react-tilt' Old Library
import Tilty from 'react-tilty';

import imageFrontEnd from '../../assets/images/services/p1.png'
import imageWebDesign from '../../assets/images/services/p3.png'
import imageGraphicDesigner from '../../assets/images/services/p2.png'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fcfcfc',
    },
    wrapper: {
        width: '80%',
        margin: 'auto',

        '@media(max-width: 600px)': {
            width: '90%',
            padding: '4em 0 1rem 0',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },
    header: {
        color: '#1a1a1a',
        fontFamily: 'Oxy-Bold',
        textAlign: 'center',
        letterSpacing: '1px',
        margin: '1rem 0 2rem 0',

        '@media(min-width: 601px) and (max-width: 900px)': {
            fontSize: '2em',
        },

        '@media(max-width: 600px)': {
            fontSize: '2.5em',
        },
    },
    gridContainer: {
        padding: '3em 0',

        '@media(max-width: 600px)': {
            padding: '2em 0',
        },
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

        '@media(max-width: 600px)': {
            paddingBottom: '3em',
        },
    },
    itemWrapper: {

    },
    itemImageWrapper: {
        textAlign: 'center',
    },
    itemImage: {
        width: '18em',

        '@media(min-width: 601px) and (max-width: 900px)': {
            width: '10em',
        },

        '@media(max-width: 600px)': {
            width: '20em',
        },
    },
    itemHeaderWrapper: {

    },
    itemHeader: {
        color: '#1a1a1a',
        fontFamily: 'Nunito-Semi',
        textAlign: 'center',
        marginTop: '1rem',
        letterSpacing: '1px',

        '@media(min-width: 601px) and (max-width: 900px)': {
            fontSize: '1em',
        },
    },
});

const imagePath = [
    {
        "image": imageWebDesign,
        "name": "Web Designer",
        "alt": "Web designer"
    },
    {
        "image": imageFrontEnd,
        "name": "Front-End Developer",
        "alt": "Front-End Developer"
    },
    {
        "image": imageGraphicDesigner,
        "name": "Graphic Designer",
        "alt": "Graphic Designer"
    },
];
export default function Service() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="whatICanDo">
            <div className={classes.wrapper} >
                <Typography variant='h3' className={classes.header}>
                    What I Love to do?
                </Typography>

                {/* <Grid
                    container
                    className={classes.gridContainer}
                    justify='space-evenly'
                >

                    {imagePath.map((value, index) =>
                        <Grid
                            key={index}
                            item
                            className={classes.gridItem}
                            xs={12}
                            sm={3}
                            md={3}
                        >
                            <Tilty
                                max={35}
                                speed={300}
                                perspective={1000}
                                scale={1.1}
                            >

                                <div className={classes.itemWrapper} >

                                    <div className={classes.itemImageWrapper}>
                                        <img className={classes.itemImage} src={value.image} alt={value.alt} />
                                    </div>
                                    <div className={classes.itemHeaderWrapper}>
                                        <Typography variant='h5' className={classes.itemHeader}>
                                            {value.name}
                                        </Typography>
                                    </div>

                                </div>

                            </Tilty>

                        </Grid>
                    )}


                </Grid> */}
            </div>
        </div>
    )
}
