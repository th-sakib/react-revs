import React from "./react";
import { render } from "./react-dom";

import "./App.css";
import Card from "./components/Card";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              image={product.thumbnail}
            />
          );
        })}
      </div>,
      document.getElementById("root")
    );
  });
