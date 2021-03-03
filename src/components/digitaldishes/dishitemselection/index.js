import React, { useEffect, useState } from 'react'
import './styles.css'
let DishItemSelection = ({ itemSelected, selectedItems, addSelectedItem }) => {
    let [description, setDescription] = useState()
    let handleDescription = ({ target }) => {
        setDescription(target.value)
    }
    useEffect(() => {
        setDescription('')
    }, [itemSelected])
    if (itemSelected) {
        return (
            <div className='dish-item-selection'>
                <h2>{itemSelected.name}</h2>
                {
                    itemSelected.items && itemSelected.items.map((item) => {
                        return <div key={item} className='item-select-item'>
                            <span>{item}</span>
                        </div>
                    })
                }
                <DishSelection handleDescription={handleDescription} description={description} addSelectedItem={addSelectedItem} itemSelected={itemSelected} selectedItems={selectedItems} />

            </div>
        )
    }
    else return null
}
let DishSelection = ({ selectedItems, handleDescription, itemSelected, addSelectedItem, description }) => {
    let isAdded = selectedItems.find((e) => e.name === itemSelected.name)
    if (isAdded) {
        return <>
            <br />
            <h5 className='description-title'>Descripcion:</h5>
            <br />
            <p>{isAdded.userDescription}</p>
            <br />
            <button className='btn-added'>Añadido previemente</button>
        </>
    }
    else {
        return <>
            <textarea placeholder="Descripcion" onChange={handleDescription} value={description}></textarea>
            <button onClick={() => addSelectedItem({ ...itemSelected, userDescription: description })}>Añadir</button>
        </>
    }
}
export default DishItemSelection