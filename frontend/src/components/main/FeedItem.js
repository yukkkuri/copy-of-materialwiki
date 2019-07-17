import React, { Component } from 'react'

class FeedItem extends Component {

    render() {
            return (
                <div className='item brick rel anim'>
                    <img className='image' src={this.props.url} />        
                </div>
            );
    }
}


export default FeedItem