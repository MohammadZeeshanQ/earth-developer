import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button} from '@material-ui/core'
import Tilt from 'react-tilt'

import imageFrontEnd from '../../assets/images/services/imageFrontEnd.png'
import imageWebDesign from '../../assets/images/services/imageWebDesign.png'
import imageGraphicDesigner from '../../assets/images/services/imageGraphicDesigner.png'

const useStyles = makeStyles({
    root:{
        backgroundColor: '#1a1a1a',
    },
    wrapper:{
        padding: '3em 0',

        '@media(max-width: 600px)':{
            padding: '2em 0',
        },
    },
    header:{
        color: '#fcfcfc',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',

        '@media(min-width: 720px) and (max-width: 900px)':{
            fontSize: '2em',
        },

        '@media(max-width: 600px)':{
            fontSize: '2.5em',
        },
    },
    gridContainer:{
        padding: '3em 0',

        '@media(max-width: 600px)':{
            padding: '2em 0',
        },
    },
    gridItem:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent : 'space-between',
        alignItems: 'center',

        '@media(max-width: 600px)':{
            paddingBottom: '3em',
        },
    },
    itemWrapper:{

    },
    itemImageWrapper:{
        textAlign: 'center',
    },
    itemImage:{
        width: '18em',

        '@media(min-width: 720px) and (max-width: 900px)':{
            width: '10em',
        },

        '@media(max-width: 600px)':{
            width: '12em',
        },
    },
    itemHeaderWrapper:{

    },
    itemHeader:{
        color: '#fcfcfc',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',

        '@media(min-width: 720px) and (max-width: 900px)':{
            fontSize: '1em',
        },
    },
});

const imagePath = [
        {
            "image": imageWebDesign,
             "name": "Web Designer",
             "alt": "Web designer"
        },
        {
            "image": imageFrontEnd,
             "name": "Front-End Developer",
             "alt": "Front-End Developer"
          },
          {
            "image": imageGraphicDesigner,
            "name": "Graphic Designer",
            "alt": "Graphic Designer"
        },
];
export default function Service() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Typography variant='h3' className={classes.header}>
                    What I do
                </Typography>

                <Grid
                    container
                    className={classes.gridContainer}
                    justify='space-evenly'
                    xs={12}
                    sm={12}
                    md={12}
                >

                  {imagePath.map((value, index) => 
                     <Grid
                        key = {index}
                        item
                        className={classes.gridItem}
                        xs={12}
                        sm={3}
                        md={3}
                    >
                        <Tilt className="Tilt" options={{ max : 45, speed : 300, prospective: 1000 }}>
                            <div className={classes.itemWrapper} >
                                <div className={classes.itemImageWrapper}>
                                    <img className={classes.itemImage} src={value.image} alt={value.alt} />
                                </div>
                                <div className={classes.itemHeaderWrapper}>
                                    <Typography variant='h5' className={classes.itemHeader}>
                                        {value.name}
                                    </Typography>
                                </div>
                            </div> 
                        </Tilt>   

                    </Grid>
                  )}
                    

                </Grid>
                <script type="text/javascript" src="vanilla-tilt.js"></script>
            </div>
        </div>
    )
}
