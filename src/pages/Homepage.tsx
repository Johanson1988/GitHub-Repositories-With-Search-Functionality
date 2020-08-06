import React, { useState } from "react";

/**
 * React Functional Component
 * Main Component of the app. If a username is valid, renders userdetails and repos.
 * Otherwise, it renders 404 Not found component
 * PROPS:
 *  NO PROPS
 */

/** Import Components */
import UserSearchBar from './../components/UserSearchBar';
import UserDetails from './../components/UserDetails';
import NotFound from './../components/NotFound';
import Repositories from './../components/RepositoriesContainer';

/** Import API functions */
import { getUsersData } from '../helpers/API';

type userObject = {
    login: string,
    avatarUrl: string
};

const HomePage: React.FC<{}> = () => {
    
        const [userData, setUserData] = useState<userObject | null>({
            login: '',
            avatarUrl: ''
        });

    const getUserName = async(username: string) => {

        const userData:userObject = await getUsersData(username);
        console.log(userData);
        
        setUserData(userData);
    }
    return(
        <>
            <UserSearchBar findUser={getUserName} />
            {
                userData ?
                    userData.login ?
                    <>
                        <UserDetails
                            username={userData.login}
                            imgSrc={userData.avatarUrl}
                        /> 
                        
                        <Repositories username={userData.login}/>
                    </>
                    : null 
                : <NotFound />

            }
        </>
    )
}

export default HomePage;