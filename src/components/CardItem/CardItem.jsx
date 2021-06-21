import  "bootstrap/dist/css/bootstrap.min.css";
import { ItemCount } from "../itemCount/itemCount";



export const CardComponent = (props) => {
    return (
        <div className='card'>
            <div class="card" >
                <img src='...' class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                        <ItemCount stock='10' initial='1'/>
                    </div>
            </div>
        </div>
    )
}