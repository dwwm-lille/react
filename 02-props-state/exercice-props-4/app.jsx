class Profile extends React.Component {
    render() {
        return (
            <div>
                <p>Ceci est un faux profil, attention ! Et il génère un composant PrimaryButton !</p>
                <PrimaryButton text="Signaler" />
            </div>
        )
    }
}

class Instruction extends React.Component {
    render() {
        return (
            <div>
                <p>Consultez le composant Profile pour découvrir comment inclure un composant dans un autre</p>
                <p>
                    Dans le composant Form, inclure le composant PrimaryButton en lui passant la valeur "Valider" comme props de text.
                </p>
                <p>
                    Créer un composant FormHeader qui affichera un h2 contenant un texte passé en props
                </p>
                <p>
                    Dans le composant Form, générer le composant FormHeader en lui passant un titre de formulaire en props de text.
                </p>
            </div>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <div>
                {/* Remplir ici */}
            </div>
        )
    }
}

class PrimaryButton extends React.Component {
    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Instruction />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
