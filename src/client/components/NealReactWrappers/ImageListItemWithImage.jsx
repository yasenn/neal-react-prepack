
import React, { Component, PropTypes } from 'react';

import { ImageListItem } from 'neal-react';

class ImageListItemWithImage extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <ImageListItem {...this.props}>
                { this.props.children }
            </ImageListItem>
            );
    }
}


export default ImageListItemWithImage;