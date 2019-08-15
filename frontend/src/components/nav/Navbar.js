import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'
// import icons from 'glyphicons'


class Navbar extends Component {

	baseurl=""
	render() {
		return (
			<React.Fragment>
			<div className="header fixed">
			<a href={"#"} className="logl abs anim">
			<img src = "" className="abs"/>
			</a>
				<div className="searchbox abs">
					<input type="text" value="" placeholder="search" className="query bl s15"/>
					<button className="send abs icon-search" title="search"></button>
				</div>
				<ul className="nav ibl abs">
					<li>
						<a href="#" className="bl s15 noul">Home</a>
					</li>
					<li>
						<a href={"#"+"following"} className="bl s15 noul">Following</a>
					</li>
					<li>
						<a href="#" className="bl ico s15 noul icon-message-square"></a>
					</li>
					<li>
						<a href="#" className="bl ico s15 noul icon-bell rel"><div className="counter abs s12">9+</div></a>
					</li>
					<li>
						<a href="#" className="bl ico s15 noul icon-more-horizontal"></a>
					</li>
				</ul>

			</div>
			<div className="hclr rel"></div>
			</React.Fragment>
		);
	}
}


export default Navbar