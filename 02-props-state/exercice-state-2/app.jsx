class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            text: 'Je ne peux pas je suis à Nagano',
        };

        // Indispensable pour pouvoir manipuler le state depuis incrementCounter
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <a href="https://fr.reactjs.org/docs/handling-events.html">
                        Documentation sur les gestions d'événements
                    </a>
                    <p>Voici un élément Counter, cliquez sur le bouton pour découvrir son comportement</p>
                    <h2>Compteur : {this.state.counter}</h2>
                    <button onClick={this.incrementCounter}>Ajouter + 1</button>
                </div>
                <div>
                    <p>Remplir la fonction decrementCounter</p>
                    <p>Lier la fonction decrementCounter dans le constructor comme pour incrementCounter</p>
                    <p>Créer un nouveau bouton "Retirer -1" qui va déclencher une fonction decrementCounter</p>
                </div>
                <div>
                    <p>Remplir la fonction replaceByBaba</p>
                    <p>Lier la fonction replaceByBaba dans le constructor</p>
                    <p>Créer un nouveau bouton Remplacer qui va déclencher une fonction replaceByBaba</p>
                    <h2>{this.state.text}</h2>
                </div>
            </div>
        )
    }

    /**
     * Incrémente la valeur du compteur du state
     */
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    /**
     * Décrémente la valeur du compteur du state
     */
    decrementCounter() {
    }

    /**
     * Remplace la valeur de text par "Baba"
     */
    replaceByBaba() {
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
