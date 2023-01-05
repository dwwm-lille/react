class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textExample: 'baba',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <p>Voici un input qui est lié au state textExample</p>
                    <input value={this.state.textExample} onChange={this.handleChange} />
                    <p>Voici sa valeur {this.state.textExample}</p>
                </div>
                <div>
                    <p>
                        Créer un input de type texte qui permettra de saisir un texte et qui aura pour valeur le texte du state
                    </p>
                    <p>
                        Créer une méthode "handleTextChange" qui sera déclenchée à chaque fois que le texte changera. Cette méthode sera appelée avec le déclencheur onChange de l'input
                    </p>
                    <p>Afficher la valeur de texte ici : {this.state.text}</p>
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            textExample: event.target.value,
        })
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
