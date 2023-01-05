// EXO 1 PROPS
class Instruction1 extends React.Component {
    render() {
        return (
            <div>
                <p><a href="https://fr.reactjs.org/docs/components-and-props.html">Documentation sur les composants et les props</a></p>
                <p>
                    En vous basant sur les exemple TitleComponent et Instruction, créez votre propre component
                    PrimaryButton qui contiendra un bouton simple avec un texte de votre choix.
                </p>
                <p>Depuis la classe App, appeler ce nouveau composant en vous inspirant des exemples</p>
                <p>Créer un nouveau composant TextField qui contiendra un input de type texte et un label de votre choix.</p>
                <p>Générer ce nouveau composant TextField depuis la classe App deux fois.</p>
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

class PrimaryButton extends React.Component {
    render() {
        return (
            <button>Ceci est un bouton</button>
        )
    }
}

class TextField extends React.Component {
    render() {
        return (
            <div>
                <label>Nom</label>
                <input type="text" />
            </div>
        )
    }
}

class Exo1 extends React.Component {
    render() {
        return (
            <div>
                <TitleComponent />
                <Instruction1 />
                <PrimaryButton />
                <TextField />
                <TextField />
            </div>
        )
    }
}

// EXO 2 PROPS
class Instruction2 extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <a href="https://fr.reactjs.org/docs/components-and-props.html">Documentation sur les composants et les props</a>
                </p>
                <p>
                    En vous basant sur l'exemple de Title, créer un composant Button qui prendra en props un texte, et qui sera affiché à l'intérieur de ce bouton.
                </p>
                <p>Appeler ce bouton deux fois en lui envoyant pour props "Bubu", et "bababa"</p>
                <p>Créer un composant Image qui va afficher une image, et qui prend une clé src en guise de props</p>
                <p>Appeler cette image en lui envoyant cette adresse comme prop de src :
                    https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg
                </p>
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}

class Image extends React.Component {
    render() {
        return (
            <img src={this.props.source} width={this.props.width} />
        )
    }
}

class Exo2 extends React.Component {
    render() {
        return (
            <div>
                <Title title="Bonjour" />
                <Instruction2 />
                <Button text="Bubu" />
                <Button text="bababa" />
                <Image width="300" source="https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg" />
            </div>
        )
    }
}

// EXO 3 PROPS
class Instruction3 extends React.Component {
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

class Exo3 extends React.Component {
    render() {
        const vegetables = listVegetables();
        const students = listStudents();

        return (
            <div>
                <TitleComponent />
                <Instruction3 />
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

class App extends React.Component {
    render() {
        return (
            <div>
                <Exo1 />
                <Exo2 />
                <Exo3 />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
