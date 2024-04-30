export function Drawer({ onClose, onRemove, items = [] }) {
  // console.log(props)
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__top">
          <h3 className="drawer__title">Cart</h3>
          <button className="close-button" onClick={onClose}>
            <img
              className="close-button__img"
              src="/img/plus.svg"
              alt="remove"
              width={11}
              height={11}
            />
          </button>
        </div>
        {items.length > 0 ? (
          <div className="wrap">
            <div className="card__items">
              {items.map((obj) => (
                <div key={obj.id} className="card__item">
                  <img
                    className="card__item-img"
                    src={obj.imageUrl}
                    alt=""
                    width="70px"
                    height="70px"
                  />
                  <div className="card__item-info">
                    <h5 className="card__item-title">{obj.title}</h5>
                    <span className="price">{obj.price} $</span>
                  </div>
                  <button className="card__item-button" onClick={() => onRemove(obj.id)}>
                    <img
                      className="card__item-close"
                      src="/img/plus.svg"
                      alt="remove"
                      width={11}
                      height={11}
                    />
                  </button>
                </div>
              ))}
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
                <img
                  className="cart-total__button-img"
                  src="/img/order-img.svg"
                  alt="order svg"
                  width="16"
                  heigh="14"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <img className="cart__empty-img" src="/img/empty.png" alt="empty" />
            <h2 className="cart__empty-title">The cart is empty</h2>
            <p className="cart__empty-text">Add at least one pair of sneakers to place an order.</p>
            <button className="cart__empty-button" onClick={onClose}>
              <img
                className="cart__empty-buttonImg"
                src="/img/arrow.svg"
                alt="arrow"
                width={14}
                height={12}
              />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
