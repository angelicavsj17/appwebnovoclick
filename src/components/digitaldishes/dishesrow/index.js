import React from 'react'
import DishesCard from '../dishesCard'
import './styles.css'
let DishesRow = ({ dishes, dishesSelected, handleChange }) => {
    return (
        < div className="dish-row" >
            {
                dishes.map((item) => {
                    return (
                        <DishesCard
                            key={item.name}
                            name={item.name}
                            img={item.img}
                            dishesSelected={dishesSelected}
                            color={item.color}
                            handleChange={handleChange}
                        />
                    )
                })
            }
        </div >
    )
}
export default DishesRow