
import React, { Component, PropTypes } from 'react';

import { CustomerQuote } from 'neal-react';
import image from '../../assets/images/people/reidhoffman.jpg';

class CustomerQuoteReidHoffman extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <CustomerQuote {...this.props} imageUrl={image}>
                <p>
                    <span>If you are not embarrassed by the first version of your product, you've launched too late.</span>
                </p>
            </CustomerQuote>
            );
    }
}


CustomerQuoteReidHoffman.propTypes = {
    name: PropTypes.string
};
CustomerQuoteReidHoffman.defaultProps = {
    name: 'Reid Hoffman'
};

export default CustomerQuoteReidHoffman;