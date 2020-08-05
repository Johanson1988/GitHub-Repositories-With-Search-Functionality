import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import UserDetails from './../components/UserDetails';
import NotFound from './../components/NotFound';


import { getUsersData } from '../helpers/API';

type userObject = {
    login: string,
    imgSrc: string
};

const HomePage: React.FC<{}> = () => {
    
        const [userData, setUserData] = useState<userObject | null>({
            login: '',
            imgSrc: ''
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
                        <UserDetails
                            username={userData.login}
                            imgSrc={userData.imgSrc}
                        />
                    : null 
                : <NotFound />

            }
        </>
    )
}

export default HomePage;