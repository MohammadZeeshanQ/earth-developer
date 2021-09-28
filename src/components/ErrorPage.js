import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'


const useStyles = makeStyles({
    root: {

    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    messageDiv: {
        padding: '10em 0',
        textAlign: 'center',
        color: '#050505',

        '@media(max-width: 600px)': {
            padding: '12em 2em',
        }
    },
    messageHeader: {
        fontFamily: 'Nunito-Bold',
        letterSpacing: '2px',
    },
    messageText: {
        fontFamily: 'Nunito-Reg',
        letterSpacing: '1px',
    },
    redirectBtn: {
        color: '#fcfcfc',
        backgroundColor: '#7619FF',
        fontFamily: 'Nunito-Bold',
        marginTop: '2em'
    },
});

export default function ErrorPage() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


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
