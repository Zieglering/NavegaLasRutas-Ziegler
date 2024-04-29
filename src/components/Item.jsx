import { Link } from "react-router-dom"


function Item({ product }) {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.image} className="card-img-top coffeeImage" alt="coffe" />
                <div className="card-body drinkText">
                    <h2 className="card-title drinkText">{product.title}</h2>
                    <p className="card-text descriptionText">{product.description}</p>
                </div>
                <div className="ingredientsText">
                    <h4 className="card-text">Ingredientes:</h4>
                    <ul>
                        <li key={product.id}>{product.ingredients.join(', ')}</li>
                    </ul>
                </div>

                <Link type="button" className="btnDetails" to={`/item/${product.id}`}>

                    Detalles

                </Link>
            </div>
        </div>
    )

}

export default Item