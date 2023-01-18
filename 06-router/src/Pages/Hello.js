import { useParams } from 'react-router-dom';

function Hello() {
    let params = useParams(); // Pour récupérer les paramètres de la route

    return (
        <h1>Bonjour {params.name}</h1>
    );
}

export default Hello;
