import React,{useState,useEffect} from 'react'
import './Project.scss'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
export default function Project(props) {

    const [scroll,setScroll] = useState([])
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 800){  
       setScroll([...scroll,'upAnimation'])
      }
    })
    
  },[])
    
    const styles=makeStyles({
        custom:{
            backgroundImage:`url(${props.picture})`,
            animationDelay:`${props.delay}`,
            "&:hover":{
                backgroundImage:`linear-gradient(to right, rgb(241 245 240 / 95%), rgb(255 255 255 / 96%)) , url(${props.picture})`
            }
        }
    })
    const classes=styles()

    const linkWindow=(link)=>{
      window.open(link,'_blank')
    }
    return (
            <Typography className={[classes.custom,'demo-project',scroll[0]]} component={'div'}>
                <p className='hov' style={{color:'rgb(32, 30, 30)'}}>{props.name}</p>
                <p>{props.tools}</p>
                <span className='btn' onClick={()=>linkWindow(props.link)}>View Site</span>
            </Typography>
    )
}
