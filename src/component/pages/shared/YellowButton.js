import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

const useStyles = makeStyles({
    Btn:{
        backgroundColor: '#fbb034',
        backgroundImage: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
        marginTop: '2em'
    },
});

export const YellowButton = ({children, href}) => {
    const classes = useStyles();
    return (
        <Button className={classes.Btn} variant='contained' href={href} >
            {children}
        </Button>
    )
}




