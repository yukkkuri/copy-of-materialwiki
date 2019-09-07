import React, { Component } from 'react'
import FeedList from './FeedList'
import UploadModal from './modals/UploadModal'

class Home extends Component {
    state = {
        //itemList is the dom element of the feedItems, whenever the itemList change, the page re-renders.
        imgUrl: "https://api.unsplash.com/photos/?client_id=66d4c29b16aa566253b58f4519b08355594d5e53a660cf28844c8021ac94874c"
    }
    render() {
        return (
            < >
                <FeedList imgUrl={this.state.imgUrl} />
                <button id="upload-button" data-toggle="modal" data-target="#uploadModal">
                    <span className="fa fa-plus"></span>
                </button>
                <UploadModal />
            </>
        );
    }

}

export default Home