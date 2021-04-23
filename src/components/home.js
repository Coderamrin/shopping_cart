import React from "react";
import Images from "../plants";


function Home() { 
	return (
		<div className="container">
			<div className="home"> 
				<h1 className="title">Welcome To Green Plant Shop
				</h1>
				<p className="description">
					this is the place where you can find all kinds of Green Plants .
					check out the Plants on the Shop. 
				</p>

				<img className="homeImg" src={Images.bg2}/>	  
			</div>
		</div>
	);	
}


export default Home;
