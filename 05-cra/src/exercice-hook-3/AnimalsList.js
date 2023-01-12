import { useState } from "react";

/**
 * Dispose d'un state animals mis à jour avec setAnimals
 * animals est un tableau de chaîne de caractères, vide par défaut
 * Le composant affiche la liste des animaux et un formulaire.
 * Devant chaque animal, afficher un bouton "Supprimer" qui permettra de supprimer un animal
 * Le formulaire propose d'ajouter un nouvel animal à la liste
 */
function AnimalsList() {
    let [animals, setAnimals] = useState([]);
    let [name, setName] = useState('');

    let handleAdd = (event) => {
        event.preventDefault();

        // animals.push(name);
        // setAnimals([ ...animals ]);

        // On peut faire le push et le set en même temps
        setAnimals([ ...animals, name ]);
        setName(''); // On change le name donc on vide le champ
    }

    let handleDelete = (index) => {
        // animals.splice(index, 1);
        // setAnimals([ ...animals ]);

        setAnimals(animals.filter((value, i) => i != index));
    }

    return (
        <div>
            <ul>
                {animals.map((animal, index) =>
                    <li key={index}>
                        <span>{animal}</span>
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>
                )}
            </ul>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={handleAdd}>Ajouter</button>
            </form>
        </div>
    );
}

export default AnimalsList;
