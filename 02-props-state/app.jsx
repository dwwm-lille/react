class Clock extends React.Component {
    constructor(props) {
        super(props); // Appelle le constructor de React

        // On initialise l'état du composant
        this.state = { date: new Date(), id: Math.random() };

        // On met à jour le state toutes les secondes
        setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    /**
     * Retourner la ville du fuseau horaire
     */
    city() {
        // On vérifie que la props timezone est définie
        return this.props.timezone ? this.props.timezone.split('/')[1] : 'Paris';
    }

    render() {
        return (
            <h2>
                Il est {this.state.date.toLocaleTimeString('fr-FR', { timeZone: this.props.timezone })} à {this.city()}
            </h2>
        );
    }
}

class Animal extends React.Component {
    render() {
        return <li>{this.props.animal}</li>;
    }
}

class AnimalList extends React.Component {
    render() {
        return (
            <div>
                {this.props.title &&
                    <h1>-- {this.props.title} --</h1>
                }
                <ul>
                    {this.props.animals.map((animal, index) =>
                        <Animal animal={animal} key={index} />
                    )}
                </ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Clock timezone="Europe/Paris" />
                <Clock timezone="Asia/Tokyo" />
                <Clock />

                <AnimalList animals={['Chat', 'Chien', 'Oiseau']} title="Animaux de compagnie" />
                <AnimalList animals={['Lion', 'Cheval']} />

                <h2>Exercices props</h2>
                <a href="exercice-props-1">Exercice props 1</a> <br />
                <a href="exercice-props-2">Exercice props 2</a> <br />
                <a href="exercice-props-3">Exercice props 3</a> <br />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
