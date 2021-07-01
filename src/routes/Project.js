import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, Divider, Chip } from '@material-ui/core';


const gridData = [
    {
        'title': 'Project1',
        'description': 'lorem aspem',
        'program': [
            { 'code': 'html', },
            { 'code': 'css', }
        ],
    },
    {
        'title': 'Project2',
        'description': 'lorem aspem',
        'program': [
            { 'code': 'html', },
            { 'code': 'css', }
        ],
    },
    {
        'title': 'Project3',
        'description': 'lorem aspem',
        'program': [
            { 'code': 'html', },
            { 'code': 'css', }
        ],
    },

];


const useStyles = makeStyles({

});


export default function Project() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Grid
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ paddingTop: '6rem', }}
                >
                    {
                        gridData.map(({ title, program, description }, index) =>
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={4}
                                md={4}
                                style={{ border: '1px red solid' }}
                            >
                                <div className={classes.projectContainer}>
                                    <Typography variant='h6'>
                                        {title}
                                    </Typography>
                                    <Divider />

                                    <Typography variant='body1'>
                                        {description}
                                    </Typography>
                                    <Divider />

                                    {
                                        program.map((programs, i) =>
                                            <Chip color='primary' label={programs.code} />
                                        )
                                    }

                                </div>
                            </Grid>
                        )
                    }

                </Grid>
            </div>
        </div>
    )
}
