
import React, { Component, PropTypes } from 'react';

import { Code } from 'neal-react';

class CodeWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <Code {...this.props}>
                { this.props.codeText }
            </Code>
            );
    }
}


CodeWrapper.propTypes = {
    codeText: PropTypes.string,
    lang: PropTypes.string,
    block: PropTypes.bool
};
CodeWrapper.defaultProps = {
    codeText: '<h3><span>Code Text</span></h3>',
    lang: 'jsx',
    block: true
};

export default CodeWrapper;