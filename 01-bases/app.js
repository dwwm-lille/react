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
class Welcome extends React.Component {
    render() {
        return <h1>Bonjour {this.props.name}</h1>;
    }
}

// On peut créer un composant avec une fonction... (Solution 2)
function Goodbye(props) {
    return <h1>Au revoir {props.name}</h1>;
}

ReactDOM.render(
    <div>
        <Welcome name="Fiorella" />
        <Welcome name="Bianca" />
        <Goodbye name="React" />
    </div>,
    document.querySelector('#root4')
);
