import React from "react";

/**
 * React Functional Component
 * Renders a searchbar to filter repositories.
 * PROPS:
 *  @param {function} handlefilter Callback function to update state
 *  in parent component: RepositoriesContainer.
 *  @param {string} value State property filter of parent component: RepositoriesContainer,
 *  is the value of the filter to filter repositories list.
 */

 type Props = {
    handleFilter: (e:React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const ReposSearchBar: React.FC<Props> = ({ handleFilter, value }) => 
        <>
            <div className="row searchbar" >
                <label htmlFor="repos-searchbar" style={{display: "none"}}>Repo's searchbar</label>
                <input
                    type="text"
                    data-testid="repos-searchbar"
                    id="repos-searchbar"
                    onChange={handleFilter}
                    value={value} 
                    placeholder="Type to filter repos"       
                />
            </div>
        </>

export default ReposSearchBar;