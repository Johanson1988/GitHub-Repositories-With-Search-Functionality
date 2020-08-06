import React from "react";

type Props = {
    handleFilter: (e:React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const ReposSearchBar: React.FC<Props> = ({ handleFilter, value }) => {
    
    return(
        <>
            <div className="row searchbar" style={{border: "2px solid red"}}>
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
    )
}

export default ReposSearchBar;