import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import UserDetails from './../components/UserDetails';
import NotFound from './../components/NotFound';


import { getUsersData } from '../helpers/API';



const HomePage: React.FC<{}> = () => {
    // eslint-disable-next-line
        const [userData, setUserData] = useState({login: '', avatar_url:''});

    const getUserName = async(username: string) => {

        const userData = await getUsersData(username);
        
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
                            imgSrc={userData.avatar_url}
                        />
                    : null 
                : <NotFound />
                

            }
            </section>
        </>
    )
}

export default HomePage;