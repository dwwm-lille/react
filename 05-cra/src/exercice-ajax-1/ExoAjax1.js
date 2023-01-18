import axios from 'axios';
import { useEffect, useState } from 'react';
import Cats from './Cats';
import Photos from './Photos';
import Posts from './Posts';

function Example() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    let fetchUsers = () => {
        // Avec fetch pour les puristes
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        //   .then(response => setUsers(response));

        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data));
    };

    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
}

function ExoAjax1() {
    return (
        <div>
            <h2>AJAX Exercice</h2>
            <p>Voici un exemple où on va récupèrer des données sur une API en AJAX</p>
            <Example />

            <p>Créer un composant Posts qui va chercher des articles sur https://jsonplaceholder.typicode.com/posts</p>
            <p>Ajouter un bouton dans ce composant qui va chercher à nouveau les articles et les ajoute à la liste (Peu importe si on a des doublons)</p>
            <Posts />

            <p>Créer un composant Cats qui va afficher 10 images aléatoires de chats avec l'API https://developers.thecatapi.com</p>
            <Cats />

            <p>Créer un composant Photos qui va chercher des images sur https://jsonplaceholder.typicode.com/photos</p>
            <p>Attention, on limitera le nombre de résultats à 10 par défaut (sur les 5000)</p>
            <p>Ajouter un bouton dans ce composant qui va chercher les 10 prochaines photos et les ajoute à la liste</p>
            <Photos />
        </div>
    );
}

export default ExoAjax1;
