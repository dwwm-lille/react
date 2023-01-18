import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
    let params = useParams();
    let [user, setUser] = useState();
    let fetchUser = () => {
        axios.get('https://randomuser.me/api/?results=10&seed=abc').then(response => {
            let users = response.data.results; // [..., ..., ...]
            // On va chercher l'utilisateur dont le pseudo correspond à ce qu'on a dans l'URL
            let user = users.find(user => user.login.username == params.id);

            setUser(user);
        });
    }

    useEffect(() => fetchUser(), []);

    // On affiche une 404 si l'utilisateur n'a pas été trouvé
    if (!user) {
        return <h1>404</h1>
    }

    return (
        <div className="flex user-single">
            <div>
                <img width={300} src={user.picture.large} alt="" />
            </div>
            <div>
                <article>
                    <h2>{user.name.first} {user.name.last}</h2>
                    <p>{user.location.city}, {user.location.country}</p>
                    <p>{user.dob.age} ans</p>
                </article>
            </div>
        </div>
    )
}

export default User;
