import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import { getUsersData } from '../helpers/API';

const HomePage: React.FC<{}> = () => {
    // eslint-disable-next-line
    const [username, setUserName] = useState('');
    const [userData, setUserData] = useState({login: ''});

    const getUserName = async(username: string) => {
        if (username.length > 3) {
            setUserName(username);
            const userData = await getUsersData(username);
            setUserData(userData);
        }
    }
    console.log(userData);
    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar findUser={getUserName} />
            {
                username ? userData ? <h3>{userData.login}</h3> : <h3>404 NOT FOUND</h3> : null
            }
        </>
    )
}

export default HomePage;