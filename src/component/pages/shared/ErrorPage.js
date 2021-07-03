import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(147deg, #2c3e50 0%, #000000 74%)',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    messageDiv: {
        padding: '15em 0',
        textAlign: 'center',
        color: '#fcfcfc',

        '@media(max-width: 600px)': {
            padding: '12em 2em',
        }
    },
    messageHeader: {
        fontFamily: 'Oxy-Bold',
    },
    messageText: {
        fontFamily: 'Oxy-Reg',
    },
    redirectBtn: {
        backgroundColor: '#fbb034',
        backgroundImage: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
        fontFamily: 'Nunito-Bold',
        marginTop: '2em'
    },
});

export default function ErrorPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.messageDiv}>
                    <Typography className={classes.messageHeader} variant='h1'>
                        404
                    </Typography>
                    <Typography className={classes.messageText} variant='body1' gutterBottom>
                        Sorry, the page you're looking for is not available.
                    </Typography>
                    <Button className={classes.redirectBtn} variant='contained' size='large' href='/earth-developer/' >
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </div>
    )
}
