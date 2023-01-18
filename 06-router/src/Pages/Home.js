import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    let [users, setUsers] = useState([]);
    let fetchUsers = () => {
        axios.get('https://randomuser.me/api/?results=10&seed=abc').then(response => {
           setUsers(response.data.results);
        });
    }

    useEffect(() => fetchUsers(), []);

    return (
        <div className="container">
            <h1>Accueil</h1>

            <div className="flex user-list">
                {users.map(user =>
                    <article key={user.login.uuid}>
                        <img src={user.picture.large} alt="" />
                        <h5>{user.name.first} {user.name.last}</h5>
                        <Link to={`/utilisateur/${user.login.username}`}>
                            <button type="button">Voir</button>
                        </Link>
                    </article>
                )}
            </div>
        </div>
    )
}

export default Home;
