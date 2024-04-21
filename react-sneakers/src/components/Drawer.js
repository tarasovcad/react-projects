export function Drawer (props) {
    console.log(props)
    return (
        <div className="overlay">
            <div className="drawer">
            <div className="drawer__bottom">
            <h3 className="drawer__title">Cart</h3>
            <button className="close-button" onClick={props.onClose}>
                    <img className="close-button__img" src="/img/plus.svg" alt="remove" width={11} height={11}/>
            </button>

            </div>
            <div className="card__items">
                <div className="card__item">
                <img className="card__item-img" src="/img/sneakers/1.jpg" alt="" width="70px" height="70px" />
                <div className="card__item-info">
                    <h5 className="card__item-title">Nike Blazer Mid Suede Sneakers</h5>
                    <span className="price">1 205 $</span>
                </div> 
                <button className="card__item-button">
                    <img className="card__item-close" src="/img/plus.svg" alt="remove" width={11} height={11}/>
                </button>

                </div>
                <div className="card__item">
                <img className="card__item-img" src="/img/sneakers/1.jpg" alt="" width="70px" height="70px" />
                <div className="card__item-info">
                    <h5 className="card__item-title">Nike Blazer Mid Suede Sneakers</h5>
                    <span className="price">1 205 $</span>
                </div>
                <button className="card__item-button">
                    <img className="card__item-close" src="/img/plus.svg" alt="remove" width={11} height={11}/>
                </button>

                </div>
                <div className="card__item">
                <img className="card__item-img" src="/img/sneakers/1.jpg" alt="" width="70px" height="70px" />
                <div className="card__item-info">
                    <h5 className="card__item-title">Nike Blazer Mid Suede Sneakers</h5>
                    <span className="price">1 205 $</span>
                </div>
                <button className="card__item-button">
                    <img className="card__item-close" src="/img/plus.svg" alt="remove" width={11} height={11}/>
                </button>

                </div>
                <div className="card__item">
                <img className="card__item-img" src="/img/sneakers/1.jpg" alt="" width="70px" height="70px" />
                <div className="card__item-info">
                    <h5 className="card__item-title">Nike Blazer Mid Suede Sneakers</h5>
                    <span className="price">1 205 $</span>
                </div>
                <button className="card__item-button">
                    <img className="card__item-close" src="/img/plus.svg" alt="remove" width={11} height={11}/>
                </button>

                </div>
            </div>
            <div className="cart-total">
                <ul className="cart-total__list">
                <li className="cart-total__link">
                    <p className="cart-total__title">Total: </p>
                    <span className="dash"></span>
                    <span className="cart-total__price">21 498 $</span>
                </li>
                <li className="cart-total__link">
                    <p className="cart-total__title">Tax 5%: </p>
                    <span className="dash"></span>
                    <span className="cart-total__price">1074 $</span>
                </li>
                </ul>
                <button className="cart-total__buton">
                <span className="cart-total__button-text">Order</span>
                <img className="cart-total__button-img" src="/img/order-img.svg" alt="order svg"  width="16" heigh="14"/>
                </button>
            </div>
            </div>
        </div>
    )
}