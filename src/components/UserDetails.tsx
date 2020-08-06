import React from 'react';

import Repositories from './Repositories';

type Props = {
    imgSrc: string,
    username: string,
}

const UserDetails: React.FC<Props> = ({ imgSrc, username}) => {
    console.log('USERNAME: ', username)
    return (
        <>
            <div className="user-details-container" >
                <div className="user-details">
                    <img src={imgSrc} alt="user-profile" className="user-picture circle" />
                </div>
                <div className="user-details">
                    <h3 >{username}</h3>
                </div>

            </div>
            <Repositories username={username}/>
        </>
    )}
export default UserDetails;