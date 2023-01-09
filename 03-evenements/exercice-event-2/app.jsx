class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentText: 'Pop',
            person: {
                name: 'LouisFilou',
                age: 51
            },
        };

        this.displayAge = this.displayAge.bind(this);
    }

    displayAge() {
        console.log(this.state.person.age);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Créer une méthode displayAge qui affiche l'âge dans la console de la personne contenue dans le state.</li>
                    <li>Créer un bouton qui appelle cette méthode lorsque l'on clique dessus.</li>
                </ul>
                <button onClick={this.displayAge}>Afficher l'âge</button>
                <a href="https://fr.reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers">Documentation pour envoyer des paramètres à une méthode</a>
                <p>Voici un bouton qui envoie comme paramètre "hello" à la méthode "display"</p>
                <button onClick={() => this.display('hello')}>Dire Hello</button>
                <ul>
                    <li>Créer un bouton qui appelle la méthode "afficher" en lui envoyant comme paramètre "Tu es de la guimauve"</li>
                </ul>
                <button onClick={() => this.display('Tu es de la guimauve')}>Guimauve</button>
                <button onClick={this.display.bind(this, 'Tu es de la guimauve')}>Guimauve</button>

                <p>Ici on affiche le contenu de currentText : {this.state.currentText}</p>
                <ul>
                    <li>Créer une méthode changeText qui reçoit un texte en paramètre, et qui va le mettre dans le state currentText</li>
                    <li>Créer un bouton qui appelle la méthode changeText, et lui passer en paramètre la chaîne de caractères suivante : "C'est une belle journée pour sauver des vies"</li>
                </ul>
                <button onClick={() => this.changeText('C\'est une belle journée pour sauver des vies')}>Changer le texte</button>
            </div>
        )
    }

    changeText(text) {
        this.setState({ currentText: text });
    }

    /**
     * Affiche le texte reçu en paramètre
     */
    display(text) {
        console.log(text);
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
