class Instruction extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <a href="https://fr.reactjs.org/docs/composition-vs-inheritance.html">
                        Documentation sur la délégation via les props
                    </a>
                </p>
                <p>
                    Le component TitleComponent prend des enfants à l'intérieur de sa balise. En vous basant sur TitleComponent, créer un composant Card qui prendra en enfant un titre h2, un paragraphe et un bouton.
                </p>
                <p>
                    Depuis votre composant Card, générer les enfants de ce composant via les props comme dans TitleComponent
                </p>
                <p>Créer un composant Footer qui sera appelé à la fin de notre composant App.</p>
                <p>Donner à ce composant des balises enfants dont un paragraphe et une liste.</p>
                <p>Dans le composant Footer, générer ces enfants via les props.</p>
            </div>
        )
    }
}

class TitleComponent extends React.Component {
    render() {
        return ( // Tous les éléments contenus dans children sont rendus ici
            <h1>{this.props.children}</h1>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleComponent>
                    Je suis un children de titleComponent
                </TitleComponent>
                <TitleComponent>
                    <span>Nous sommes des children</span>
                    <span>De Title Component</span>
                </TitleComponent>
                <Instruction />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
