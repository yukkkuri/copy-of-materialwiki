import React, { Component } from 'react'

class FeedItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.placeholder === true) {
            return (
                <div className='item item-ph brick rel'>
                </div>
            );
        } else {
            return (
                <div className=""></div>
            );
        }
    }
}


export default FeedItem