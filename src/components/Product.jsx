import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const product = ({ product }) => {
  return (
    <div className="col-md-3 m-3 p-3 border text-start" >
      <div>
        <Link to={`product/${product.id}`} exact="true" style={{ textDecoration: 'none' }}>
          <img className="img-fluid" src={product.image} alt="" />
          <h1>{product.name}</h1>
          <ReactStars
          style={{color:"orange"}}
            count={5}
            value={product.rating}
            onChange={product.rating}
            size={24}
            edit={false}
            color1={'gray'}
            color2={"#ffd700"}
          />
          <h1>Price : {product.price}</h1>
        </Link>
      </div>
    </div>
  );
};

export default product;
