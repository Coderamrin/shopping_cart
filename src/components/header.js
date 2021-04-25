import React from "react";
import {Link} from "react-router-dom"; 
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
	
	const cart = <FontAwesomeIcon icon={faShoppingCart} />     

	return (
		<header>
			<div className="container headerContent">
				<div className="logo">
					<Link to="/">
						Green Plant Shop
					</Link> 
				</div>
				<nav>
					<Link to="/shopping_cart">
						<li>Home</li>
					</Link>

					<Link to="/shop">
						<li>Shop</li>
					</Link>

					<Link to="/cart">
						<li>
							{cart} 
							<span className="cartCount">
								{props.updateCart}
							</span> 
						</li> 
					</Link>				
				</nav>				
			</div>
		</header>
	);	
}


export default Header;
