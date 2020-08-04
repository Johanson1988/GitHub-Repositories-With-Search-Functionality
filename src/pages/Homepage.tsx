import React, { useState } from "react";
import UserSearchBar from './../components/UserSearchBar';

const HomePage: React.FC<{}> = () => {

    const [username, setUserName] = useState('');

    const getUserName = (username: string):void => {
        setUserName(username);
    }

    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar findUser={getUserName} />
        </>
    )
}

export default HomePage;