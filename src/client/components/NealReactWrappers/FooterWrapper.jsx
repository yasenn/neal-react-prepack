
import React, { Component, PropTypes } from 'react';

import { Footer } from 'neal-react';

class FooterWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        const businessAddress = (
            <address>
                <strong>this.props.brandName</strong><br/>
                1337 Market Street, Suite 1337<br/>
                San Francisco, CA 94103<br/>
                +1 (123) 456-7890
            </address>
        );
        return (
            <Footer {...this.props} address={businessAddress} >
                { this.props.children }
            </Footer>
            );
    }
}


FooterWrapper.propTypes = {
    brandName: PropTypes.string,
    facebookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    githubUrl: PropTypes.string
};
FooterWrapper.defaultProps = {
    brandName: 'Sample Page',
    facebookUrl: 'http://www.facebook.com',
    twitterUrl: 'http://www.twitter.com/dennybritz',
    githubUrl: 'https://github.com/dennybritz/neal-react'
};

export default FooterWrapper;