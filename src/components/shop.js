import React from "react";
import Images from "../plants"

function Shop(props) { 
	return (
		<div>				
			<div className="home"> 
					<h1 className="title">Welcome To Green Plant Shop </h1>
					<p className="description">
						this is the place where you can find all kinds of Green Plants .
						check out the Plants on the Shop. 
					</p>
				</div>
				
			<div className="shop container">
				<div className="plant">
						<img src={Images.plant01} alt="plant01" />
						<p>Green Plant 01</p> 
						<p>45</p> 
					<div className="addToCart">
						<button onClick={props.handleClick} className="btn ATCbtn" >Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant02} alt="plant02" />
					<p>Green Plant 02</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant03} alt="plant03" />
					<p>Green Plant 03</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant04} alt="plant04" />
					<p>Green Plant 04</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>									
				<div className="plant">
					<img src={Images.plant05} alt="plant05" />
					<p>Green Plant 05</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant06} alt="plant06" />
					<p>Green Plant 06</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant07} alt="plant07" />
					<p>Green Plant 07</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>

				<div className="plant">
					<img src={Images.plant08} alt="plant08" />
					<p>Green Plant 08</p>
					<div className="addToCart">
						<button className="btn ATCbtn">Add to cart
						</button>
						<div className="increDcre">
							<span className="plus">
								+
							</span>
							<span className="minus">
								-
							</span>
						</div>
					</div>  
				</div>
			</div>
		</div>
	);	
}


export default Shop;
