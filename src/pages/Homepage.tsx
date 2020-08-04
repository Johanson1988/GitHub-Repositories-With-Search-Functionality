import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import { getUsersData } from '../helpers/API';

const HomePage: React.FC<{}> = () => {
    // eslint-disable-next-line
        const [userData, setUserData] = useState({login: ''});

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
                userData ? userData.login ? <h3>{userData.login}</h3> : null : <h3>404 NOT FOUND</h3>
                

            }
            </section>
        </>
    )
}

export default HomePage;