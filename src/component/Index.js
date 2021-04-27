import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MainIndex from './pages/MainIndex.js';

const useStyles = makeStyles({
    root:{

    },
});

export default function Index() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MainIndex/>
        </div>
    )
}
