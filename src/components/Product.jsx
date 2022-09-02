import React from "react";
import { Link } from "react-router-dom";

const product = ({ product }) => {
  return (
    <div className="col-md-3 m-5 p-3 border">
      <div>
        <Link to={`product/${product.id}`} exact="true" >
          <img className="img-fluid" src={product.image} alt="" />
          <h1>{product.name}</h1>
          <h1>Rating : {product.rating}</h1>
          <h1>Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  );
};

export default product;
