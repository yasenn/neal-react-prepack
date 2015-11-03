
import React, { Component, PropTypes } from 'react';

import { PricingPlan, Stripe } from 'neal-react';

class PricingPlanWrapper extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(options){
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
            <PricingPlan {...this.props} onClick={this.handleOnClick} >
                { this.props.children }
            </PricingPlan>
            );
    }
}


export default PricingPlanWrapper;