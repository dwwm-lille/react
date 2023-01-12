import { useEffect, useState } from 'react';
import AgeField from './AgeField';
import MailField from './MailField';

/**
 * Dispose d'un state isErrorMessageDisplayed mis à jour avec setErrorMessageDisplayState
 * isErrorMessageDisplay est un booléen
 * Dispose d'un state pseudo mis à jour avec setPseudo
 * pseudo est une chaîne de caractère
 * Le composant affiche le pseudo, un formulaire pour changer le pseudo, et un message d'erreur s'il fait plus de
 * 8 caractères
 * Le composant dispose d'un effet permettant d'afficher le message d'erreur si le nouveau pseudo change et fait
 * plus de 8 caractères de long.
 */
function PseudoField() {
    const [pseudo, setPseudo] = useState(''); // State pseudo, mis à jour avec setPseudo, et une valeur '' par défaut
    const [isErrorMessageDisplayed, setErrorMessageDisplayState] = useState(false);
    // State isErrorMessageDisplayed, mis à jour avec setErrorMessageDisplayState, valeur par défaut : false.

    // Quand pseudo change, ...
    useEffect(function () {
        if (pseudo.length > 8) { // Si le pseudo mesure plus de 8 caractères de long
            setErrorMessageDisplayState(true); // Afficher le message d'erreur
        } else {
            setErrorMessageDisplayState(false); // Sinon ne pas l'afficher
        }
    }, [pseudo]); // Ici on indique qu'on veut déclencher la fonction seulement quand pseudo change.
    // On peut en mettre plusieurs si on le souhaite !

    /**
     * Mettre à jour le state de pseudo
     */
    function updatePseudo(event) {
        setPseudo(event.target.value);
    }

    return (
        <form>
            <h2>Pseudo actuel : {pseudo}</h2>
            {isErrorMessageDisplayed && ( // Affichage du message d'erreur si le message est censé être affiché
                <p>Aaaah, c'est trop long là, ça va pas du tout !</p>
            )}
            <label>
                Pseudo :
                <input type="text" onChange={updatePseudo} />
            </label>
        </form>
    );
}

// @todo A corriger
function ExoHook4() {
    return (
        <div>
            <div>
                <a href="https://fr.reactjs.org/docs/hooks-effect.html">Doc</a>
                <div>
                    Voici un composant PseudoField qui permet de saisir un pseudo et afficher une erreur s'il est trop long.
                    <PseudoField />
                </div>
            </div>
            <div>
                <p>En vous inspirant du dernier exemple, remplir le composant MailField</p>
                <MailField />
                <a href="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript">Vérifier si un email est au bon format</a>
                <p>En vous inspirant du dernier exemple, Remplir le composant AgeField</p>
                <AgeField />
            </div>
        </div>
    )
}

export default ExoHook4;
