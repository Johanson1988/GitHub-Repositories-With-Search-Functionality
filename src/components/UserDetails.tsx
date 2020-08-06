import React from 'react';

/**
 * React Functional Component
 * Displays username and profile picture
 * PROPS:
 *  @param {object} userData Object with username and link to github profile picture
 *  in parent component: RepositoriesContainer.
 */

type Props = {
    imgSrc: string,
    username: string,
}

const UserDetails: React.FC<Props> = ({ imgSrc, username}) => 
        <>
            <div className="user-details-container" >
                <div className="user-details">
                    <img src={imgSrc} alt="user-profile" className="user-picture circle" />
                </div>
                <div className="user-details">
                    <h3 >{username}</h3>
                </div>

            </div>
        </>

export default UserDetails;