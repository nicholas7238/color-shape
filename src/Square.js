import React from 'react'
import './Triforce.css';

export default function Square(props) {
    const color = props.color
    
    return (
        // <div>
            <div className='Square' style={{backgroundColor: color}}></div>
        // </div>
    )
}
