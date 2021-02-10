import React, { useState, useEffect } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";

import axios from "axios";


function Product() {
    const [result, setResult] = useState({});
    const [isLoading, loading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
      loading(true);
  
      axios.get(`http://localhost:3001/api/items/${id}`)
      .then(response => {
      setResult(response.data)
      loading(false);
    })
    .catch((data) => console.log(data))
      
    }, [id]);
    console.log(result);
  
    if (isLoading) return <span>Cargando</span>;

    return (
        <div className="product">
            <h1>{result.title}</h1>
            <img className="imgProduct" src={result.thumbnail} alt="" />
            <h2>
            {result.price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS"
            })}
            </h2>
        </div>
    )
}

export default Product