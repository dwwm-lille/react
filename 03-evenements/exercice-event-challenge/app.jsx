class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            birds: [
                {
                    name: 'Pingouin',
                    age: 18,
                    color: 'Noir',
                    isColorDisplayed: true,
                },
                {
                    name: 'Manchot',
                    age: 15,
                    color: 'Blanc',
                    isColorDisplayed: false,
                },
                {
                    name: 'Autruche',
                    age: 8555,
                    color: 'Blanc',
                    isColorDisplayed: false,
                },
                {
                    name: 'Colibri',
                    age: 85,
                    color: 'Bleu',
                    isColorDisplayed: true,
                },
            ],
            newBird: {
                name: '',
                age: '',
                color: '',
                isColorDisplayed: false,
            }
        }
    }

    handleBird(field, event) {
        let newBird = this.state.newBird;
        // Le champ input peut être soit une checkbox soit un type text
        newBird[field] = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

        this.setState({ newBird });
    }

    saveNewBird(event) {
        event.preventDefault();

        // Vérifications...
        let name = this.state.newBird.name;
        let color = this.state.newBird.color.toLowerCase();

        if (name.length < 4 || name.length > 12) {
            alert('Veuillez entrer un nom entre 4 et 12 caractères');
            return; // On arrête la fonction
        } else if (color != 'bleu' && color != 'noir' && color != 'blanc') {
            alert('Veuillez entrer une de ces trois couleurs : bleu, noir, blanc');
            return;
        }

        // Attention aux références en JS
        // let car1 = { brand: 'Renault', power: 90 }
        // let car2 = car1
        // car2.power = 120 // Si on modifie car2, on modifie car1
        // let car3 = { ...car1 } // On fait une copie/clone de l'objet
        // car3.power = 240 // Si on modifie car3, on NE modifie PAS car1

        let birds = this.state.birds;
        birds.push({ ...this.state.newBird }); // On push un "clone" de l'objet et pas l'objet directement
        this.setState({
            birds,
            newBird: { // On "reset" l'objet newBird du formulaire
                name: '',
                age: '',
                color: '',
                isColorDisplayed: false,
            }
        });
    }

    deleteBird(index) {
        this.setState({ birds: this.state.birds.filter((bird, i) => i != index) });
    }

    handleUpdate(bird, event) {
        if (event.target.type == 'checkbox') {
            bird.isColorDisplayed = event.target.checked;
        } else {
            bird.color = event.target.value;
        }

        this.setState({ birds: this.state.birds });
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Afficher chaque oiseau dans une boucle map</li>
                </ul>
                <ul>
                    {this.state.birds.map((bird, index) =>
                        <li key={index}>
                            <span>{bird.name} a {bird.age} ans.</span>
                            {bird.isColorDisplayed && <span> Il est {bird.color.toLowerCase()}.</span>}
                            <button onClick={() => this.deleteBird(index)}>Supprimer</button>
                            <input type="text" value={bird.color} onChange={(e) => this.handleUpdate(bird, e)} />
                            <input type="checkbox" checked={bird.isColorDisplayed} onChange={(e) => this.handleUpdate(bird, e)} />
                        </li>
                    )}
                </ul>
                <h2>Pour chaque oiseau</h2>
                <ul>
                    <li>Afficher son age, son nom, sa couleur</li>
                    <li>Si sa propriété isColorDisplayed n'est pas égale à true, ne pas afficher sa couleur</li>
                </ul>
                <ul>
                    <li>Créer un mécanisme qui permette d'ajouter un oiseau en utilisant un formulaire et des states</li>
                    <li>Créer un mécanisme qui permette de supprimer un oiseau en utilisant un bouton supprimer</li>
                    <li>Créer un mécanisme qui permette de modifier la couleur d'un oiseau en utilisant un input texte</li>
                </ul>
                <form>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" value={this.state.newBird.name} onChange={(e) => this.handleBird('name', e)} />
                    </div>
                    <div>
                        <label htmlFor="age">Âge</label>
                        <input type="text" id="age" value={this.state.newBird.age} onChange={(e) => this.handleBird('age', e)} />
                    </div>
                    <div>
                        <label htmlFor="color">Couleur</label>
                        <input type="text" id="color" value={this.state.newBird.color} onChange={(e) => this.handleBird('color', e)} />
                    </div>
                    <div>
                        <label htmlFor="isColorDisplayed">Couleur affiché ?</label>
                        <input type="checkbox" id="isColorDisplayed"
                            checked={this.state.newBird.isColorDisplayed}
                            onChange={(e) => this.handleBird('isColorDisplayed', e)} />
                    </div>

                    {JSON.stringify(this.state.newBird)}
                    <button onClick={(e) => this.saveNewBird(e)}>Ajouter</button>
                </form>
                <p>Dans le mécanisme d'ajout, ajouter des conditions qui empêchent la sauvegarde de l'oiseau</p>
                <ul>
                    <li>Si son nom mesure moins de 4 caractères de long, ou plus de 12 caractères de long, alerter "Veuillez entrer un nom entre 4 et 12 caractères"</li>
                    <li>Si sa couleur n'est ni "bleu", ni "noir", ni "blanc", alerter "Veuillez entrer une de ces trois couleurs : bleu, noir, blanc"</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
