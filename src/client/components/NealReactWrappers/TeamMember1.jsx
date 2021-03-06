
import React, { Component, PropTypes } from 'react';

import { TeamMember } from 'neal-react';
import image from '../../assets/images/people/grumpycat.jpg';

class TeamMember1 extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <TeamMember {...this.props} imageUrl={image}>
                { this.props.children }
            </TeamMember>
            );
    }
}


export default TeamMember1;