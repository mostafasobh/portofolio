import React from 'react'
import './SocialButton.scss'

export default function SocialButton(props) {

    const linkWindow=(link)=>{
        window.open(link,'_blank')
      }
    
    return (
    <button className='social-button' onClick={()=>linkWindow(props.link)}>{props.children}</button>
    )
}
