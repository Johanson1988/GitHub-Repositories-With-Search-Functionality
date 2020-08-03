import React from "react";
import UserSearchBar from './../components/UserSearchBar';

const HomePage: React.FC<{}> = () => {

    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <UserSearchBar />
        </>
    )
}

export default HomePage;