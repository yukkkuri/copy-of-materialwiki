//this component shows websites collection of the logged-in user
import React from 'react'
import FeedList from './FeedList'
import UploadModal from './modals/UploadModal'


const Home = (props) => {
    return (
        < >
                <FeedList />
                <button id="upload-button" data-toggle="modal" data-target="#uploadModal">
                    <span>+</span>
                </button>
                <UploadModal />

        </>
    );

}

export default Home