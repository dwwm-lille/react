import { useState } from "react";

/**
 * Dispose d'un state counter, qui est mis à jour avec setCounter.
 * Affiche la valeur du state de counter
 * Affiche un bouton qui déclenche une fonction handleClick
 * La fonction handleClick doit incrémenter le counter
 */
function Additionner() {
    let [counter, setCounter] = useState(0);

    let handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrémenter</button>
            <button onClick={handleClick}>Incrémenter</button>
        </div>
    );
}

export default Additionner;
