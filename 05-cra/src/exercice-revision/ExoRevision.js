import { useEffect, useState } from 'react';

// Voici un petit composant React à compléter / corriger
// Il y a des erreurs / incohérences dans ce code malheureusement, on va devoir les corriger...
function ExoRevision() {
    let [count, setCount] = useState(0);

    // MOYEN - Transformer cette fonction pour ne plus avoir de parenthèses
    let sayMount = () => console.log('MOUNT');
    useEffect(sayMount, []);

    // FACILE - Transformer cette arrow function en "normal"
    // let increment = () => setCount(count + 1);
    function increment() {
        setCount(count + 1);
    }

    // FACILE - Transformer cette fonction en arrow function
    function incrementWith(value) {
        setCount(count + value);
    }

    // DIFFICILE - Il faudrait pouvoir exécuter cette fonction dans le JSX
    // On doit d'abord pouvoir lui passer une valeur (value) (5 par exemple)
    // Le second paramètre sera une fonction dans lequel on pourra récupèrer la valeur (avec un +10) passée en première
    // Le retour de cette fonction sera la valeur + 5 et la fonction principale va donc le retourner
    // Le résultat doit être 20 si on passe 5
    let mySuperFunction = (value, callback) => {
        return callback(value + 10);
    }

    mySuperFunction(5, (value) => value + 5);

    return (
        <div>
            <h1>Mon Application React</h1>
            <p>Le compteur vaut {count}</p>
            <button onClick={increment}>
                Appelle la méthode increment sans {'() => ()'}
            </button>
            <button onClick={() => incrementWith(5)}>Appelle la méthode incrementWith avec 5 en paramètre</button>
            <button onClick={incrementWith.bind(null, 5)}>Appelle la méthode incrementWith avec 5 en paramètre mais sans {'() => ()'}</button>
            <p>{mySuperFunction(5, (value) => value + 5)}</p>

            <Todos />
        </div>
    );
}

function Todos() {
    let [todos, setTodos] = useState(['a', 'b']);
    let [newTodo, setNewTodo] = useState('');

    let addTodo = (e) => {
        e.preventDefault();

        setTodos([ ...todos, newTodo ]);
    };

    return (
        <div>
            <ul>
                {/* Mon .map ne fonctionne pas 🤷‍♂️ */}
                {todos.map((t, i) =>
                    <li key={i}>{t}</li>
                )}
            </ul>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button>Ajouter</button>
            </form>
        </div>
    );
}

export default ExoRevision;
