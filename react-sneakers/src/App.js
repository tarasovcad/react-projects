
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
        <h1 className="content__title">All sneakers</h1>

        <div className="card">
          <img src="" alt="" />
          <p></p>
          <div>
            <div>
              <span>Price:</span>
              <b>12 900 $</b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
  
      </div>
    </div>
  );

}

export default App;
