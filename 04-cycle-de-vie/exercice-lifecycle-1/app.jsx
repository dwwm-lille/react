class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 0,
            degrees: 0,
        };

        this.incrementAge = this.incrementAge.bind(this);
        this.incrementTemperature = this.incrementTemperature.bind(this);
        this.decrementTemperature = this.decrementTemperature.bind(this);
    }

    /**
     * Cette méthode est appelée dès qu'un setState est effectué.
     * PrevState contient l'objet state de la classe avant le setState
     * Pour rappel, pour accéder à l'état courant, utiliser this.state.
     * PreviousProps n'est pas utilisé dans cet exercice
     */
    componentDidUpdate(previousProps, previousState) {
        console.log('previous', previousState.age);
        console.log('current', this.state.age);

        if (this.state.age >= 18) {
            console.log('La personne est majeure');
        }

        if (this.state.degrees > 0) {
            console.log('Trop chaud');
        } else if (this.state.degrees < 0) {
            console.log('Trop froid');
        }
    }

    render() {
        return (
            <div>
                <a href="https://fr.reactjs.org/docs/react-component.html#componentdidupdate">Documentation sur les cycles de vie</a>
                <div>
                    <h2>Exercice 1</h2>
                    <div>
                        <h3>Age : {this.state.age}</h3>
                        <p>Voici un bouton qui va augmenter l'âge de 1</p>
                        <button onClick={this.incrementAge}>Age +1</button>
                    </div>
                    <Instructions exercice={1} />
                </div>
                <div>
                    <h2>Exercice 2</h2>
                    <h3>Degrés {this.state.degrees}</h3>
                    <div>
                        <p>Voici deux boutons qui permettent de changer la température</p>
                        <div>
                            <button onClick={this.incrementTemperature}> Plus chaud</button>
                            <button onClick={this.decrementTemperature}> Plus froid</button>
                        </div>
                    </div>
                    <Instructions exercice={2} />
                </div>
            </div>
        )
    }

    /**
     * Augmente l'âge de 1 dans le state
     */
    incrementAge() {
        this.setState({
            age: this.state.age + 1,
        })
    }

    /**
     * Augmente de 1 la temperature dans le state
     */
    incrementTemperature() {
        this.setState({
            degrees: this.state.degrees + 1,
        })
    }

    /**
     * Diminue de 1 la temperature dans le state
     */
    decrementTemperature() {
        this.setState({
            degrees: this.state.degrees - 1,
        })
    }
}

class Instructions extends React.Component {
    render() {
        return (
            <div>
                {this.props.exercice === 1 && (
                    <div>
                        <p>Remplir la méthode componentDidUpdate de manière à afficher l'ancien âge dans la console.</p>
                        <p>Remplir la méthode componentDidUpdate de manière à afficher l'âge actuel dans la console.</p>
                        <p>Si le nouvel âge est supérieur ou égal à 18, alors afficher en plus "La personne est majeure" dans componentDidUpdate</p>
                        <p>Vous pouvez accéder au contenu de prevState comme pour un state classique</p>
                    </div>
                )}
                {this.props.exercice === 2 && (
                    <div>
                        <p>
                            Remplir la méthode componentDidUpdate de manière à ce que lorsque la température passe en dessous de 0, la
                            console affiche "Trop froid !" et que lorsque la température passe au dessus de 0, la console affiche "Trop chaud !"
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
