import React from "react";
import Images from "../plants"

function Cart() {
	
	return (
		<div>
			<div className="cart container">			
				<div className="plant item">
					<img src={Images.plant01} alt="plant01" />
					<p>Green Plant 01</p>
					<div className="addToCart">
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div> 
					<button className="btn RIbtn">
						Remove Item
					</button> 
				</div> 
 
				<div className="btns cartBtns">
					<button className="btn clearCart">Clear Cart
					</button>
					<button className="btn checkout">Checkout
					</button>
				</div>
			</div>
		</div>
	);	
}


export default Cart;
