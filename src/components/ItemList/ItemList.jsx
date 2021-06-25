import React from 'react'
import { CardComponent } from '../CardItem/CardItem'


export const ItemList = (products) => {
    return(
        <div>
            {products.map(product => {
                return <CardComponent product={product} key={product.id}/>
            })
            }
        </div>
    )
}