class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [
                {
                    name: 'Trolilo',
                    type: 'troll'
                },
                {
                    name: 'Sheep sheep',
                    type: 'poisson'
                },
                {
                    name: 'Donald Trump',
                    type: 'orange'
                }
            ],
            newAnimalType: '',
            newAnimalName: '',
        }

        this.handleNewAnimalType = this.handleNewAnimalType.bind(this);
        this.handleNewAnimalName = this.handleNewAnimalName.bind(this);
    }

    handleNewAnimalType(event) {
        this.setState({ newAnimalType: event.target.value });
    }

    handleNewAnimalName(event) {
        this.setState({ newAnimalName: event.target.value });
    }

    saveAnimal = () => { // Fonction fléchée pour éviter le bind
        let animal = {
            name: this.state.newAnimalName,
            type: this.state.newAnimalType
        };

        // On ajoute l'objet animal dans le tableau
        this.state.animals.push(animal);

        // On met à jour le tableau dans le state de React et on vide les champs
        this.setState({ animals: this.state.animals, newAnimalType: '', newAnimalName: '' });

        // Méthode plus avancé
        // this.setState({ animals: [...this.state.animals, animal], newAnimalType: '', newAnimalName: '' });

        console.log(this.state.animals);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.
                        <ul>
                            {this.state.animals[0].name}
                            {this.state.animals.map((animal, index) =>
                                <li key={index}>{animal.name} - {animal.type}</li>
                            )}
                        </ul>
                    </li>
                    <li>
                        Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
                        <input value={this.state.newAnimalType} onChange={this.handleNewAnimalType} />
                        {this.state.newAnimalType && <p>Type: {this.state.newAnimalType}</p>}
                    </li>
                    <li>
                        Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
                        <input value={this.state.newAnimalName} onChange={this.handleNewAnimalName} />
                        {this.state.newAnimalName ? <p>{this.state.newAnimalName}</p> : ''}
                    </li>
                    <li>
                        Créer une méthode vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
                        <button onClick={this.saveAnimal}>Créer</button>
                    </li>
                    <li>
                        Remplir la méthode saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
                        que la méthode mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
                        la méthode vide les champs newAnimalType et newAnimalName.
                    </li>
                    <li>Bon courage !</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
