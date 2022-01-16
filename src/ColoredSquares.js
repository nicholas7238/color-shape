import React, {useState} from 'react'
import Square from './Square'
import './ColoredSquares.css'

export default function ColoredSquares() {

    const squareColors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'brown', 'black', 'white', 'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'brown', 'black', 'white']

    const [filteredColor, setFilteredColor] = useState('')

    return (
        <div className='ColoredSquaresMaker'>
            <h1>Colored Squares</h1>

            <div>
                <label>Filter Squares by: </label>
                <input type='text' onChange={(e) => setFilteredColor(e.target.value)}></input>
                
            </div>
            <div className='SquaresContainer'>
                {squareColors.map((squareColor, index) => {
                    if(squareColor.includes(filteredColor)) {
                        return(
                            <Square key={index} color={squareColor}/>
                        )
                    } else {
                        return(
                            <Square key={index} color={'gray'}/>
                        )
                    }
                })}
            </div>
            
        </div>
    )
}
