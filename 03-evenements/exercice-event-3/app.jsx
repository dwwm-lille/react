class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animal: 'Ronron',
            notes: [1, 10, 15, 19, 20],
            isDisplayed: false,
        };

        this.removeLastElement = this.removeLastElement.bind(this);
        this.changeImageDisplay = this.changeImageDisplay.bind(this);
    }

    displayText(text) {
        console.log(text);
    }

    removeLastElement() {
        this.state.notes.pop();

        this.setState({ notes: this.state.notes });
    }

    changeImageDisplay() {
        this.setState({ isDisplayed: !this.state.isDisplayed }); // On inverse le isDisplayed
    }

    render() {
        return (
            <div>
                <div>
                    <p>Créer une méthode displayText qui prend en paramètre une chaîne de caractère</p>
                    <p>Créer un bouton qui envoie la valeur de state de animal en paramètre, et qui appelle la méthode displayText</p>
                    <button onClick={() => this.displayText(this.state.animal)}>Afficher</button>
                </div>
                <div>
                    <p>Créer un bouton qui va retirer le dernier élément de la liste des notes</p>
                    <p>Il faut que le bouton appelle une méthode removeLastElement, qui va retirer le dernier élément des notes.</p>
                    <p>
                        <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop">
                            Documentation sur l'utilisation de array.pop
                        </a>
                    </p>
                    {this.state.notes.map((note, index) => <p key={index}>{note}</p>)}
                    {this.state.notes.length > 0 && <button onClick={this.removeLastElement}>Retirer</button>}
                </div>
                <div>
                    <p>Créer un bouton qui va afficher ou non cette image en changeant la valeur de isDisplayed</p>
                    <p>Il faut que le bouton appelle une méthode changeImageDisplay, qui va changer le state de isDisplayed</p>
                    <button onClick={this.changeImageDisplay}>Test</button>
                    {this.state.isDisplayed &&
                        <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500" alt="airbnb" />
                    }

                    {this.state.isDisplayed ? <img src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500" alt="airbnb" /> : ''}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
