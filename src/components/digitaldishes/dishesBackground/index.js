import React, { useEffect } from 'react'
import './styles.css'
import Woman from '../../../assets/dishesfrontpage/mujerplatosdigitales.png'
import { useState } from 'react'
let DishesBackground = ({ children, backgroundImage }) => {
    let [image, setImage] = useState('')
    useEffect(() => {
        let imageLoaded = require('../../../assets' + backgroundImage)
        setImage(imageLoaded.default)
    }, [backgroundImage])
    return (
        <div style={{ backgroundImage: `url(${image && image})` }} className="dishes-background">
            <img alt='woman' className="woman-img" src={Woman} />
            <div className='dish-children-container'>
                {children}
            </div>
            <img alt='woman' className="woman-img2" src={Woman} />
        </div>
    )
}
export default DishesBackground