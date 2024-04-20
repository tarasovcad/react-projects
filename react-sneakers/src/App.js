
function App() {
  return (
    <div className="wrapper">

      <header className="header">
        <div className="header__left">
          <img className="header__left-img" src="/img/logo.png" alt="#" width={40} height={40}/>
          <div className="header__left-info">
            <h3 className="header__left-title">React Sneakers</h3>
            <p className="header__left-descr">The best sneakers's store</p>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__right-cart">
            <img className="header__right-img" src="/img/cart.svg" alt="#" />
            <span className="header__right-carttext header__right-carttext--active">1205 cad</span>
            </li>
          <li className="header__right-user">
            <img className="header__right-img" src="/img/user.svg" alt="#" />
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
          <div className="card">
              <img className="card__heart" src="/img/heart-unliked.svg" alt="Unliked" />
              <img src="/img/sneakers/1.jpg" alt="" width={133} height={112}/>
              <h5 className="card__title">Men's Nike Blazer Mid Suede Sneakers</h5>
              <div className="carfd__bottom">
                <div>
                  <p className="card__text">Price:</p>
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
                  <b className="card__price">12 900 $</b>
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
