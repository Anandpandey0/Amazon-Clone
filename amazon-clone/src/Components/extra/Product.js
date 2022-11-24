import React from "react";
import "./Product.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi odio
          non quaerat.
        </p>
        <p className="product-price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>

      <div className="product-image-container">
        <img className="product-image" src={props.image} alt="product" />
      </div>
      <div className="product-button">
        <button>
          <FavoriteBorderIcon />
          wishist
        </button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
