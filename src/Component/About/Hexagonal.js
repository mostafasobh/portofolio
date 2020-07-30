import React,{useState,useEffect} from 'react'
import './Hexagonal.scss'
import Grid from '@material-ui/core/Grid';
export default function Hexagonal(props) {

    const[scroll,setScroll]=useState([])
    const[fade,setFade]=useState([])
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scrollY > 240){  
           setScroll([...scroll,'rotate'])
           setFade([...fade,'fadeIn'])
    
          }
        })
      },[])
    return (
        <Grid item xs={12} sm={6} md={6} lg={3} >
        <div className='hexagonal'>
    <span className={`about-icons ${scroll?scroll[0]:''}`}>{<i className={`fas fa-${props.icon} fa-3x`}></i>}</span>
        <h3 className={`${fade?fade[0]:''}`}>{props.title}</h3>
    <p className={`text-container ${fade?fade[0]:''}`}>{props.text}</p>
        </div>
        </Grid>
    )
}
