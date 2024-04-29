import React, { useState } from 'react';


function ItemCount() {
    const [quantity, setQuantity] = useState(0);

    const add = () => {
        setQuantity(quantity + 1);
    };

    const substract = () => {
        if (quantity === 0) { return 0 }
        setQuantity(quantity - 1);
    };

    return (

        <div>
            <p>Cantidad: {quantity}</p>
            <button className="itemCountButtons" type='button' onClick={substract}>-</button>
            <button className="itemCountButtons" type='button' onClick={add}>+</button>
        </div>

    )
}

export default ItemCount