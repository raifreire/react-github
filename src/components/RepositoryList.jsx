import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    const [repositories, setrepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setrepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>lista de repositorios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem repository={repository} />
                })}

            </ul>
        </section>
    )
}