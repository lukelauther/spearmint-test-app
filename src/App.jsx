import React, { useState } from 'react'
import './style.css'

export default function App() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleSubtract = () => {
        setCount(prevCount => prevCount - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <div data-testid="counter" id="counter">Count: {count}</div>
            <button className="button" onClick={handleAdd}>Add</button>
            <button className="button" onClick={handleSubtract}>Subtract</button>
            <button className='button' onClick={handleReset}>Reset</button>
        </div>
    )

}