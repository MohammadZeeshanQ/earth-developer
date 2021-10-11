import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, } from '@material-ui/core';
import { gridData } from '../../middleware/ProjectData.js';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    root: {

    },

    wrapper: {
        width: '85%',
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
        fontFamily: 'Oxy-Bold',
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
        margin: '2rem 1rem',

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
        color: '#7619FF',
        fontFamily: 'Nunito-Bold',
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
        fontFamily: 'Nunito-Reg',
        color: '#343434',
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
        border: '1px solid #7619FF',
        color: '#7619FF',
        fontFamily: 'Oxy-Reg',
        letterSpacing: '0.6px',
        margin: '.3rem .4rem 0 0',

        '&:hover': {
            transform: 'scale(1.05)',
            background: '#AB72FF',
            color: '#fcfcfc',
            transition: 'all .3s linear',
        },

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.7rem',
            margin: '.3rem .2rem 0 0'
        },
    },

    dialogImage: {
        width: '80%',
        height: '100%',
        border: '1px solid #9c9c9c',
        borderRadius: '1rem',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {

        },
    },

    dialogButton: {
        backgroundColor: '#7619FF',
        color: '#fcfcfc',
        textTransform: 'none',
        fontFamily: 'Oxy-Reg',
        letterSpacing: '0.6px',
        margin: '1rem 0',

        '&:hover': {
            color: '#050505',
        },

        '@media(max-width: 600px)': {
            margin: '.5rem 0',
        },
    },

    dialogTitle: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
});


export default function Project() {

    const classes = useStyles();
    const [dialog, setDialog] = useState(false);
    const [pictureIndex, setPictureIndex] = useState([])
    const [dialogLink, setDialongLink] = useState('');
    const [name, setName] = useState('');


    const toggleDialog = () => {
        setDialog(!dialog);
    };


    const dialogData = (image, link, title) => {
        toggleDialog();
        setPictureIndex(image);
        setDialongLink(link);
        setName(title);
    };


    useEffect(() => {
        window.scrollTo(0, 0);

        console.log(pictureIndex);
    }, [pictureIndex, dialogLink])


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
                    justify='space-evenly'
                    className={classes.gridContainer}
                >
                    {
                        gridData.map(({ title, image, link, program, description }, index) =>

                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                                onClick={() => dialogData(image, link, title)}
                            >
                                <div className={classes.gridItem}>
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
                                                <Chip key={i} className={classes.chipTitle} label={programs.code} variant='oulined' />
                                            )
                                        }

                                    </div>
                                </div>
                            </Grid>

                        )
                    }

                </Grid>

                <Dialog
                    maxWidth='md'
                    fullWidth={true}
                    open={dialog}
                    onClose={toggleDialog}
                >
                    <DialogTitle >
                        <div className={classes.dialogTitle}>
                            <div style={{ flexGrow: 1, }}>
                                <span variant='h6' style={{ fontFamily: 'Oxy-Bold', }}>
                                    {name}
                                </span>
                            </div>
                            <div>
                                <IconButton onClick={toggleDialog} size='small'>
                                    <CloseIcon style={{ color: '#636363' }} />
                                </IconButton>
                            </div>
                        </div>
                    </DialogTitle>

                    <DialogContent style={{ textAlign: 'center' }}>
                        <img src={pictureIndex} className={classes.dialogImage} alt='Projects' />
                    </DialogContent>

                    <DialogActions>
                        <Button
                            className={classes.dialogButton}
                            href={dialogLink}
                            variant='contained'
                        >
                            Explore More
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </div>
    )
}
