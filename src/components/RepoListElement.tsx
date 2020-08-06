import React from "react";

type Props = {
    name: string,
    description: string,
}

const RepoListElement: React.FC<Props> = ({ name, description }) => {
    return(
        <li className="repo-li-element card-panel teal" >
            <p className="white-text">{name}</p>
            <span className="white-text">{description}</span>
        </li>
    )
}

export default RepoListElement;