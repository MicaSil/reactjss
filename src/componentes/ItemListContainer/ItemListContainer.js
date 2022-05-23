import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import "../ItemListContainer.js/ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    const onAdd = (stock) => {
        console.log("Añadido al carrito ${stock}")
    }
    return (
        <div ClassName="Contenido">
            <h1>{greeting}</h1>
            <ItemCount stock = {10} initial ={1} onAdd = {onAdd}/>
        </div>
    )
}


export default ItemListContainer