import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';
import { getUsersData } from '../helpers/API';

const HomePage: React.FC<{}> = () => {
    // eslint-disable-next-line
    const [username, setUserName] = useState('');
    const [userData, setUserData] = useState(null);

    const getUserName = async(username: string) => {
        if (username.length > 4) {
            setUserName(username);
            const userData = await getUsersData(username);
            setUserData(userData);
        }
    }

    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar findUser={getUserName} />
        </>
    )
}

export default HomePage;