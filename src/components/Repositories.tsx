import React, { useEffect, useState } from "react";

import { getReposData } from './../helpers/API';

import ReposSearchBar from './ReposSearchBar';

type Props = { username: string };

type ReposArray = { name: string, description: string}[];

const Repositories: React.FC<Props> = ({ username }) => {

    const [reposList, setReposList] = useState<ReposArray | null>(null);
    const [filter, setFilter] = useState<string>('');

    const handleFilter = (e:React.FormEvent<HTMLInputElement>):void => {
        setFilter(e.currentTarget.value);
    }

    useEffect(():void => {
        console.log(filter);
    })

    useEffect(():void => {
        
        // Using an IIFE
        (async function anyNameFunction() {
            setReposList(await getReposData(username));
      })();

    // eslint-disable-next-line    
    }, []);

    return(
        <>
            {Array.isArray(reposList) && <h4>Repositories</h4>}
            {Array.isArray(reposList) && <ReposSearchBar handleFilter={handleFilter} value={filter} />}
            <ul data-testid="repos-container">
            {
                Array.isArray(reposList) && reposList.filter(repoElement => 
                    repoElement.name.toLowerCase().includes(filter.toLowerCase())
                ).map((repoElement, index) => 
                
                    <li key={index} className={"repo-li-element"} >
                        <p>{repoElement.name}</p>
                        <span>{repoElement.description}</span>
                    </li>
                )
            }
            </ul>
        </>
    )

}

export default Repositories;