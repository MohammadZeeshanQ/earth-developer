import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {IconButton} from '@material-ui/core'

import FacebookIcon from '../../assets/images/icons/facebook.png'
import Github from '../../assets/images/icons/linkedin.png'
import LinkedIn from '../../assets/images/icons/github.png'



const useStyles = makeStyles({
    root:{
        position: "absolute",
        top: '40%',
        right: '0',

        '@media (max-width: 1000px)':{
            display: 'none'
        },
    }, 
    wrapper:{
        
    },
    iconcontainer:{
        display: 'flex',
        flexDirection: 'column',  
    },
    socialMediaIcons:{
        width: '1.5em',
        margin: '1em',
    },
});

const IconStyle = {
    fontSize: '.9em',
}

export default function SideNavBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.iconcontainer}>
                    <IconButton style={IconStyle} size='small'>
                        <img className={classes.socialMediaIcons} src={FacebookIcon} alt='Facebook'/>
                    </IconButton>

                     <IconButton style={IconStyle} size='small'>
                        <img className={classes.socialMediaIcons} src={Github} alt='Github'/>
                    </IconButton >

                     <IconButton style={IconStyle} size='small'>
                        <img className={classes.socialMediaIcons} src={LinkedIn} alt='LinkedIn'/>
                    </IconButton>      
                </div>
            </div>
        </div>
    )
}
