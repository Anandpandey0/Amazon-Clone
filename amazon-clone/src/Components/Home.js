import React from "react";
import Product from "./extra/Product";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg"
          alt="container-pic"
        />
        <div className="home-row">
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
        </div>
        <div className="home-row">
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
        </div>
        <div className="home-row">
          <Product
            image="https://m.media-amazon.com/images/I/51uKHKagiCL._SX679_.jpg"
            title="Induction"
            price="10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
