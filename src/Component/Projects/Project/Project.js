import React,{useState,useEffect} from 'react'

import './Project.scss'
import {makeStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
export default function Project(props) {

    const [scroll,setScroll] = useState('')
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > document.getElementById('projects').offsetTop-80 ){  
       setScroll('upAnimation')
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
    const classNames = [classes.custom,'demo-project',scroll]
    const linkWindow=(link)=>{
      window.open(link,'_blank')
    }
    return (
    
            <Typography id='project' className={[classes.custom,'demo-project',scroll]} component={'div'}>
                <p className='hov' style={{color:'rgb(32, 30, 30)'}}>{props.name}</p>
                <p>{props.tools}</p>
                <span className='btn' onClick={()=>linkWindow(props.link)}>View Site</span>
            </Typography>
    )
}

