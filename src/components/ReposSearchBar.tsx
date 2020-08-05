import React from "react";

type Props = {
    handleFilter: (e:React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const ReposSearchBar: React.FC<Props> = ({ handleFilter, value }) => {
    
    return(
        <>
            <label style={{color: "red"}} htmlFor="repos-searchbar">Repo's searchbar</label>
            <input
                type="text"
                data-testid="repos-searchbar"
                id="repos-searchbar"
                onChange={handleFilter}
                value={value} 
                placeholder="Type to filter repos"
            />
        </>
    )
}

export default ReposSearchBar;