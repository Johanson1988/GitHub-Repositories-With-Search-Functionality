import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import { getUsersData } from '../helpers/API';

const HomePage: React.FC<{}> = () => {
    // eslint-disable-next-line
        const [userData, setUserData] = useState({login: ''});

    const getUserName = async(username: string) => {
        if (username.length > 3) {
            
            const userData = await getUsersData(username);
            
            setUserData(userData);
            console.log("_USERDATA: ", userData, "_USERNAME: ", username);
        }
    }
    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar findUser={getUserName} />
            <section data-testid="user-container">
            {
                userData.login ? <h3>{userData.login}</h3> : <h3>404 NOT FOUND</h3>
            }
            </section>
        </>
    )
}

export default HomePage;