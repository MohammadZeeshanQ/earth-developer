import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid, Button, TextField} from '@material-ui/core'

import emailjs from 'emailjs-com'

const useStyles = makeStyles({
    root:{

    },
    wrapper:{
        padding: '10em 0',

        '@media (max-width: 600px)':{
            padding: '6em 0'
        },
    },
    gridContainer:{

    },
    gridItem:{

    },
    messageWrapper:{
        
        '@media (min-width: 1200px)':{
            height:'100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            paddingTop: '1em',

        },

        '@media (max-width: 600px)':{
            textAlign: "center",
            padding: '1em 2em'
        },
    },
    messageHeader:{
        fontFamily: 'Nunito-Bold',
        '@media (max-width: 600px)':{
            fontSize: '2em'
        },
    },
    messageDescription:{
        color: '#848480 ',
        paddingTop: '1em',
        
        '@media (max-width: 600px)':{
            paddingTop: '1em'
        },
    },
    inputContainer:{

        '@media (max-width: 600px)':{
            padding: '1em 2em',
        },
    },
    inputWrapper:{
        margin: '1em 0',
        
    },
    inputName:{
        width: '100%'
        
    },
    inputEmail:{
        width: '100%'
    },
    inputCompany:{
        width: '100%'
    },
    inputMessage:{
        width: '100%'
    },
    inputBtnWrapper:{
        margin: '1em 0',
    },
    inputBtnWrapper:{
        marginTop: '3em',
    },
    inputBtn:{
        width: '100%'
    },
});

export default function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                            <Typography variant= 'h4' className={classes.messageHeader} >
                                Hi There, feel free to contact me!
                            </Typography>
                            <Typography variant= 'body1' className={classes.messageDescription } >
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
                        <div className={classes.inputContainer}>

                            <div className={classes.inputWrapper}>
                                <TextField required className={classes.inputName} id='personName' label='Name' variant='outlined' />
                            </div>
                            <div className={classes.inputWrapper}>
                                <TextField required className={classes.inputEmail} id='personEmail' label='Email' variant='outlined'/>
                            </div>
                            <div className={classes.inputWrapper}>
                                <TextField className={classes.inputCompany} id='personCompany' label='Company Name' variant='outlined'/>
                            </div>
                            <div className={classes.inputWrapper}>
                                <TextField required className={classes.inputMessage} id='personMessage' label='Message' multiline rowsMax={3} variant='outlined' />
                            </div>
                            <div className={classes.inputBtnWrapper}>
                                <Button variant='contained' className={classes.inputBtn} color='primary'>Submit</Button>
                            </div>
                            
                        </div>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}
