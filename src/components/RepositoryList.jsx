import RepositoryItem from './RepositoryItem'
import '../styles/Repositories.css'
import { useEffect, useState } from 'react';

export default function RepositoryList() {
    const [repositoryList, setRepositoryList] = useState([]);

    useEffect(() => {
            fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositoryList(data))
        }, []);

    return(
        <section className="repository-List">

            <h1>Lista de Repositórios</h1>
            {
                repositoryList.map((repository, index)=>{
                    return(
                        <ul>
                        <RepositoryItem repositor={repository} key={repository.name} />
                        </ul>
                    )
                })
            }
        </section>
    )
}