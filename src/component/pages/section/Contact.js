import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, TextField, Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab';
import SendIcon from '@material-ui/icons/Send';

import emailjs from 'emailjs-com'

const useStyles = makeStyles({
    root: {
        position: 'relattive',
    },
    circleBig: {
        position: 'absolute',
        top: '28%',
        left: '-10%',
        zIndex: '-3',
        height: '700px',
        width: '700px',
        backgroundColor: '#7619FF',
        opacity: '.2',
        borderRadius: '50%',

        '@media (max-width: 1025px)': {
            display: 'none',
        },
    },
    circleSmall: {
        position: 'absolute',
        top: '25%',
        left: '40%',
        zIndex: '-2',
        height: '100px',
        width: '100px',
        backgroundColor: '#7619FF',
        opacity: '.3',
        borderRadius: '50%',

        '@media (max-width: 1025px)': {
            display: 'none',
        },
    },
    wrapper: {
        padding: '10em 0',

        '@media (max-width: 600px)': {
            padding: '6em 0'
        },
    },
    gridContainer: {

    },
    gridItem: {

    },
    messageWrapper: {

        '@media (min-width: 1200px)': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            paddingTop: '1em',

        },

        '@media (max-width: 600px)': {
            textAlign: "center",
            padding: '1em 2em'
        },
    },
    messageHeader: {
        fontFamily: 'Nunito-Bold',
        '@media (max-width: 600px)': {
            fontSize: '2em'
        },
    },
    messageDescription: {
        color: '#848480 ',
        paddingTop: '1em',

        '@media (max-width: 600px)': {
            paddingTop: '1em'
        },
    },
    inputContainer: {

        '@media (max-width: 600px)': {
            padding: '1em 2em',
        },
    },
    inputWrapper: {
        margin: '1em 0',

    },
    inputName: {
        width: '100%'
    },
    inputEmail: {
        width: '100%'
    },
    inputCompany: {
        width: '100%'
    },
    inputMessage: {
        width: '100%'
    },
    inputBtnWrapper: {
        marginTop: '3em',
        display: 'flex',
        alignItems: 'center',
    },
    inputBtn: {
        fontFamily: 'Oxy-Reg',
        width: '100%',
        backgroundColor: '#7619FF',
        color: '#fcfcfc',
        fontSize: '1.05rem',
        padding: '.6rem 0',
        textTransform: 'none',
    },
});

export default function Contact() {

    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const sendEmail = (e) => {
        e.preventDefault(e);

        emailjs.sendForm('service_gmw78vk', 'template_8726hwb', e.target, 'user_8aetlhmZHWhMHlxBHbDlJ')
            .then((result) => {
                setSuccessOpen(true);
                console.log(result.text);
            },
                (error) => {
                    setErrorOpen(true);
                    console.log(error.text);
                });
        e.target.reset();
    };



    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSuccessOpen(false);
        setErrorOpen(false);
    };


    return (
        <div className={classes.root}>

            <div className={classes.circleBig}></div>
            <div className={classes.circleSmall}></div>

            <div className={classes.wrapper}>
                <Grid
                    container
                    justify='space-around'
                    xs={12}
                    sm={12}
                    md={12}
                >
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.gridItem}
                    >
                        <div className={classes.messageWrapper}>
                            <Typography variant='h4' className={classes.messageHeader} >
                                Hi there, feel free to contact me!
                            </Typography>
                            <Typography variant='body1' className={classes.messageDescription} >
                                I'm here to help and answer any question you might have.
                                I'm looking forward to hear from you.
                            </Typography>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                    >
                        <form onSubmit={sendEmail}>
                            <div className={classes.inputContainer}>

                                <div className={classes.inputWrapper}>
                                    <TextField required className={classes.inputName} id='personName' label='Name' variant='outlined' name='name' />
                                </div>
                                <div className={classes.inputWrapper}>
                                    <TextField required className={classes.inputEmail} id='personEmail' label='Email' variant='outlined' name='email' />
                                </div>
                                <div className={classes.inputWrapper}>
                                    <TextField required className={classes.inputCompany} id='Subject' label='Subject' variant='outlined' name='subject' />
                                </div>
                                <div className={classes.inputWrapper}>
                                    <TextField required className={classes.inputMessage} id='personMessage' label='Message' multiline rowsMax={3} variant='outlined' name='message' />
                                </div>
                                <div className={classes.inputBtnWrapper}>
                                    <Button
                                        variant='contained'
                                        className={classes.inputBtn}
                                        type='submit'
                                        endIcon={<SendIcon style={{ fontSize: '1.4rem', marginLeft: '.5rem', }} />}
                                    >
                                        Submit
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </Grid>

                </Grid>


            </div>

            <Snackbar open={successOpen} autoHideDuration={8000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant='filled'>
                    <AlertTitle>Success!</AlertTitle>
                    Message has  been sent.
                </Alert>
            </Snackbar>

            <Snackbar open={errorOpen} autoHideDuration={8000} onClose={handleClose}>
                <Alert severity="error" onClose={handleClose} variant="filled">
                    <AlertTitle>Failed!</AlertTitle>
                    Please try again.
                </Alert>
            </Snackbar>
        </div>
    )
}
