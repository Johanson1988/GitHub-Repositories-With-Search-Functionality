import React, { useEffect, useState } from "react";

import { getReposData } from './../helpers/API';

import ReposSearchBar from './ReposSearchBar';

type Props = { username: string };

type ReposArray = { name: string, description: string}[];

const Repositories: React.FC<Props> = ({ username }) => {

    const [reposList, setReposList] = useState<ReposArray | null>(null);

    useEffect(() => {
        // Using an IIFE
        (async function anyNameFunction() {
            
            setReposList(await getReposData(username));
      })();
    // eslint-disable-next-line    
    }, []);
    console.log(reposList)

    return(
        <>
        {Array.isArray(reposList) && <h4>Repositories</h4>}
        {Array.isArray(reposList) && <ReposSearchBar />}
        <ul data-testid="repos-container">
        {
            Array.isArray(reposList) && reposList.map((repoElement, index) => {
            return(
                <li key={index} className={"repo-li-element"} >{repoElement.name}</li>
            )
            })
        }
        </ul>
        </>
    )

}

export default Repositories;