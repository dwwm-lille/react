class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isToggle: true };

        // On dit que le this dans handleClick correspond au bouton
        // En JS, on a pas accès à this directement dans les méthodes des classes
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log('Clic', event);
        this.setState({ isToggle: !this.state.isToggle });
    }

    render() {
        return <button onClick={this.handleClick}>Cliquer ({this.state.isToggle ? 'Ouvert' : 'Fermé'})</button>;
    }
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: '' };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyUp} />
                {this.state.name && <h1>{this.props.lang} {this.state.name}</h1>}
            </div>
        )
    }
}

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                'Mélanie', 'Robin', 'Jeremy', 'Anthony',
                'Mathis', 'Fares', 'Sibel', 'Yacer',
                'Nathanael', 'Cindy', 'Timothé', 'Colinne',
                'Amandine', 'Nawal', 'Cécile', 'Romain',
            ],
        };

        this.handleShuffle = this.handleShuffle.bind(this);
    }

    handleShuffle() {
        this.setState({ students: this.state.students.sort(() => 0.5 - Math.random()) });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.students.map((student, index) =>
                        <div key={index}>
                            <li key={index}>{student}</li>
                            {(index + 1) % 4 == 0 && <li>-----</li>}
                        </div>
                    )}
                </ul>
                <button onClick={this.handleShuffle}>Mélanger</button>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Button />
                <Button />

                <Greeting lang="Bonjour" />
                <Greeting lang="Hello" />

                <Students />

                <a href="exercice-event-1">Exercice Event 1</a> <br />
                <a href="exercice-event-2">Exercice Event 2</a> <br />
                <a href="exercice-event-3">Exercice Event 3</a> <br />
                <a href="exercice-event-4">Exercice Event 4</a> <br />
                <a href="exercice-event-5">Exercice Event 5</a> <br />
                <a href="exercice-event-challenge">Exercice Event Challenge</a>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
