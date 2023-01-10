class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            message: null
        };
    }

    /**
     * Appelée après le constructor quand le composant est "monté"
     */
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('TOUTES LES 1 SECONDES');
            this.setState({ date: new Date() });
        }, 1000);
        console.log('React monte la clock');
    }

    /**
     * Appelée quand le composant est mis à jour (setState)
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('React met à jour la clock');
        console.log(prevState, this.state);

        // Si l'horloge tombe à 15h43m10s, on affiche DING DONG dans le state
        // Le setState de DING DING implique un autre componentDidUpdate donc on vérifie bien que le message n'a pas déjà été changé
        if (this.state.date.getSeconds() % 10 == 0 && prevState.message == null) {
            console.log('DING DONG');
            this.setState({ message: 'DING DONG' });
        } else if (this.state.date.getSeconds() % 10 != 0 && prevState.message == 'DING DONG') {
            this.setState({ message: null });
        }
    }

    /**
     * Appelée quand le composant est "démonté" (caché)
     */
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('React démonte la clock');
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString()} {this.state.message}</h1>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false };
    }

    toggleDisplay() {
        this.setState({ display: !this.state.display });
    }

    render() {
        return (
            <div>
                {this.state.display && <Clock />}
                <button onClick={() => this.toggleDisplay()}>Afficher / Cacher</button> <br />

                <a href="exercice-lifecycle-1">Exercice Cycle de vie 1</a> <br />
                <a href="exercice-lifecycle-2">Exercice Cycle de vie 2</a> <br />
                <a href="exercice-lifecycle-3">Exercice Cycle de vie 3</a> <br />
                <a href="exercice-lifecycle-challenge">Exercice Cycle de vie challenge</a>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
