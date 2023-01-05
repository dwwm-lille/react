class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Matthieu',
            cat: {
                name: 'Bianca',
                age: 6,
            },
            song: 'Blue Monday',
            bananaNumber: 8
        }
    }

    render() {
        return (
            <div>
                <p>Afficher la propriété name du state {this.state.name}</p>
                <p>Afficher la propriété cat du state avec ses attributs</p>
                <div>
                    <h2>Le cat est là {this.state.cat.name}</h2>
                    <p>{this.state.cat.age}</p>
                </div>
                <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici: {this.state.song}</p>
                <p>Créer une propriété bananaNumber dans le state, donnez-lui la valeur de votre choix, et affichez-la ici. {this.state.bananaNumber}</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
