import { useState } from 'react';

/**
 * State : age, mis à jour avec setAge
 * Affiche l'âge et un formulaire permettant de changer l'âge
 * Si l'âge est inférieur à 18, afficher "Wow, interdit aux mineurs ici !".
 */
function AgeField() {
    let [age, setAge] = useState('');

    return (
        <div>
            {age && age < 18 && <p>Wow, interdit aux mineurs ici !</p>}
            <label>Âge</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
    );
}

export default AgeField;
