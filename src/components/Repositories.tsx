import React, { useEffect, useState } from "react";

import { getReposData } from './../helpers/API';
//Components
import ReposSearchBar from './ReposSearchBar';
import RepoListElement from './RepoListElement';

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
        setReposList(null);
        // Using an IIFE
        (async function anyNameFunction() {
            setReposList(await getReposData(username));
      })();
      setFilter('');

    // eslint-disable-next-line    
    },[username]);

    return(
        <>
            {Array.isArray(reposList) ? <h4>Repositories</h4> : <h4>Loading repos!!!</h4>}
            {Array.isArray(reposList) && <ReposSearchBar handleFilter={handleFilter} value={filter} />}
            <ul data-testid="repos-container">
            {
                Array.isArray(reposList) && reposList.filter(repoElement => 
                    repoElement.name.toLowerCase().includes(filter.toLowerCase())
                ).map((repoElement, index) => 
                
                    <RepoListElement key={index} name={repoElement.name} description={repoElement.description} />
                )
            }
            </ul>
        </>
    )

}

export default Repositories;