import React from "react";
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
  return (
    <div className="App">
    	<Router>
    		<Header/>
    		<Switch>
    			<Route exact path="/" component={Home}/>
    			<Route exact path="/shop" component={Shop}/>
    			<Route exact path="/cart" component={Cart}/>  
    		</Switch>
    		<Footer/> 	
    	</Router>
       
    </div>
  );
}

export default App;
