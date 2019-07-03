//this component shows websites collection of the logged-in user
import React from 'react'
import Feed from './Feed'

const Home = (props) => {

    return (
        <div className="container">
            <div className='h1_place_holder'>
            </div>

            <div className="row justify-content-center">
                <div className="col-8">
                <Feed />
                </div>
            </div>
        </div>
    );

}

export default Home