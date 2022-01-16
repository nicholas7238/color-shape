import React, {useState} from 'react'
import Square from './Square'
import './Triforce.css'

export default function ColoredSquaresMaker() {
    const [chosenColors, setChosenColors] = useState(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'brown', 'black', 'white'])
    const [squareColors, setSquareColors] = useState([])

    const [filteredColor, setFilteredColor] = useState('')

    const squaresAmount = 20

    function createRandomColors() {
        //setChosenColors(['green', 'red', 'yellow', 'black'])
        let tempArr = []

        for(let i = 0; i < squaresAmount; i++) {
            console.log(chosenColors[i % chosenColors.length])
            tempArr.push(chosenColors[i % chosenColors.length])
        }
        setSquareColors(tempArr)
    }

    

    return (
        <div className='ColoredSquaresMaker'>
            <h1>Colored Squares</h1>
            <div>
                <button onClick={createRandomColors}>Default Colors</button>
                <br /><br />
                <input type='text'></input>
                <button>Choose these Colors</button>
            </div>
            <div>
                <label>Filter Squares by: </label>
                <input type='text' onChange={(e) => setFilteredColor(e.target.value)}></input>
                
            </div>
            <div className='SquaresContainer'>
                {/* <Square color='crimson' /> */}
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
