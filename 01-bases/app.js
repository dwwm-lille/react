// Exemple 1
let firstname = 'Fiorella';
let age = (year) => (new Date()).getFullYear() - year;
let person = {
    image: 'chaton.jpeg',
    name: 'Bianca'
};

ReactDOM.render(
    <div>
        <h1>Bonjour {firstname}, tu as {age(2019)} ans.</h1>
        <img src={person.image} alt={person.name} className="image" />
    </div>,
    document.querySelector('#root')
);

// Exemple 2
setInterval(() => {
    let element = <h2>Il est {new Date().toLocaleTimeString()}</h2>;
    // element = React.createElement('h2', null, `Il est ${new Date().toLocaleTimeString()}`);
    ReactDOM.render(element, document.querySelector('#root2'));
}, 1000);

// Exemple 3 avec objets et tableaux
let peoples = ['Marina', 'Fiorella', 'Matthieu'];
let title = <h2>Liste des contacts</h2>;

ReactDOM.render(
    <div>
        {title}
        <ul>
            {peoples.map(people =>
                <li>{people}</li>
            )}
        </ul>
    </div>,
    document.querySelector('#root3')
);

// Exemple 4 avec composant
// On crée le composant avec une classe (Solution 1)
// Une classe contient uniquement des méthodes (fonctions)
class Welcome extends React.Component {
    render() {
        return <h1>Bonjour {this.props.name}</h1>;
    }
}

// On peut créer un composant avec une fonction... (Solution 2)
// function Goodbye(props) {
function Goodbye({ name }) {
    return <h1>Au revoir {name}</h1>;
}

ReactDOM.render(
    <div>
        <Welcome name="Fiorella" />
        <Welcome name="Bianca" />
        <Goodbye name="React" />
    </div>,
    document.querySelector('#root4')
);

// Exemple 5 : Conditions
class App extends React.Component {
    displayFiorella() {
        return <h1>Fiorella</h1>;
    }

    render() {
        let kind = true;
        let component = <Welcome name="App" />;

        if (!kind) {
            component = <Goodbye name="App" />;
        }

        return (
            <div>
                <h1>Un titre</h1>
                {this.displayFiorella()}

                <h2>Exemple 1 avec un If</h2>
                {component}

                <h2>Exemple 2 avec une condition à la volée</h2>
                {kind && <Welcome name="App" />}
                {!kind && <Goodbye name="App" />}

                <h2>Exemple 3 avec un ternaire</h2>
                {kind ? <Welcome name="App" /> : <Goodbye name="App" />}
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root5')
);
