import React, { Component } from 'react'
import './navbar.css'



class Navbar extends Component {

	baseurl = ""
	render() {
		return (
			<React.Fragment>
				<div className="header fixed">
					<div className="container">
						<a href={"#"} className="logl abs anim">
							<img src="" className="abs" />
						</a>
						<div className="searchbox abs">
							<input type="text" value="" placeholder="search" className="query bl s15" />
							<button className="send abs icon-search" title="search"></button>
						</div>
						<ul className="nav ibl abs">
							<li>
								<a href="/" className="bl s15 noul">Home</a>
							</li>
							<li>
								<a href="/user/0" className="bl s15 noul fa fa-user-circle"></a>
							</li>
							<li>
								<a href="#" className="bl s15 noul fa fa-plus"><div className="counter abs s12">9+</div></a>
							</li>

						</ul>
					</div>
				</div>
				<div className="hclr rel"></div>
			</React.Fragment>
		);
	}
}


export default Navbar