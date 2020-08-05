import React from "react";

type Props = {
    name: string,
    description: string,
}

const RepoListElement: React.FC<Props> = ({ name, description }) => {
    return(
        <li className={"repo-li-element"} >
            <p>{name}</p>
            <span>{description}</span>
        </li>
    )
}

export default RepoListElement;