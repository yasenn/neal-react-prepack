
import React, { Component, PropTypes } from 'react';

import { CustomerQuote } from 'neal-react';
import image from '../../assets/images/people/paulgraham.jpg';

class CustomerQuotePaulGraham extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <CustomerQuote {...this.props} imageUrl={image}>
                <p>
                    <span>What I tell founders is not to sweat the business model too much at first. The most important task at first is to build something people want. If you don't do that, it won't matter how clever your business model is.</span>
                </p>
            </CustomerQuote>
            );
    }
}


CustomerQuotePaulGraham.propTypes = {
    name: PropTypes.string
};
CustomerQuotePaulGraham.defaultProps = {
    name: 'Paul Graham'
};

export default CustomerQuotePaulGraham;