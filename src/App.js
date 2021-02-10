import React from "react";
import "./App.css";
import { Switch, Router, Route, useHistory } from "react-router-dom";

import SearchProduct from "./components/SearchProduct";
import Product from "./components/Product";
import Navbar from "./components/NavBar";


function App() {
  const history = useHistory();

  function onSearch(query) {
    history.push(`/?query=${query}`);
  }

  return (
    
    <div className="app">
    <Navbar onSearch={onSearch} />
      <Switch>
        <Route exact path="/:id" component={Product} />
        <Route exact path="/" component={SearchProduct} />
      </Switch>
    </div>
    
  );
}

export default App