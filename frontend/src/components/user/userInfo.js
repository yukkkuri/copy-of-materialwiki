import React from 'react'
import './userInfo.css'

const UserInfo = function (props) {

    const { name, profile } = props.userInfo
    return (
        < >
            
                <div className="row user-info__row">
                    <div className="col-8 user-info__row__name">
                        <h1>{name}</h1>
                        <br/>
                        <p>{profile}</p>
                    </div>
                    <div className="col-4 user-info__row__photo">
                        <span className="fa fa-user-circle fa-10x"></span>
                    </div>
                </div>
            


        </>
    );

}

export default UserInfo