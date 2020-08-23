import React,{useState,useEffect} from 'react'
import './About.scss'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Progress from '../../Component/Progress/Progress'
import Hexagonal from './Hexagonal'


export default function About() {

  const [scroll,setScroll] = useState([])
  const [animate,setAnimate] = useState([])
  useEffect(()=>{
    
    window.addEventListener('scroll',()=>{
      if(window.scrollY > document.getElementById('about').offsetTop - 120){  
       setScroll([...scroll,'mrnAnimation'])
      }
      if(window.scrollY > document.getElementById('hexagonal').offsetTop){  
       setAnimate(['mrnAnimation','mlnAnimation'])
      }

    })
    
  },[])
  
    return (
        <Typography component="div" id='about' className='about-Container'>


        <Box className={scroll[0]} component='h1' mt={6} mb={0}>
          About
        </Box>
        <span className={`underscore ${scroll}`} style={{animationDelay:'0.5s'}}></span>

        <div className='hexagonal-Container'>
        <Grid container spacing={2}>
        
        <Hexagonal 
          icon={'tachometer-alt'}
          title={'fast'}
          text={'Fast load times and lag free interaction, my highest priority'}
         />
        <Hexagonal 
          icon={'desktop'}
          title={'Responsive'}
          text={'My layouts will work on any device, big or small.'}
         />
        <Hexagonal 
          icon={'lightbulb'}
          title={'Intuitive'}
          text={'Strong preference for easy to use, intuitive UX/UI.'}
         />
        <Hexagonal 
          icon={'rocket'}
          title={'Dynamic'}
          text={"Websites don't have to be static, I love making pages come to life."}
         />
        </Grid>
        </div>
  
        <div className='About2'>
        <div className={`personal-info ${animate[0]}`}>
        <span className='self-icon'></span>
        <h3>who's this guy?</h3>
        <p className='text-container'>i'm a Front-End Developer who have a serious passion for ui effects and animations and creating dynamic user experiences</p>
        </div>
    
        <div className={`skills ${animate[1]}`}>

      <Progress name='Html' width='80%'/>
      <Progress name='Css' width='80%'/>
      <Progress name='Javascript' width='70%'/>
      <Progress name='Reactjs' width='70%'/>
      <Progress name='Photoshop' width='70%'/>
      <Progress name='Node.js' width='50%'/>
          
          
        </div>
        </div>
      


      </Typography>
    )
}
