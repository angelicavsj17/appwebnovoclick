import React, { useEffect, useState } from 'react'
import './styles.css'
let DishesCard = ({ name, img, dishesSelected, color, handleChange }) => {
    let [image, setImage] = useState('')
    useEffect(() => {
        let imageLoaded = require('../../../assets' + img)
        setImage(imageLoaded.default)
    }, [img])
    return (
        <div onClick={() => handleChange(name)} className={`dishes-card`}
            style={{
                backgroundColor: dishesSelected === name ? color : "",
            }}>
            <span>{name}</span>
            <img width="97px" height="68px" alt={name} src={image && image} />
        </div>
    )
}
export default DishesCard