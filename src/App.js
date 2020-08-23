import React from 'react'
import classes from './App.module.css'
import Navbar from './Component/Navbar/Nav'
import About from './Component/About/About'
import Projects from './Component/Projects/Projects'
import Footer from './Component/Footer/Footer'

export default function App() {

    return (
        <>
 <Navbar />
<div className={classes.BgImage}>
            <div style={{color:'white'}} id='home' className={classes.introText}>
        <h1 >Looking for Web developer? </h1>
        <h3>i'm a web Developer & programmer living in egypt </h3>
        <h3>i make web applications, usally using Reactjs </h3>
            </div>
            </div>
 <About />
 <Projects />
<Footer />

    </>
    )
}
