import React from "react";

const ReposSearchBar: React.FC<{}> = () => {
    
    return(
        <>
            <label style={{display: "none"}} htmlFor="repos-searchbar"></label>
            <input data-testid="repos-searchbar" id="repos-searchbar" />
        </>
    )
}

export default ReposSearchBar;