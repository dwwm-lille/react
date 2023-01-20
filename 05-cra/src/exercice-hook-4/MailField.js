import { useEffect, useState } from 'react';

/**
 * Dispose d'un state mail mis à jour avec setMail
 * mail est une chaîne de caractères
 *
 * Dispose d'un state permettant de gérer l'affichage ou non du message d'erreur "Le mail n'a pas un format valide"
 *
 * Affiche un formulaire permettant de mettre le mail à jour.
 * Affiche une erreur si le mail n'a pas de format mail
 */
function MailField() {
    let [email, setEmail] = useState('');
    let [error, setError] = useState(false);

    useEffect(() => {
        // Le .match va vérifier que l'email correspond à la regex (regex qui permet de vérifier un email valide)
        if (email.length == 0 || email.match(/^\S+@\S+\.\S+$/)) {
            setError(false); // L'email est valide s'il est vide ou que c'est un email correct
        } else {
            setError(true); // L'email n'est pas valide
        }
    }, [email]);

    return (
        <div>
            <p>{email}</p>
            {error && <p>L'email n'est pas valide</p>}

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    );
}

export default MailField;
