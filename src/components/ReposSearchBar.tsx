import React from "react";

type Props = {
    handleFilter: (e:React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const ReposSearchBar: React.FC<Props> = ({ handleFilter, value }) => {
    
    return(
        <>
            <label style={{display: "none"}} htmlFor="repos-searchbar"></label>
            <input data-testid="repos-searchbar" id="repos-searchbar" onChange={handleFilter} value={value} />
        </>
    )
}

export default ReposSearchBar;