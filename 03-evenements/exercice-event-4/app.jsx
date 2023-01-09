class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vegetables: [
                {
                    name: 'Courgette',
                    draftName: '', // DraftName contient la valeur de l'input destiné à faire changer de nom à l'aliment.
                    price: 5,
                },
                {
                    name: 'Popotiron',
                    draftName: '',
                    price: 155,
                },
                {
                    name: 'Baba',
                    draftName: '',
                    price: 99,
                },
                {
                    name: 'Carotte',
                    draftName: '',
                    price: 1,
                }
            ],
            newVegetableName: '',
            newVegetablePrice: '',
        };
    }

    updateVegetableDraftName(index, event) {
        console.log(index, event.target.value);

        let vegetables = this.state.vegetables;

        // On modifie le légume concerné
        vegetables[index].draftName = event.target.value;

        // On met à jour le tableau dans le state
        this.setState({ vegetables });
    }

    changeVegetableName(index, draftName) {
        let vegetables = this.state.vegetables;

        vegetables[index].name = draftName;
        vegetables[index].draftName = ''; // On vide le input

        this.setState({ vegetables });
    }

    deleteVegetable(index) {
        let vegetables = this.state.vegetables;

        vegetables.splice(index, 1); // On supprime l'élément qui a l'index donné
        this.setState({ vegetables });

        // On ne garde que les végétaux dont l'index est différent de l'index passé en paramètre
        // this.setState({ vegetables: vegetables.filter((vegetable, i) => index != i) })
    }

    handleVegetableName(event) {
        this.setState({ newVegetableName: event.target.value });
    }

    handleVegetablePrice(event) {
        this.setState({ newVegetablePrice: event.target.value });
    }

    handleVegetable(field, event) {
        // [field] va se transformer en newVegetablePrice donc ce sera ça la clé
        this.setState({ [field]: event.target.value });
    }

    addVegetable(event) {
        event.preventDefault(); // Annuler l'envoi du formulaire

        let vegetables = this.state.vegetables;
        let vegetable = { name: this.state.newVegetableName, price: this.state.newVegetablePrice, draftName: '' };

        vegetables.push(vegetable);
        this.setState({ vegetables });

        // Méthode avancée avec le spread
        // this.setState({ vegetables: [...vegetables, vegetable] });
    }

    render() {
        return (
            <div>
                <p>Je vous invite à lire ceci : <a href="https://www.robinwieruch.de/react-state-array-add-update-remove">Comment gérer les états avec les tableaux en React</a></p>
                <ul>
                    <li>Afficher la liste des légumes. Pour chaque légume, afficher son nom et son prix</li>
                    <li>Pour chaque légume, afficher un input de type texte qui prendra comme valeur son draftName</li>
                    <li>Lier ce input avec une méthode updateVegetableDraftName qui met à jour le draftName du légume en question, on peut passer un index et l'event en paramètre.</li>
                    <li>Créer une méthode changeVegetableName, qui prend en paramètre un nouveau nom, et un index de légume à modifier.</li>
                    <li>Pour chaque légume, créer un bouton qui va appeler changeVegetableName en lui envoyant l'index du légume à modifier</li>
                    <li>La méthode changeVegetableName doit pouvoir identifier le légume dont le nom doit changer, mettre à jour son nom et remettre sont draftName à ''</li>
                </ul>

                <ul>
                    {this.state.vegetables.map((vegetable, index) =>
                        <li key={index}>
                            <span>{vegetable.name} à {vegetable.price}€</span>
                            <input type="text" value={vegetable.draftName} onChange={(e) => this.updateVegetableDraftName(index, e)} />
                            <button onClick={() => this.changeVegetableName(index, vegetable.draftName)}>Modifier</button>
                            <button onClick={() => this.deleteVegetable(index)}>Supprimer</button>
                        </li>
                    )}
                </ul>

                <ul>
                    <li>Créer une méthode deleteVegetable, qui prend en paramètre un index de tableau, et qui supprime cet élément du tableau en mettant le state à jour</li>
                    <li>Pour chaque légume, créer un bouton "supprimer" qui va appeler la méthode deleteVegetable, en lui envoyant comme paramètre l'index du légume</li>
                </ul>
                <ul>
                    <li>Créer deux propriétés de state : Une propriété 'newVegetableName' de type String, et une propriété 'newVegetablePrice' de type String</li>
                    <li>Créer une méthode addVegetable qui va créer un nouveau légume en se basant sur la valeur de ces deux propriétés</li>
                    <li>Créer un petit formulaire composé de deux input, un input pour le nom du légume, et un autre pour le prix du légume.</li>
                    <li>Chaque input doit être lié au state correspondant. L'input pour le nom du légume doit être lié à newVegetableName et l'input pour le type à newVegetablePrice</li>
                    <li>Créer un bouton qui déclenche la fonction addVegetable</li>
                </ul>

                <form>
                    <input type="text" value={this.state.newVegetableName} onChange={(e) => this.handleVegetable('newVegetableName', e)} />
                    <input type="text" value={this.state.newVegetablePrice} onChange={(e) => this.handleVegetable('newVegetablePrice', e)} />

                    <button onClick={(e) => this.addVegetable(e)}>Ajouter</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
