import React, { useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import MainIndex from './MainIndex.js';
import Service from './Service.js';
import VideoShow from './VideoModel.js';

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
            <VideoShow />
        </div>
    )
}
