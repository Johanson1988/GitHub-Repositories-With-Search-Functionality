import React, { useState } from "react";

const HomePage: React.FC<{}> = () => {

    const [username, setUserName] = useState('');

    return(
        <>
            <h1 data-testid="homepage__title">Welcome</h1>

            <form>
                <label htmlFor="user-searchbar">Introduce a Github username:</label>
                <input
                    type="text"
                    id="user-searchbar"
                    value={username}
                    placeholder="Introduce a Github Username"
                    onChange={ (
                        e: React.ChangeEvent<HTMLInputElement>,
                    ): void => setUserName(e.target.value) }

                />
            </form>
        </>
    )
}

export default HomePage;