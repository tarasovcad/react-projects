export function Header() {
    return (
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
                    <span className="header__right-cardtext header__right-cardtext--active">1205 $</span>
                    </li>
                <li className="header__right-user">
                    <img className="header__right-img" src="/img/user.svg" alt="image" />
                    <span className="header__right-usertext">User</span>
                </li>
            </ul>
        </header>
    )
}
