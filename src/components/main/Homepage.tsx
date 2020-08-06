import React, { useState, useEffect } from "react";

/**
 * React Functional Component
 * Main Component of the app. If a username is valid, renders userdetails and repos.
 * Otherwise, it renders 404 Not found component
 * PROPS:
 *  NO PROPS
 */

/** Import Components */
import UserSearchBar from '../user/UserSearchBar';
import UserDetails from '../user/UserDetails';
import NotFound from '../layout/NotFound';
import Repositories from '../repositories/RepositoriesContainer';

/** Import API functions */
import { getUsersData } from '../../helpers/API';

type userObject = {
    login: string,
    avatarUrl: string,
    repositories: { nodes: any[] }
};

const HomePage: React.FC<{}> = () => {
    
        const [userData, setUserData] = useState<userObject | null>({
            login: '',
            avatarUrl: '',
            repositories: { nodes: [] }
        });

    const getUserName = async(username: string) => {

        const userData:userObject = await getUsersData(username);
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
                        
                        <Repositories repositories={userData.repositories.nodes}/>
                    </>
                    : null 
                : <NotFound />

            }
        </>
    )
}

export default HomePage;