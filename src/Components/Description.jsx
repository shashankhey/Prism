import React from "react";
import CartIcon from "./Icons/CartIcon";
import QuantityButton from "./QuantityButton";
import Rating from '@mui/material/Rating';

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant }) => {
  // const [value, setValue] = (2);
  return (
    <section className="description">
      
      <p className="pre">sneaker company</p>
      <h1>Sneakers</h1>
      <p style={{color: "#ccc"}}>Free 2 day shipping 1 Year waranty</p>
      <Rating
        name="simple-controlled"
      />
      <p className="desc">
        Good Shoes
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <s>$250.00</s>
      </div>
      <div className="buttons">
        <QuantityButton onQuant={onQuant} onRemove={onRemove} onAdd={onAdd} />
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
