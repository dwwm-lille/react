// EXO 3 PROPS
class Instruction extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>Créez un composant VegetablesCart et passez-lui en props les legumes.</p>
                    <p>Dans le composant VegetablesCart, créer un composant Vegetable qui sera appelé autant de fois qu'il y a de légumes dans les props</p>
                    <p>Dans le composant Vegetable, afficher le nom et le prix de chaque légume </p>
                </div>
                <div>
                    <p>Créer un composant Students et passez-lui en props les élèves.</p>
                    <p>Dans ce composant, créer un composant Student qui sera appelé autant de fois qu'il y a d'élèves dans les props</p>
                    <p>Dans le composant Student, afficher l'élève dans une balise de votre choix</p>
                </div>
            </div>
        )
    }
}

class TitleComponent extends React.Component {
    render() {
        return (
            <h1>Ceci est un titre</h1>
        )
    }
}

class Vegetable extends React.Component {
    render() {
        return <li>{this.props.vegetable.name} coûte {this.props.vegetable.price} €</li>;
    }
}

class VegetablesCart extends React.Component {
    render() {
        return (
            <div>
                <h2>Les légumes</h2>
                <ul>
                    {this.props.vegetables.map((vegetable, index) => <Vegetable key={index} vegetable={vegetable} />)}
                </ul>
            </div>
        );
    }
}

// @todo Students pour les explications
class App extends React.Component {
    render() {
        const vegetables = listVegetables();
        const students = listStudents();

        return (
            <div>
                <TitleComponent />
                <Instruction />
                <VegetablesCart vegetables={vegetables} />
            </div>
        );
    }
}

/**
 * Cette fonction génère une liste de légumes en brut
 */
function listVegetables() {
    return [
        {
            name: 'Topinambour',
            price: 15,
        },
        {
            name: 'Pois chiche',
            price: 2,
        },
        {
            name: 'Salade',
            price: 999,
        },
        {
            name: 'Courgette',
            price: 1,
        },
        {
            name: 'Oignon',
            price: 2,
        },
    ]
}

/**
 * Cette fonction génère une liste d'élèves en brut
 */
function listStudents() {
    return [
        {
            name: 'Charly',
            age: 15,
        },
        {
            name: 'Bobbybillybouba',
            age: 12,
        },
        {
            name: 'JeanMichelDestroyer',
            age: 16,
        }
    ]
}

ReactDOM.render(<App />, document.querySelector('#root'));
