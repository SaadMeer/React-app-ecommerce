import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

export default function Productdescscreen() {

  const { id } = useParams();

  const product = products.find(product => product.id == id);
  // const productid = match.params.id;

  return (
    <div>
      
      <div className="row">
        <div className="col-md-6">
          <div className="card p-5 m-2">
            <h1>{product.name}</h1>
            <img src={product.image} className="img-fluid product_img" alt="product" />
            <p>{product.description}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

// export default Productdescscreen;
