import React, {useEffect, useState} from "react";

import {ItemList} from '../ItemList/ItemList'




export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect( async () => {
        const response = await fetch("./json/products.json")
        const result = await response.json()
        setProducts(result)
    },[])

    return (
        <div>
            <h1>
                {props.greeting}
            </h1>
            <div>
                <ItemList product={products}/>
            </div>
        </div>
    )
};

