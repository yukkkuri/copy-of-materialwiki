import React, { Component } from 'react'
<<<<<<< HEAD

class FeedItem extends Component {

    handleChange = () => {
        this.props.handleStateChange(this.props.data.id);
    }
    render() {
        const { urls } = this.props.data;
        return (
            <div className='item brick rel anim'>
                <div className="nav-link default-link" title="go to your data dashboard" data-toggle="modal" data-target="#introModal" onClick={this.handleChange}>
                    <img className='image thumbnail' src={urls.regular} />
                </div>
=======
import { Link } from "react-router-dom";

class FeedItem extends Component {



    render() {
        const { urls, id } = this.props.data;

        return (
            <div className='item brick rel anim'>
                <Link to={'/pin/'+id } className="nav-link default-link" title="go to your data dashboard" >
                    <img className='image' src={urls.regular} />
                </Link>
>>>>>>> 337a362cbd744fe3fb7cf0e15e0bdcf238366f26
            </div>
        );
    }
}

<<<<<<< HEAD
=======


>>>>>>> 337a362cbd744fe3fb7cf0e15e0bdcf238366f26
export default FeedItem