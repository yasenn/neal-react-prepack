
import React, { Component, PropTypes } from 'react';

import { CustomerQuote } from 'neal-react';
import image from '../../assets/images/people/elonmusk.jpg';

class CustomerQuoteElonMusk extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <CustomerQuote {...this.props} imageUrl={image}>
                <p>
                    <span>I came to the conclusion that we should aspire to increase the scope and scale of human consciousness in order to better understand what questions to ask. Really, the only thing that makes sense is to strive for greater collective enlightenment.</span>
                </p>
            </CustomerQuote>
            );
    }
}


CustomerQuoteElonMusk.propTypes = {
    name: PropTypes.string
};
CustomerQuoteElonMusk.defaultProps = {
    name: 'Elon Musk'
};

export default CustomerQuoteElonMusk;