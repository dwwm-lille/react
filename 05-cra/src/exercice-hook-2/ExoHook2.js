import { useState } from 'react';
import Additionner from './Additionner';
import FirstnameInput from './FirstnameInput';
import EmailInput from './EmailInput';

function Clicker(props) {
    const [isClicked, setIsClickedState] = useState(false); // False est la valeur par défaut du state isClicked
    let displayedText = "Cliquez-moi !";

    if (isClicked) {
        displayedText = props.text;
    }

    /**
     * Update the state isClicked and set it to true
     */
    function handleButtonClick() {
        setIsClickedState(true); // True est la nouvelle valeur du state isClicked
    }

    return (
        <div style={{ border: 'solid', padding: '8px', margin: '8px 0' }}>
            <button onClick={handleButtonClick}>
                {displayedText}
            </button>
        </div>
    )
}

function ExoHook2() {
    return (
        <div>
            <div>
                <p>Voici un composant Clicker qui change de texte quand on clique dessus</p>
                <Clicker text="Je suis changé !" />
            </div>
            <div>
                <p>
                    <a href="https://fr.reactjs.org/docs/hooks-state.html">
                        Documentation sur le changement de state en composant fonctionnel
                    </a>
                </p>
            </div>
            <div>
                <p>Remplir le composant Additionner</p>
                <Additionner />
                <p>Remplir le composant FirstnameInput</p>
                <FirstnameInput />
                <p>Remplir le composant EmailInput</p>
                <EmailInput />
            </div>
        </div>
    )
}

export default ExoHook2;
