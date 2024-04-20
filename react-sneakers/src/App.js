
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div className="drawer__bottom">
          <h3 className="drawer__title">Cart</h3>
          <button className="close-button">
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
      <header className="header">
        <div className="header__left">
          <img className="header__left-img" src="/img/logo.png" alt="#" width={40} height={40}/>
          <div className="header__left-info">
            <h3 className="header__left-title">React Sneakers</h3>
            <p className="header__left-descr">The best sneakers's store</p>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__right-card">
            <img className="header__right-img" src="/img/cart.svg" alt="image" />
            <span className="header__right-cardtext header__right-cardtext--active">1205 cad</span>
            </li>
          <li className="header__right-user">
            <img className="header__right-img" src="/img/user.svg" alt="image" />
            <span className="header__right-usertext">User</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="content__top">
          <h1 className="content__title">All sneakers</h1>
          <form className="content__search-block">
          <input className="content__search-input" placeholder="Search..." />
          <button className="content__search-button">
            <img className="content__search-svg" src="/img/search.svg" alt="Search" width={14.24} height={14.24}/>
          </button>
        </form>
        </div>

        <div className="content__wrapper">
          {/* card */}
          <div className="card">
              <img className="card__heart" src="/img/heart-unliked.svg" alt="Unliked" />
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>
          <div className="card">
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="card__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price price">12 900 $</b>
                </div>
                <button className="card__button">
                  <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
                </button>
              </div>
            </div>

        </div>
      </div>
    </div>
  );

}

export default App;
