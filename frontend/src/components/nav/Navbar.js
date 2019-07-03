import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'
// import icons from 'glyphicons'


class Navbar extends Component {


	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
					<div className='container'>
						<Link to='/' className='navbar-brand default-link' href="#">MaterialWiki.
						</Link>

						<div className="navbar-collapse justify-content-end" >
							<ul className='navbar-nav'>
								<li className='nav-item'><NavLink className="nav-link default-link" to='/user-signup'>SignUp</NavLink> </li>
								<li className='nav-item'><NavLink className="nav-link default-link" to='/user-signin'>Login</NavLink> </li>
							</ul>
						</div>
						<Link className="modal-toggle" to="#" title="how to?"><strong>?</strong></Link>

					</div>
				</nav>
			</div>
		);
	}
}


export default Navbar