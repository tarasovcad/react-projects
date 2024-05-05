import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
export const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add top the cart
      </button>
    </div>
  );
};
