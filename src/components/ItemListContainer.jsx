import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'


function ItemListContainer(product) {
    const [items, setItems] = useState([]);
    const { ingredient } = useParams();

    useEffect(() => {

        if (!ingredient) {
            fetch("https://api.sampleapis.com/coffee/hot")
                .then(res => res.json())
                .then(data => setItems(data));
        } else {
            fetch("https://api.sampleapis.com/coffee/hot")
                .then(res => res.json())
                .then(data => {
                    const filteredItems = data.filter(item => item.ingredients.includes(ingredient));
                    setItems(filteredItems);
                });

        }

    }, [ingredient])

    return (
        <div>
            <div>
                <h1 className='mainTitle'>Nuestros Cafés</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {<ItemList products={items} />}


            </div>
        </div>
    )
}

export default ItemListContainer