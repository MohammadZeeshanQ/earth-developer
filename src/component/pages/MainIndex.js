import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, Grid} from '@material-ui/core' 

const useStyles = makeStyles({
    root:{
        border: '1px red solid',
        padding: '10em',
        backgroundColor: 'rgb(15, 17, 23 )',
    },
    wrapper:{

    }
});

export default function MainIndex() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
        
            </div>
        </div>
    )
}
