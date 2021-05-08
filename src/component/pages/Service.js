import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Typography, Button} from '@material-ui/core'

import imageFrontEnd from '../../assets/images/services/imageFrontEnd.png'
import imageWebDesign from '../../assets/images/services/imageWebDesign.png'
import imageGraphicDesigner from '../../assets/images/services/imageGraphicDesigner.png'

const useStyles = makeStyles({
    root:{

    },
    wrapper:{

    },
    header:{

    },
    gridContainer:{

    },
    gridItem:{
        border: '1px red solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent : 'space-between',
        alignItems: 'center',
    },
    itemWrapper:{

    },
    itemImageWrapper:{

    },
    itemImage:{
        width: '15em',
        border: '1px blue solid',
    },
    itemHeaderWrapper:{

    },
    itemHeader:{

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
                        
                        <div className={classes.itemWrapper}>
                            <div className={classes.itemImageWrapper}>
                                <img className={classes.itemImage} src={value.image} alt={value.alt} />
                            </div>
                            <div className={classes.itemHeaderWrapper}>
                                <Typography variant='h6' className={classes.itemHeader}>
                                    {value.name}
                                </Typography>
                            </div>
                        </div>    

                    </Grid>
                  )}
                    

                </Grid>
            </div>
        </div>
    )
}
