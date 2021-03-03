import React, { useEffect } from 'react'
import { useState } from 'react'
import './styles.css'
let DishesCardCarrousel = ({ item, handleItemSelect }) => {
    let [image, setImage] = useState('')
    useEffect(() => {
        let imageLoaded = require('../../../assets' + item.img)
        setImage(imageLoaded.default)
    }, [item.img])
    return (
        <div onClick={() => handleItemSelect({ item })} className="dish-card-carro">
            <img width="100px" height="99.49px" alt={item.name} src={image && image} />
            <span>{item.name}</span>
        </div>
    )
}
export default DishesCardCarrousel