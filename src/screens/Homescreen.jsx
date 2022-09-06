import React, { useEffect, useState } from "react";
import axios from 'axios'
import Product from "../components/Product"



const Homescreen = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
        axios.get('/api/products/getallproducts').then(res=> {
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        
      </div>
    </div>
  );
};

export default Homescreen;
