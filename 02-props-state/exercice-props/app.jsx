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

class App extends React.Component {
    render() {
        return (
            <div>
                <Exo1 />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
