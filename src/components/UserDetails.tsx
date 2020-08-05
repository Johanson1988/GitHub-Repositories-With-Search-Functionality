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
            <h3>{username}</h3>
            <img src={imgSrc} alt="user-profile" />
            <Repositories username={username}/>
        </>
    )}
export default UserDetails;