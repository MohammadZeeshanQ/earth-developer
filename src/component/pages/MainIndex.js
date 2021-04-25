import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, Grid} from '@material-ui/core' 

const useStyles = makeStyles({
    root:{

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
