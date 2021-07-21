import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Fab, IconButton } from '@material-ui/core'
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        right: '1.5%',
        bottom: '5%',
        zIndex: '5',
    },
    button: {
        backgroundColor: '#7619FF',
        color: '#fcfcfc',

        '&:hover': {
            transform: 'scale(1.1)',
            transition: '.4s ease all',
        }
    }
});

export default function FloatingButton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton href='/earth-developer/#/contact' size="small">
                <Fab className={classes.button}>
                    <MessageIcon />
                </Fab>
            </IconButton>

        </div>
    )
}
