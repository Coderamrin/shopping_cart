import React from "react";
import CartItems from "./cartItem";

function Cart(props) {

	function clearCart() {
		props.setaddItem([]);
		props.setupdateCart(0);
	}

	function checkout() {
		props.setaddItem([]);
		props.setupdateCart(0);
		let item = document.querySelector(".Items");
		item.textContent = "product will be at your door next morning...."
	}

	function handleClick(e) {
		const index = e.target.id;
		props.addItem.splice(index, 1);
		props.setupdateCart(props.updateCart - 1);
	}

	return ( 
		<div>
			<div className="cart container">
				<div className="Items"> 
					{
						props.addItem.map((item, index) => (
							<CartItems name={item.name} price={item.price} id={index} removeItem={handleClick} /> 
						))
					}	
				</div>	
				<div className="btns cartBtns">
					<button onClick={clearCart} className="btn clearCart">Clear Cart
					</button>
					<button onClick={checkout} className="btn checkout">Checkout
					</button>
				</div>
			</div>
		</div>
	);	
}


export default Cart;
