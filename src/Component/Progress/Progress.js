import React from 'react'
import './Progress.scss'

export default function Progress(props) {
    return (
        <span className='outer-progress-bar'>
        <div className='bar-name' >{props.name}</div>
        <div className='inner-progress-wrapper'>
      <span className='inner-progress-bar' style={{width:props.width}}></span>
        </div>
      </span>
    )
}
