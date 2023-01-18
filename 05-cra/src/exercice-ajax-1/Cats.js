import axios from 'axios';
import { useEffect, useState } from 'react';

// Pour écrire plus rapidement notre composant fonctionnel
export default function Cats() {
    let [cats, setCats] = useState([]);
    let fetchCats = () => {
        let url = 'https://api.thecatapi.com/v1/images/search?limit=10';
        axios.get(url).then(response => setCats(response.data));
    }

    useEffect(fetchCats, []);

    return (
        <div>
            {cats.map(cat =>
                <div key={cat.id}>
                    <img src={cat.url} width={100} />
                </div>
            )}
            <button onClick={fetchCats}>Autre</button>
        </div>
    );
}
