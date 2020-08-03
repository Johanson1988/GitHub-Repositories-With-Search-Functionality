import React from "react";

const HomePage: React.FC<{}> = () => {
    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <form>
                <label htmlFor="user-searchbar">Introduce a Github username:</label>
                <input type="text" id="user-searchbar"/>
            </form>
        </>
    )
}

export default HomePage;