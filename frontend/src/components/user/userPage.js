//this component shows websites collection of the logged-in user
import FeedList from '../main/FeedList'
import UploadModal from '../main/modals/UploadModal'
import React, { Component } from 'react'
import UserInfo from './userInfo'

class UserPage extends Component {

    state = {
        imgUrl: "https://api.unsplash.com/photos/?client_id=66d4c29b16aa566253b58f4519b08355594d5e53a660cf28844c8021ac94874c",
        userInfo: {
            name: "user",
            profile: "this is a random user."
        }
    }
    render() {
        return (
            < >
                <UserInfo userInfo={this.state.userInfo}></UserInfo>
                <div className="row">
                    <div className="col">
                        <FeedList imgUrl={this.state.imgUrl} />
                    </div>
                </div>
                <button id="upload-button" data-toggle="modal" data-target="#uploadModal">
                    <span className="fa fa-plus"></span>
                </button>
                <UploadModal />

            </>
        );
    }
}

export default UserPage