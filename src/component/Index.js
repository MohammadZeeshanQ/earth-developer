import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from '@material-ui/core/styles';
import NavBar from './pages/NavBar.js';
import MainIndex from './pages/MainIndex.js';

const useStyles = makeStyles({
    root:{

    },
});

export default function Index() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar/>
            <MainIndex/>
        </div>
    )
}
