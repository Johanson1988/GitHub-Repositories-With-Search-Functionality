import React, { useState } from "react";

/**
 * React Functional Component
 * Renders a form with a text input to introduce username. Once the form is
 * submitted, callback from parent component is launched to make an API call
 * to get user data.
 * PROPS:
 *  @param {function} findUser Callback function to trigger API call in parent component
 *  passing username introduced by the user.
 */

type Props = {
    findUser: (username:string) => void
}

const UserSearchBar: React.FC<Props> = ({ findUser }) => {

    const [username, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        findUser(username);
    }

    return(
        <form onSubmit={handleSubmit} data-testid="user-searchbar" className="searchbar row">
            <label htmlFor="user-searchbar">Introduce a Github username:</label>
            <input
                type="text"
                id="user-searchbar"
                value={username}
                placeholder="Press ENTER or hit Find User"
                onChange={ (
                    e: React.ChangeEvent<HTMLInputElement>,
                ): void => setUserName(e.target.value) }
            />
            <button type="submit" className="btn waves-effect waves-light">Find User</button>
        </form>
    );
}

export default UserSearchBar;

//Ahora tengo que poner que cuando presionas ENTER hace el API call
//  el test comprueba que el nombre de usuario recibido es el mismo que se introduce
//si lo que recibes está empty tiene que aparecer el componente 404
