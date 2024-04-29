import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {
    const [detail, setDetail] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/coffee/hot/${itemId}`);
                const data = await response.json();
                setDetail(data);

            } catch (error) {
                console.error('Error en el fetch de productos:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [itemId])

    return (
        <div className="fluid">
            <div className='row'>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <ItemDetail detail={detail} />
                )}
            </div>
        </div>

    )

}

export default ItemDetailContainer