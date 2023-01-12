import { useEffect, useState } from "react";
import axios from 'axios';

function Ajax() {
    let [users, setUsers] = useState([]);
    let [error, setError] = useState(false);

    // La plupart des requêtes AJAX vont se faire dans le cycle de vie
    useEffect(() => {
        console.log('AVANT');
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            // Le code suivant est appelé lorsque les données ont bien été récupérées
            console.log(response.data);
            // setUsers(response.data);
            // Pour tester, on peut ralentir l'API
            setTimeout(() => setUsers(response.data), 1000);
        }).catch((error) => {
            console.log(error);
            setError(true); // Erreur sur l'API pour afficher un message
        });
        console.log('APRES');
    }, []);

    return (
        <div>
            {error && <h2 style={{ color: 'red' }}>Notre API est down, revenez plus tard...</h2>}
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.name} habite à {user.address.city}</li>
                )}
            </ul>
        </div>
    );
}

export default Ajax;
