import { useState } from "react";

/**
 * Dispose d'un state firstname qui est mis à jour avec setFirstname
 * Affiche la valeur de firstname
 * Affiche un champ de texte qui contient la valeur de firstname et dont le onChange déclenche une fonction updateName
 * La fonction updateName doit mettre à jour le state de firstname avec la nouvelle valeur contenue dans l'Input
 */
function FirstnameInput() {
    let [firstname, setFirstname] = useState('');

    let updateName = (event) => {
        setFirstname(event.target.value);
    }

    return (
        <div>
            <h1>{firstname}</h1>
            <input type="text" value={firstname} onChange={(e) => updateName(e)} />
            <input type="text" value={firstname} onChange={updateName} />
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </div>
    );
}

export default FirstnameInput;
