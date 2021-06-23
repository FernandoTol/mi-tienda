import { useState } from 'react'



export const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial);

    function onAdd() {
        if (valor < props.stock) {
            setValor(parseInt(valor) + 1)
        };
    };

    function onSubstract() {
        if (valor > 1) {
            setValor(parseInt(valor) - 1)
        } else {
            alert('La cantidad no puede ser menor que 1')
        }
    };

    return (
        <div>
            <button className="btn btn-secondary" onClick={onSubstract}> - </button>
            <input type="text" value={valor}></input>

            <button className="btn btn-secondary" onClick={onAdd}> + </button>
        </div>
    );
};