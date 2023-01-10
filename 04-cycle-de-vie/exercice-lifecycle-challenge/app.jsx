class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            factsOnCats: [],
        };

        this.fetchFacts = this.fetchFacts.bind(this);
    }

    /**
     * Cette méthode est appellée au chargement du composant
     */
    componentDidMount() {
        this.fetchFacts();
    }

    /**
     * Cette méthode est appelée dès qu'un setState est effectué.
     * PrevState contient l'objet state de la classe avant le setState
     * Pour rappel, pour accéder à l'état courant, utiliser this.state.
     * PreviousProps n'est pas utilisé dans cet exercice
     */
    componentDidUpdate(previousProps, previousState) {
    }

    render() {
        return (
            <div>
                <h1>Fetch their soul !</h1>
                <Instructions />
                {console.log(this.state.factsOnCats)}
            </div>
        )
    }

    /**
     * Simule une requête sur une API qui prend du temps et renvoie des faits sur les chats
     */
    fetchFacts() {
        setTimeout(() => {
            this.setState({
                factsOnCats: [
                    { text: 'Un chat a fait tomber le sapin' },
                    { text: 'Un chat est rentré chez lui pour manger des croquettes' },
                    { text: 'Un chat est rentré par intérêt chez son maître' },
                    { text: 'Un chat est finalement adorable' },
                ],
            });
        }, 300);
    }
}

class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>Dans le code se trouve une méthode fetchFacts</p>
                <p>Cette méthode va récupérer des faits (on simule une API) sur les chats et les mettre dans le state factsOnCats</p>
                <p>Afficher le contenu de factsOnCats. La méthode fetchFacts ne doit pas être modifiée et ne renvoie rien, il faut l'appeller quelque part.</p>
                <p>Pour chaque fait, ajouter un bouton qui permet de retirer ce fait du tableau factsOnCats</p>
                <p>Remplir componentDidUpdate de manière à ce que si factsOnCats est vide, alors on retourne automatiquement charger des chats.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
