import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MainIndex from './pages/MainIndex.js';
import Service from './pages/Service.js';
import ProjectView from './pages/ProjectView.js';

const useStyles = makeStyles({
    root: {

    },
});

export default function Index() {

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={classes.root}>
            <MainIndex />
            <Service />
            <ProjectView />
        </div>
    )
}
