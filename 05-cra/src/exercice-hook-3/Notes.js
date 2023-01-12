import { useMemo, useState } from "react";

/**
 * Dispose d'un state notes, mis à jour avec setNotes
 * notes est un tableau d'entiers positifs, vide par défaut
 * Le composant affiche la liste des notes, ainsi que la moyenne des notes, et un formulaire
 * Le formulaire propose d'ajouter une nouvelle note à la liste en utilisant setNotes
 */
function Notes() {
    let [notes, setNotes] = useState([]);
    let [note, setNote] = useState(0);

    // useMemo permet de mettre de "côté" le résultat de la fonction
    // et cela appelle la fonction que si le tableau [notes] change
    let average = useMemo(() => {
        console.log('GO');
        let result = notes.reduce((sum, note) => sum + note, 0) / notes.length;

        return result.toFixed(2);
    }, [notes]);

    return (
        <div>
            {notes.length > 0 && <h1>Moyenne: {average}</h1>}
            <ul>
                {notes.map((note, index) =>
                    <li key={index}>{note}</li>
                )}
            </ul>
            <input type="number" value={note} onChange={(e) => setNote(e.target.value)} />
            <button onClick={() => setNotes([ ...notes, parseInt(note) ])}>Ajouter</button>
        </div>
    );
}

export default Notes;
