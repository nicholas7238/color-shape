import React, {useState, useEffect} from 'react'
import Square from './Square';
import './Triforce.css';


export default function Triforce() {

    const squareColors = ['red', 'blue', 'green']
    const [searchInput, setSearchInput] = useState('')

    function fungsi1(nameOfColor) {
        if(squareColors.includes(nameOfColor)) {
            console.log('yes')
        } else {
            console.log('no')
        }
    }

    useEffect(() => {
        fungsi1(searchInput)
    }, [searchInput])

    return (
        <div className='Triforce'>
            <h2 className='DisplayName'>Nick</h2>
            <div className='Triangle TopTri'></div>
            <div>
                <div className='Triangle BotTri'></div>
                <div className='Triangle BotTri'></div>
            </div>
            
            <div>
                {/* <Square color='cyan' /> */}
                {squareColors.map(square => {
                    return(<Square color={square} />)
                })}
                {squareColors.filter(square => square === searchInput).map(square => {
                    return(<Square color={square} />) 
                }
                    )}
                {/* <div className='Square Red'></div>
                <div className='Square Blue'></div>
                <div className='Square Green'></div> */}
            </div>

            <input type='text' onChange={(e) => setSearchInput(e.target.value)}></input>
        </div>
    )

}

