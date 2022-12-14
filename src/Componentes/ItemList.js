import React from 'react'
import Zapatillas from '../APIrest/productos'
import Item from './Item'

const ItemList = () => {

    return (
        <div className="card flex flex-wrap justify-between tienda">
            <h1>Productos destacados</h1>
            {Zapatillas.map((zapatilla) => (
                <Item 
                key={zapatilla.id}
                id={zapatilla.id}
                marca={zapatilla.marca}
                modelo={zapatilla.modelo}
                color={zapatilla.color}
                precio={zapatilla.precio}
                img={zapatilla.img}
                />
            ))}
    </div>
    )
}

export default ItemList;