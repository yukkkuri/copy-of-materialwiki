import React, { Component } from 'react'

import $ from "jquery"
import axios from 'axios'


//number of feed items to load each time
const pageLimit = 20;



class PinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
               itemList: [],
            loading: false,
            resultUrls: []
 };
       
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className='pinpage-background'>
                <div className='pinbox'>

                </div>
            </div>
        );
    }
}


export default PinPage