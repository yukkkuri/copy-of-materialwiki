import React, { Component } from 'react'
import { Link } from "react-router-dom";

class FeedItem extends Component {



    render() {
        const { urls, id } = this.props.data;

        return (
            <div className='item brick rel anim'>
                <Link to={'/pin/'+id } className="nav-link default-link" title="go to your data dashboard" >
                    <img className='image' src={urls.regular} />
                </Link>
            </div>
        );
    }
}



export default FeedItem