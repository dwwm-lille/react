import React from 'react';

class CounterA extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: this.props.default || 0 };

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>Incrémenter</button>
            </div>
        )
    }
}

export default CounterA;
