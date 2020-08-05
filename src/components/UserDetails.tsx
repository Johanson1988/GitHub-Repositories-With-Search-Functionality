import React from 'react';

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
            <h4>Repositories</h4>
        </>
    )}
export default UserDetails;