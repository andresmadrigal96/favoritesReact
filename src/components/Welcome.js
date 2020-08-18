import React from 'react'
import './styles/Welcome.css'

const Welcome = ({tag,tag2}) => (
    <div className="container">
        <div className="PokeMount-User-Info">
            <h1>{tag}</h1>
            <p>{tag2}</p>
        </div>
    </div>
)

export default Welcome