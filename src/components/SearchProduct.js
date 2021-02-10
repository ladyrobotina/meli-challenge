import React, { useState, useEffect } from "react";
import "./SearchProduct.css";
import { useLocation, Link } from "react-router-dom";

import api from "../api";
import ListProducts from "./ListProducts";

function SearchProduct({response}) {
    const [results, setResults] = useState([]);
    const [isLoading, toggleLoading] = useState(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

     useEffect(() => {
         toggleLoading(true);
           
         api.search(query)
         .then((results) => {
             console.log(results);
             setResults(results);
             toggleLoading(false);
     });
     }, [query]);
    
     
  if (isLoading) return <span>Cargando</span>;
    return (
        <div className="searchproduct">
            <ListProducts response={results} />
            
        </div>
    )
}

export default SearchProduct
