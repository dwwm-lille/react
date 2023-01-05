class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Matthieu',
            cat: {
                name: 'Bianca',
                age: 6,
            },
        }
    }

    render() {
        return (
            <div>
                <p>Afficher la propriété name du state</p>
                <p>Afficher la propriété cat du state avec ses attributs</p>
                <div>
                    <h2>Le cat est là</h2>
                </div>
                <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici.</p>
                <p>Créer une propriété bananaNumber dans le state, donnez-lui la valeur de votre choix, et affichez-la ici.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
