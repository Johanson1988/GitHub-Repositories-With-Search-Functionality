import React, { useState } from "react";

const UserSearchBar: React.FC<{}> = () => {

    const [username, setUserName] = useState('');

    return(
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
    );
}

export default UserSearchBar;

//Ahora tengo que poner que cuando presionas ENTER hace el API call
//  el test comprueba que el nombre de usuario recibido es el mismo que se introduce
//si lo que recibes está empty tiene que aparecer el componente 404
