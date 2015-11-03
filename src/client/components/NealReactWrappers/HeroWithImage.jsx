
import React, { Component, PropTypes } from 'react';

import { Hero } from 'neal-react';
import image from '../../assets/images/hero-bg-01.jpg';

class HeroWithImage extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <Hero {...this.props} backgroundImage={image}>
                { this.props.children }
            </Hero>
            );
    }
}


export default HeroWithImage;