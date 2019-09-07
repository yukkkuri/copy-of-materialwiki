import React, { Component } from 'react'
import './feedItem.css'

class FeedItem extends Component {

    handleChange = () => {
        this.props.handleStateChange(this.props.data.id);
    }
    render() {
        const { urls } = this.props.data;
        return (
            <div className='item brick rel anim'>
                <div  title="image detail" data-toggle="modal" data-target="#pinModal" onClick={this.handleChange}>
                    <img className='image thumbnail' src={urls.regular} />
                </div>
            </div>
        );
    }
}

export default FeedItem