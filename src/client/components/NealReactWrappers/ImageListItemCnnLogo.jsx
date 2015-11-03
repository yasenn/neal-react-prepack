
import React, { Component, PropTypes } from 'react';

import { ImageListItem } from 'neal-react';
import image from '../../assets/images/press/cnn-logo.png';

class ImageListItemCnnLogo extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <ImageListItem {...this.props} src={image}>
                { this.props.children }
            </ImageListItem>
            );
    }
}


export default ImageListItemCnnLogo;