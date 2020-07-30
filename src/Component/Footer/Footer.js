import React from 'react'
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


export default function Footer() {

    const classes = useStyles();
    
    return (
        <div className='footer' id='contacts'>
            <h1 className='mlnAnimation'>Contacts</h1>
            <span className='underscoreNoDelay' style={{backgroundColor:'white'}}></span>
            <p>Have a question or want to work together?</p>
    <form className={classes.root} noValidate autoComplete="off">
      <Input  type={'text'} inputProps={{ 'aria-label': 'description' }} />
    </form>

        </div>
    )
}
