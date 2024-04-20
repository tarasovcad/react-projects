export function Card(props) {
    console.log(props.title)
    return (
        <div className="card">
            <img className="card__heart" src="/img/heart-unliked.svg" alt="" />
            <img src={props.imageUrl} alt="" width={133} height={112}/>
            <h5 className="card__title">{props.title}</h5>
            <div className="card__bottom">
            <div>
                <p className="card__text">Price:</p>
                <b className="card__price price price">{props.price} $</b>
            </div>
            <button className="card__button">
                <img src="/img/plus.svg" alt="plus" width={11} height={11}/>
            </button>
            </div>
        </div>
    )
}
