import { useState } from "react";

// @todo corriger
function Example() {
    let [cats, setCats] = useState([
        { type: 'Blanc', name: 'Bianca' },
        { type: 'Noir', name: 'Mina' },
    ]);
    let [type, setType] = useState('Tout');

    return (
        <div>
            <button onClick={() => setType('Blanc')}>Blanc</button>
            <button onClick={() => setType('Noir')}>Noir</button>
            <button onClick={() => setType('Tout')}>Tout</button>
            <ul>
                {cats.filter((cat) => cat.type == type || type == 'Tout').map((cat, index) => (
                    <li key={index}>{cat.name}</li>
                ))}
            </ul>
        </div>
    );
}

function ExoAjax3() {
    return (
        <div>
            <p>Voici un exemple où on va filtrer un tableau</p>
            <Example />

            <p>Créer un composant Todos qui va chercher des todos sur https://jsonplaceholder.typicode.com/todos</p>
            <p>Afficher le nombre de todos à faire.</p>
            <p>Ajouter un bouton dans ce composant qui va nous permettre d'afficher les todos complétées ou non (toggle).</p>
            <p>Ajouter un autre bouton permettant d'afficher à nouveau toutes les todos.</p>
        </div>
    );
}

export default ExoAjax3;
