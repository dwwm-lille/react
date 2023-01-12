import { useState } from "react";

/**
 * Dispose d'un state email qui est mis à jour avec setEmail
 * Affiche la valeur de email
 * Affiche un champ de texte qui contient la valeur de email et dont le onChange déclenche une fonction updateEmail
 * La fonction updateEmail doit mettre à jour le state de email avec la nouvelle valeur contenue dans l'Input
 */
function EmailInput() {
    let [email, setEmail] = useState('');

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <h1>{email}</h1>
            <input type="text" value={email} onChange={(e) => updateEmail(e)} />
            <input type="text" value={email} onChange={updateEmail} />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    );
}

export default EmailInput;
