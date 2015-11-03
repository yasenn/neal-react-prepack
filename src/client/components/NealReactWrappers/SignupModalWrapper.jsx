
import React, { Component, PropTypes } from 'react';

import { SignupModal } from 'neal-react';

class SignupModalWrapper extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(options){
        const { name: name, email: email, password: password } = options;
        Stripe.StripeHandler.open({
            name: "Stripe Integration Included",
            description: "Like this? Donate $5 <3",
            panelLabel: "Donate {{amount}}",
            email: email,
            amount: 500
        });
    }

    render() {
        // const { propOne, propTwo } = this.props;
        return (
            <SignupModal {...this.props} onSubmit={this.handleOnSubmit}/>
        );
    }
}


SignupModalWrapper.propTypes = {
    modalId: PropTypes.string
};
SignupModalWrapper.defaultProps = {
    modalId: 'signup-modal'
};

export default SignupModalWrapper;