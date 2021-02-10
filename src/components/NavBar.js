import React, { useState } from 'react';
import "./Navbar.css";

import { Link } from "react-router-dom";
import axios from "axios";

import SearchProduct from './SearchProduct';

function NavBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([])

  const handleInputChange = (e) => (
    setQuery(e.target.value)
  )

  

  return (
    <div>
      <div className="navbar">
      <Link to="/">
        <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__large_plus.png" alt="" />
      </Link>
      <div className="navbar_input">
        <input onChange={handleInputChange} name="query" />
        <button onClick={(e) => onSearch(query)} type="submit">
          <img src="https://icongr.am/clarity/search.svg?size=16&color=c0c0c0" alt="" />
        </button>
      </div>
      
    </div>
      {/* <SearchProduct response={response} /> */}
    </div>
  )
}

export default NavBar

