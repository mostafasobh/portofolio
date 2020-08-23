import React from 'react'
import './Footer.scss'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SocialButton from '../Buttons/SocialButton'


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
        <div className='footer upAnimation' id='contacts'>
            <h1 className='mlnAnimation'>Contacts</h1>
            <span className='underscoreNoDelay' style={{backgroundColor:'white'}}></span>
            <p>Have a question or want to work together?</p>
            
          <div className='social-button-container'>
            <SocialButton
            link='https://www.facebook.com/mostafasobh391/'
            ><i className="fab fa-facebook-f fa-lg"></i>
            </SocialButton>

            <SocialButton
            link='https://twitter.com/MostafaSobh3'
            ><i className="fab fa-twitter fa-lg"></i>
            </SocialButton>

            <SocialButton
            link='https://github.com/mostafasobh'
            ><i className="fab fa-github fa-lg"></i>
            </SocialButton>

          </div>

        </div>
    )
}
