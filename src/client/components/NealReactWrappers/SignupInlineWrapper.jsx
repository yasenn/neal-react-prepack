
import React, { Component, PropTypes } from 'react';

import { SignupInline, Stripe } from 'neal-react';

class SignupInlineWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
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
            <SignupInline {...this.props} onSubmit={this.handleOnSubmit}/>
        );
    }
}


export default SignupInlineWrapper;