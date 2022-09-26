import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform4',
    description: 'forms in react',
    link: "https://github.com/unform/unform"

}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}