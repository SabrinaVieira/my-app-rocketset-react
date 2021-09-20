export default function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repositor.name}</strong>
            <p>{props.repositor.description}</p>
            <a href={props.repositor.html_url}>Acessar repositorio</a>
        </li>
    )
}