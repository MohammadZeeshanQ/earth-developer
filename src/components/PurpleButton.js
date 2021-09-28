import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

// icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    button: {
        backgroundColor: '#7619FF',
        color: '#fcfcfc',
        padding: '.6rem 1rem',
        fontFamily: 'Nunito-Reg',
        letterSpacing: '1.5px',

        '&:hover': {
            backgroundColor: '#AA72FE',
            color: '#fcfcfc',
            transform: 'scale(1.05)',
            transition: 'all .3s ease-in-out'
        },

        '@media(max-width: 600px)': {
            padding: '1rem',
            letterSpacing: '3px',
        },

        '@media(min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.5rem',
            padding: '.5rem'
        },
    },
});


export default function PurpleButton({ children, href }) {
    const classes = useStyles();

    return (
        <Button
            className={classes.button}
            href={href}
            endIcon={
                <ArrowForwardIosIcon
                    style={{ marginLeft: '.5rem', fontSize: '1rem' }}
                />
            }
        >
            {children}
        </Button>
    )
}
