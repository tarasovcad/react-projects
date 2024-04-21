import Card from "./components/Card/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";


const arr = [
  {
    title: 'Nike Blazer Mid Suede Sneakers', 
    price: 12900,
    imageUrl: "./img/sneakers/1.jpg"
  },
  {
    title: 'Nike Air Max 270 Sneakers', 
    price: 15600,
    imageUrl: "./img/sneakers/2.jpg"
  },
  {
    title: 'Nike Blazer Mid Suede Sneakers', 
    price: 8499,
    imageUrl: "./img/sneakers/3.jpg"
  },
  {
    title: 'Puma X Aka Boku Future Rider Sneakers', 
    price: 8999,
    imageUrl: "./img/sneakers/4.jpg"
  },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <div className="div"></div>
      <Header />
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
          {arr.map((obj) => 
            <Card 
              title= {obj.title}
              price = {obj.price}
              imageUrl = {obj.imageUrl}
              onClickFavourite = {() => console.log('Add in ..')}
              onClickAdd = {() => console.log(obj)}
            />
          )}
        </div>
      </div>
    </div>
  );

}

export default App;
