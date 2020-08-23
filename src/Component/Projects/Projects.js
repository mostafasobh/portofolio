import React,{useState,useEffect} from 'react'
import './Projects.scss'
import Project from './Project/Project'

export default function Projects() {

    const [scroll,setScroll] = useState([])
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > document.getElementById('projects').offsetTop -190){  
       setScroll([...scroll,'mrnAnimation','mlnAnimation'])
      }
    })
    
  },[])
    
    
    return (
        <div className='projects-container' id='projects'>
            <h1 className={`${scroll[0]}`}>Projects</h1>
            <span className={`underscore ${scroll[1]}`}></span>
            <div className='projects'>

            
            <Project
            tools='React Js / Redux /Redux thunk /react-router-dom'
            name='Movie Info'
            delay='.5s'
            picture={require('../../pics/movie-info.jpg')}
            link='https://t-player-9002f.web.app/movies'
            />
            <Project
            tools='React Js / styled-components / bootstrab / react-router-dom'
            name='Phone Store'
            delay='.7s'
            picture={`${require('../../pics/phon-store.png')}`}
            link='https://react-phon-store22.netlify.app/'
            />

            </div>
        </div>
    )
}
