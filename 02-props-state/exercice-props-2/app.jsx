class Instruction extends React.Component {
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

class App extends React.Component {
    render() {
        return (
            <div>
                <Title title="Bonjour" />
                <Instruction />
                <Button text="Bubu" />
                <Button text="bababa" />
                <Image width="300" source="https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
