
import React, { Component, PropTypes } from 'react';


class App extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <div {...this.props}>
                { this.props.children }
            </div>
            );
    }
}


export default App;