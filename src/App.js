import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";

function App() {
  const [updateCart, setUpdateCart] = useState(0);
  const [addItem, setAdditem] = useState([]);

  function handleClick(e) {
    setUpdateCart(updateCart + 1);

    const plant = e.target.parentNode.parentNode.childNodes;
    addItem.push({
        name: plant[1].textContent,
        price: plant[2].textContent
        }); 
  }

  return (
    <div className="App">
    	<Router>
    		<Header updateCart={updateCart}  />
    		<Switch>
    			<Route exact path="/shopping_cart" component={Home}/>
    			<Route exact path="/shop" render={(props) => <Shop {...props} handleClick={handleClick} /> } />
    			<Route exact path="/cart" render={(props) => <Cart {...props} addItem={addItem} setupdateCart={setUpdateCart} updateCart={updateCart} setaddItem={setAdditem} /> } />  
    		</Switch> 
    	</Router>  
    </div>
  );
}

export default App;
     