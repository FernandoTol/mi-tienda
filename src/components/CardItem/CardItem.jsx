import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "./ItemCount/itemCount";




export const CardComponent = (props, products) => {
    return (
        <div className='card'>
            <div class="card" >
                <img src={products.pictureURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{products.title}</h5>
                    <p class="card-text">{products.description}</p>
                    <a href="/" className="btn btn-primary">{products.price}</a>
                    <ItemCount stock={products.stock} initial='1' id={products.id}/>
                </div>
            </div>
        </div>
    )
}