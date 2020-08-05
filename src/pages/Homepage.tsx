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
        console.log("_USERDATA: ", userData, "_USERNAME: ", username);
    }
    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar findUser={getUserName} />
            <section data-testid="user-container">
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
            </section>
        </>
    )
}

export default HomePage;