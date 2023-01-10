const ERROR_TOO_SHORT = 'Mot de passe trop court, Il faut au moins 8 caractères, et vous en avez mis ';
const ERROR_NO_CAP = 'Le mot de passe doit contenir au moins une majuscule';
const ERROR_NO_MIN = 'Le mot de passe doit contenir au moins une minuscule';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            errorMessages: [],
        };

        this.updatePassword = this.updatePassword.bind(this);
    }

    /**
     * Cette méthode est appelée dès qu'un setState est effectué.
     * PrevState contient l'objet state de la classe avant le setState
     * Pour rappel, pour accéder à l'état courant, utiliser this.state.
     * PreviousProps n'est pas utilisé dans cet exercice
     */
    componentDidUpdate(previousProps, previousState) {
        let password = this.state.password;
        let errors = []; // A chaque update du mot de passe je prépare un tableau
        let hasAtLeastOneUppercase = false;
        let hasAtLeastOneLowercase = false;

        // Vérifie la taille du mot de passe
        if (password.length < 8) {
            errors.push(ERROR_TOO_SHORT+password.length+'.');
        }

        // Vérifier la présence d'une majuscule et d'une minuscule
        for (let letter of password) {
            if (letter == letter.toUpperCase()) {
                hasAtLeastOneUppercase = true;
            } else {
                hasAtLeastOneLowercase = true;
            }
        }

        // On remplit le tableau d'erreurs en fonction des majuscules / minuscules
        if (!hasAtLeastOneUppercase) {
            errors.push(ERROR_NO_CAP);
        }

        if (!hasAtLeastOneLowercase) {
            errors.push(ERROR_NO_MIN);
        }

        console.log(errors);

        // On doit comparer l'ancien tableau d'erreurs (previousState) avec errors
        console.log(previousState.errorMessages);

        if (JSON.stringify(previousState.errorMessages) != JSON.stringify(errors)) {
            this.setState({ errorMessages: errors });
        }
    }

    render() {
        return (
            <div>
                <a href="https://fr.reactjs.org/docs/react-component.html#componentdidupdate">Documentation sur les cycles de vie</a>
                <div>
                    <div>
                        <p>Voici un input qui va mettre à jour le champ password</p>
                        <p>Mot de passe : {this.state.password}</p>
                        <label>
                            Password
                            <input type="password" onChange={this.updatePassword} />
                        </label>
                        <ul>
                            {this.state.errorMessages.map((message, index) =>
                                <li key={index} style={{ color: 'red' }}>
                                    {message}
                                </li>
                            )}
                        </ul>
                    </div>
                    <Instructions />
                </div>
            </div>
        )
    }

    /**
     * Met à jour le state du password
     */
    updatePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
}

class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>Le but est d'afficher plusieurs messages d'erreurs quand l'utilisateur écrit un mot de passe pour qu'il respecte les termes ci-dessous.</p>
                <p>Remplir la fonction componentDidUpdate de manière à ce que :</p>
                <p>
                    Si le mot de passe est inférieur à 8 caractères de long, mettre dans le tableau d'erreurs :
                    "Mot de passe trop court, Il faut au moins 8 caractères, et vous en avez mis X"
                    X désigne le nombre de caractères contenus dans l'état de password
                </p>
                <p>
                    Si le mot de passe ne contient pas une majuscule, mettre dans le tableau d'erreurs
                    "Le mot de passe doit contenir au moins une majuscule"
                </p>
                <p>
                    Si le mot de passe ne contient pas de miniscule, mettre dans le tableau d'erreurs
                    "Le mot de passe doit contenir au moins une majuscule"
                </p>
                <h4>Attention, si une erreur est résolue, il faut la retirer du tableau !</h4>
                <p>
                    Pour vérifier qu'une chaîne contienne au moins une majuscule ou bien une minuscule,
                    on pourrait simplement comparer chacune des lettres à elle-même en majuscule ou minuscule.
                </p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
