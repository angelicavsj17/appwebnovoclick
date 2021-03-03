import React, { useState } from 'react'
import './styles.css'
let ToolCard = ({ item }) => {
    let [turned, setTurned] = useState(false);
    return (
        <div onClick={() => setTurned(!turned)} className={`card-tools ${turned && "turnCard"}`}>
            {
                !turned ? <img alt='item.name' src={item.img} /> :
                    <div className="turnCard">
                        <span className="tool-title">{item.name}</span>
                        <span>{item.description}</span>
                    </div>
            }
        </div>
    )
}
export default ToolCard