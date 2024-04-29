function CartWidget(badge) {

    return (
        <button type="button" className="btn position-relative cartPos">
            <div>
                <img className="cartSize" src="./src/assets/store/img_carrito.png" alt="" />
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CartWidget