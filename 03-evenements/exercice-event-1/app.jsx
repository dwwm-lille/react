class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '' };

        this.hello = this.hello.bind(this);
    }

    hello(event) {
        console.log('Bonjour');
        console.log(event.target.textContent);
        this.setState({ name: 'Fiorella' });
    }

    goodBye(name, event) {
        console.log('Au revoir '+name);
        console.log(event);
    }

    hi() {
        alert('Salut');
    }

    render() {
        return (
            <div>
                <button onClick={this.hello}>Bouton Bonjour</button>
                <h1 onClick={this.hello}>Titre Bonjour</h1>
                <button onClick={(event) => this.goodBye('Fiorella', event)}>Au revoir</button>

                <div>
                    <p>Voici un bouton qui appelle une méthode "Bonjour"</p>
                    <button onClick={this.hello}>Appeler Bonjour</button>
                </div>
                <div>
                    <p>En vous basant sur l'exemple du bouton "bonjour", créer une autre fonction hi qui va déclencher une alerte "salut"</p>
                    <p>Créer un nouveau bouton "Salut" qui va appeler cette méthode hi lorsque l'on clique dessus</p>
                    <button onClick={this.hi}>Salut</button>
                </div>
                <div>
                    <ul>
                        <li>Créer un span "salut2" qui va appeler la méthode hi lorsque l'on clique dessus. (Oui, c'est aussi possible de mettre un attribut onClick sur un span. Essayez !)</li>
                        <li>Créer un input de type texte qui va appeler la méthode hi lorsque sa valeur change</li>
                        <li>Créer un input de type checkbox qui va également appeler la méthode hi lorsque son état change</li>
                    </ul>
                    <span onClick={this.hi}>Salut 2</span>
                    <input type="text" onChange={this.hi} />
                    <input type="checkbox" onChange={this.hi} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
